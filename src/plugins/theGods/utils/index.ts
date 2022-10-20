import { getBranchValue, getStemValue, getTranslation } from '../../../utils'
import { yearGods } from '../gods/yearGods'
import { monthGods } from '../gods/monthGods'
import { monthSeasonGods } from '../gods/monthSeasonGods'
import { dayGods } from '../gods/dayGods'

// 神煞地支順行
export function branchAscGodFunc(offset: number): CheckGodFunc {
  return getCheckGodFunc(
    (lsr, ymdh) => (getBranchValue(lsr, ymdh ?? 'month') + offset) % 12,
    getBranchValue
  )
}

// 神煞地支逆行
export function branchDescGodFunc(offset: number): CheckGodFunc {
  return getCheckGodFunc(
    (lsr, ymdh) =>
      ([0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1][getBranchValue(lsr, ymdh ?? 'month')] + offset) % 12,
    getBranchValue
  )
}

// 神煞天干順行
export function stemAscGodFunc(offset: number): CheckGodFunc {
  return getCheckGodFunc(
    (lsr, ymdh) => (getStemValue(lsr, ymdh ?? 'month') + offset) % 10,
    getStemValue
  )
}

// 月神随月将地支逆行
export function monthGeneralDescGodFunc(offset: number): CheckGodFunc {
  return getCheckGodFunc(
    lsr =>
      ([0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1][lsr.getMonthBuilder(1)[0].branch.value] + offset) %
      12,
    getBranchValue
  )
}

export function getCheckGodFunc<T = number>(
  resFrom: (lsr: lunisolar.Lunisolar, ymdh?: YMDH) => T,
  resTo: (lsr: lunisolar.Lunisolar, ymdh: YMDH) => T
): CheckGodFunc
export function getCheckGodFunc<T = number, U = T>(
  resFrom: (lsr: lunisolar.Lunisolar, ymdh?: YMDH) => T,
  resTo: (lsr: lunisolar.Lunisolar, ymdh: YMDH) => U,
  compareSymbol: 'includes'
): CheckGodFunc
export function getCheckGodFunc<T = number, U = T>(
  resFrom: (lsr: lunisolar.Lunisolar, ymdh?: YMDH) => T,
  resTo: (lsr: lunisolar.Lunisolar, ymdh: YMDH) => U,
  compareSymbol: string = '='
): CheckGodFunc {
  function func<T = number>(lsr: lunisolar.Lunisolar, fromYmdh?: YMDH): T
  function func<T = number>(lsr: lunisolar.Lunisolar, fromYmdh: YMDH | undefined, toYmdh: null): T
  function func(lsr: lunisolar.Lunisolar, fromYmdh: YMDH | undefined, toYmdh: YMDH): boolean
  function func(
    lsr: lunisolar.Lunisolar,
    fromYmdh: undefined | YMDH,
    toYmdh: null | YMDH = null
  ): T | boolean {
    const res = resFrom(lsr, fromYmdh)
    if (!toYmdh) return res
    if (res === null || res === false) return false
    const to = resTo(lsr, toYmdh)
    return compareSymbol === 'includes' && Array.isArray(res)
      ? res.length === 1
        ? res[0] === to
        : res.includes(to)
      : res === (to as unknown as T)
  }
  return func
}

export function getCommonCheckGodFunc(
  ruleArray: (number | null)[] | string,
  compareFromFunc: StemOrBranchValueFunc,
  fromDiv: number,
  fromDefaultYmdh: YMDH = 'month',
  compareToFunc?: StemOrBranchValueFunc
): CheckGodFunc {
  return getCheckGodFunc(
    (lsr, ymdh) => Number(ruleArray[compareFromFunc(lsr, ymdh ?? fromDefaultYmdh, fromDiv)]),
    compareToFunc || compareFromFunc
  )
}

export function actKT(acts: string[], isReturnKey: boolean, locale: { [key: string]: any }) {
  return acts.map(i => (isReturnKey ? i : getTranslation(locale, `theGods.acts.${i}`)))
}

/**
 * 通過神煞key取得宜忌
 * @param godKeys 神煞key列表
 * @returns 宜忌
 */
export function getActsByYmdGodKeys(godKeys: string[]): ActsSet {
  const good = new Set<string>()
  const bad = new Set<string>()
  for (const k of godKeys) {
    for (const godDict of [monthGods, monthSeasonGods, dayGods, yearGods]) {
      if (godDict.hasOwnProperty(k)) {
        const [_, gAct, bAct] = godDict[k]
        if (gAct) {
          gAct.forEach(g => {
            good.add(g)
          })
        }
        if (bAct) {
          bAct.forEach(g => {
            bad.add(g)
          })
        }
        break
      }
    }
  }
  return { good, bad }
}

export const removeSetByList = function (setData: Set<string>, removes: string[]) {
  for (const item of removes) setData.delete(item)
}

export const filterActsNotInSet = function (acts: ActsSet, filterList: string[]) {
  const good = new Set<string>()
  const bad = new Set<string>()
  for (const item of filterList) {
    if (acts.good.has(item)) good.add(item)
    if (acts.bad.has(item)) bad.add(item)
  }
  acts.good = good
  acts.bad = bad
  return acts
}

// act replacer to string
export const arToString = function (replacer: { [key: string]: string }): string {
  let res = ''
  for (const key in replacer) {
    res += `${key}${replacer[key]}`
  }
  return res
}