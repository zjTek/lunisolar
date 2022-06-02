// 月朔周期平均天数
export const MOON_CYCLE = 29.53059

// 月球自转周期天数
export const MOON_ROTATION_CYCLE = 27.32166

export const UNITS = {
  ms: 'millisecond',
  s: 'second',
  m: 'minute',
  h: 'hour',
  d: 'day',
  w: 'week',
  M: 'month',
  q: 'quarter',
  y: 'year'
}

export const GRE = 'GRE' // Gregorian
export const LUN = 'LUN' // Lunar

// regex
export const REGEX_PARSE =
  /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/