import { STEMS, BRANCHS, HIDDEN_STEMS } from '../constants/calendarData'
import { Element5 } from './element5'

/**
 * 地支
 */
export class Branch {
  private _value: number = -1
  private _e5?: Element5
  private _hiddenStems: Stem[] = []

  constructor(value: number | string | Branch) {
    if (value instanceof Branch) return value
    if (typeof value === 'number') {
      this._value = value % 12
    } else if (typeof value === 'string') {
      const branchIndex = BRANCHS.indexOf(value)
      if (branchIndex === -1) throw new Error('Invalid branch value')
      this._value = branchIndex
    }
  }

  get value(): number {
    return this._value
  }

  get hiddenStems(): Stem[] {
    if (this._hiddenStems.length) return this._hiddenStems
    const hiddenStemsValue = HIDDEN_STEMS[this._value]
    this._hiddenStems = hiddenStemsValue.map(v => new Stem(v))
    return this._hiddenStems
  }

  get e5(): Element5 {
    if (this._e5) return this._e5
    const i = Math.floor((this._value + 10) / 3) % 4
    if ((this._value + 10) % 3 === 2) {
      this._e5 = new Element5(2)
    } else {
      this._e5 = new Element5(i < 2 ? i : i + 1)
    }
    return this._e5
  }

  toString(): string {
    return BRANCHS[this._value]
  }

  valueOf(): number {
    return this._value
  }
}

/**
 * 天干
 */
export class Stem {
  private _value: number = -1
  private _branchs: Branch[] = []
  private _e5?: Element5
  constructor(value: number | string | Stem) {
    if (value instanceof Stem) return value
    if (typeof value === 'number') {
      this._value = value % 10
    } else if (typeof value === 'string') {
      const stemIndex = STEMS.indexOf(value)
      if (stemIndex === -1) throw new Error('Invalid stem value')
      this._value = stemIndex
    }
  }

  get value(): number {
    return this._value
  }

  get branchs(): Branch[] {
    if (this._branchs.length) return this._branchs
    const branchs = BRANCHS.filter((_: string, index: number) => index % 2 === this._value % 2)
    this._branchs = branchs.map((branch: string) => new Branch(branch))
    return this._branchs
  }

  get e5(): Element5 {
    if (this._e5) return this._e5
    this._e5 = new Element5(Math.floor(this._value / 2))
    return this._e5
  }

  toString(): string {
    return STEMS[this._value]
  }

  valueOf(): number {
    return this._value
  }
}

/**
 * 天干地支组合
 */
export class SB {
  private _stem: Stem
  private _branch: Branch
  private _value: number = -1

  constructor(stemOrValue: number | string | Stem, branch?: number | string | Branch) {
    if (typeof branch !== 'undefined') {
      this._stem = new Stem(stemOrValue)
      this._branch = new Branch(branch)
      const stemValue = this._stem.valueOf(),
        branchValue = this._branch.valueOf()
      // 如果一个为奇数一个为偶数，则不能组合
      if ((stemValue + branchValue) % 2 !== 0) throw new Error('Invalid SB value')
      this._value = (stemValue % 10) + ((6 - (branchValue >> 1) + (stemValue >> 1)) % 6) * 10
    } else if (typeof stemOrValue === 'number') {
      this._value = stemOrValue % 60
      const stemValue = this._value % 10
      const branchValue = this._value % 12
      this._stem = new Stem(stemValue)
      this._branch = new Branch(branchValue)
    } else {
      throw new Error('Invalid SB value')
    }
  }

  get stem(): Stem {
    return this._stem
  }

  get branch(): Branch {
    return this._branch
  }

  get value(): number {
    return this._value
  }

  toString(): string {
    return `${this._stem}${this._branch}`
  }

  valueOf(): number {
    return this._value
  }
}