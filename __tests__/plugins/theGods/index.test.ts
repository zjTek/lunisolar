import lunisolar from '../../../src/index'
import theGods from '../../../src/plugins/theGods'
import { God } from '../../../src/plugins/theGods/class/god'
import type { TheGods } from '../../../src/plugins/theGods/class/theGods'

lunisolar.extend(theGods)

interface Lunisolar extends ILunisolar {
  // duty12God: God
  theGods: TheGods
}

describe('plugins/theGods duty12God', () => {
  it('2022-08-16', () => {
    const lsr = lunisolar('2022-08-16') as unknown as Lunisolar
    expect(lsr.theGods.getDuty12God().toString()).toBe('執')
  })
  it('2022-08-25', () => {
    const lsr = lunisolar('2022-08-25') as unknown as Lunisolar
    expect(lsr.theGods.getDuty12God().name).toBe('滿')
  })
})

describe('plugins/theGods life12God', () => {
  it('2022-09-28', () => {
    const lsr = lunisolar('2022-09-28') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('絕')
  })
  it('2022-09-29', () => {
    const lsr = lunisolar('2022-09-29') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('絕')
  })
  it('2022-09-30', () => {
    const lsr = lunisolar('2022-09-30') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('墓')
  })
  it('2022-10-01', () => {
    const lsr = lunisolar('2022-10-01') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('胎')
  })
  it('2022-10-2', () => {
    const lsr = lunisolar('2022-10-2') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('胎')
  })
  it('2022-10-3', () => {
    const lsr = lunisolar('2022-10-3') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('墓')
  })
  it('2022-10-4', () => {
    const lsr = lunisolar('2022-10-4') as unknown as Lunisolar
    expect(lsr.theGods.getLife12God('day').name).toBe('絕')
  })

  describe('plugins/theGods 神煞', () => {
    it('2022-10-19', () => {
      // 壬寅年 庚戌月 乙巳日
      const lsr = lunisolar('2022-10-19') as unknown as Lunisolar
      // 年神
      const tobeYearGods = ['陰貴', '太陰', '六害', '歲刑', '天官符']
      expect(lsr.theGods.getGods('Y').map(g => g.key)).toEqual(tobeYearGods)
      // 月神
      const tobeMonthGods = ['遊禍', '陰德', '續世', '血忌']
      expect(lsr.theGods.getGods('M').map(g => g.key)).toEqual(tobeMonthGods)
      // 日神
      const tobeDayGods = ['寶日', '無祿', '明堂']
      expect(lsr.theGods.getGods('D').map(g => g.key)).toEqual(tobeDayGods)

      const gods = lsr.theGods.getGods('YMD')
      expect(gods.map(g => g.key)).toEqual([...tobeYearGods, ...tobeMonthGods, ...tobeDayGods])

      const acts = lsr.theGods.getActs(0)
      console.log(acts)
    })

    it('2018-7-9', () => {
      // 戊戌年 已未月 壬寅日
      const lsr = lunisolar('2018-7-9') as unknown as Lunisolar
      // 年神
      const tobeYearGods = ['官符', '神后', '伏兵', '坐煞', '畜官']
      expect(lsr.theGods.getGods('Y').map(g => g.key)).toEqual(tobeYearGods)
      // 月神
      const tobeMonthGods = ['五富', '遊禍', '母倉']
      expect(lsr.theGods.getGods('M').map(g => g.key)).toEqual(tobeMonthGods)
      // 日神
      const tobeDayGods = ['五合', '鳴吠對', '寶日', '金匱']
      expect(lsr.theGods.getGods('D').map(g => g.key)).toEqual(tobeDayGods)

      const gods = lsr.theGods.getGods('MD')
      expect(gods.map(g => g.key)).toEqual([...tobeMonthGods, ...tobeDayGods])
      // console.log(gods)
      // console.log(gods.map(g => g.key))

      const acts = lsr.theGods.getActs(0)
      console.log(acts)
    })

    it('2022-10-21', () => {
      // 壬寅 庚戌 丁未 庚子
      const lsr = lunisolar('2022-10-21') as unknown as Lunisolar
      // 年神
      const tobeYearGods = ['歲德合', '支德', '向煞', '死符', '小耗']
      expect(lsr.theGods.getGods('Y').map(g => g.key)).toEqual(tobeYearGods)
      // 月神
      const tobeMonthGods = ['天德合', '月刑', '河魁', '玉宇', '天倉', '母倉', '五虛', '八風']
      expect(lsr.theGods.getGods('M').map(g => g.key)).toEqual(tobeMonthGods)
      // 日神
      const tobeDayGods = ['寶日', '八專', '朱雀']
      expect(lsr.theGods.getGods('D').map(g => g.key)).toEqual(tobeDayGods)

      expect(lsr.theGods.getGoodGods('MD').map(g => g.key)).toEqual([
        '天德合',
        '玉宇',
        '天倉',
        '母倉',
        '寶日'
      ])
      expect(lsr.theGods.getBadGods('MD').map(g => g.key)).toEqual([
        '月刑',
        '河魁',
        '五虛',
        '八風',
        '八專',
        '朱雀'
      ])

      expect(lsr.char8.toString()).toBe('壬寅 庚戌 丁未 庚子')

      expect(lsr.theGods.getGoodGods('H').map(g => g.key)).toEqual([])

      // expect(lsr.theGods.getGods('H').map(g => `${g.key} ${g.luckLevel}`)).toEqual(['日害', '天刑'])
      expect(lsr.theGods.getBadGods('H').map(g => g.key)).toEqual(['日害', '天刑'])

      const acts = lsr.theGods.getActs(0)
      console.log(acts)

      const hgs = lsr.theGods.getAllDayHourGods()
      const hoursGods = [
        ['天刑', '日害'], // -2
        ['朱雀', '日破', '日刑'], // -3
        ['金匱', '路空', '旬空'], // -1
        ['寶光', '五不遇', '路空', '旬空'], // -2
        ['白虎'], // -1
        ['玉堂', '日馬'], // 2
        ['天牢', '日祿', '喜神', '日合'], // 2
        ['玄武', '日建'], // 0
        ['司命'], // 1
        ['勾陳', '天乙貴人', '福星貴人'], // 1
        ['青龍'], // 1
        ['明堂', '天乙貴人', '天官貴人'] // 3
      ]
      for (let i = 0; i < 12; i++) {
        const te = hoursGods[i]
        const hg = hgs[i]
        expect(hg.map(g => g.key)).toEqual(te)
      }

      expect(lsr.theGods.getLuckHours(1)).toEqual([-2, -3, -1, -2, -1, 2, 2, 0, 1, 1, 1, 3])
      expect(lsr.theGods.getLuckHours()).toEqual([-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1])
    })
  })
})
