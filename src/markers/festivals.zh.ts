import type { Lunisolar } from '../class/lunisolar'
export const festivals = [
  {
    format: 'MMDD',
    map: {
      '0101': {
        tag: '傳統節日',
        name: '元旦'
      },
      '0110': {
        tag: '中國主題',
        name: '中国人民警察节'
      },
      '0121': {
        tag: '國際主題',
        name: '國際擁抱日'
      },
      '0202': {
        tag: '國際主題',
        name: '世界濕地日'
      },
      '0204': {
        tag: '國際主題',
        name: '世界抗癌日'
      },
      '0210': {
        tag: '國際主題',
        name: '國際氣象節'
      },
      '0214': {
        tag: '西方節日',
        name: '情人節'
      },
      '0220': {
        tag: '國際主題',
        name: '世界社會公正日'
      },
      '0301': {
        tag: '國際主題',
        name: '國際海豹日'
      },
      '0303': [
        {
          tag: '國際主題',
          name: '世界野生動植物日'
        },
        {
          tag: '中國主題',
          name: '全國愛耳日'
        },
        {
          tag: '國際主題',
          name: '國際愛耳日'
        }
      ]
    },
    '0305': {
      tag: '中國主題',
      name: '學雷鋒記念日'
    },
    '0306': {
      tag: '國際主題',
      name: '世界青光眼日'
    },
    '0308': {
      tag: '國際主題',
      name: '婦女節'
    },
    '0312': {
      tag: '中國主題',
      name: '植樹節'
    },
    '0315': {
      tag: '國際主題',
      name: '國際消費日'
    },
    '0320': [
      {
        tag: '國際主題',
        name: '世界無肉日'
      },
      {
        tag: '國際主題',
        name: '國際幸福日'
      }
    ],
    '0321': [
      {
        tag: '國際主題',
        name: '世界森林日'
      },
      {
        tag: '國際主題',
        name: '世界睡眠日'
      },
      {
        tag: '國際主題',
        name: '世界兒歌日'
      },
      {
        tag: '國際主題',
        name: '國際消除種族歧視日'
      }
    ],
    '0322': {
      tag: '國際主題',
      name: '世界水日'
    },
    '0323': {
      tag: '國際主題',
      name: '世界氣象日'
    },
    '0324': {
      tag: '國際主題',
      name: '世界防治結核病日'
    },
    '0327': {
      tag: '國際主題',
      name: '世界戲劇日'
    }
    // '0327': {
    //   tag: '國際主題',
    //   name: '世界戲劇日'
    // }
  },
  {
    format: 'M,d,dR',
    map: {
      '3,4,2': {
        tag: '國際主題',
        name: '世界腎臟日'
      },
      '3,2,3': {
        tag: '國際主題',
        name: '世界社會工作日'
      }
    }
  },
  {
    format: 'M,d,dRr',
    map: {
      '1,0,1': {
        tag: '國際主題',
        name: '國際麻風節'
      },
      '3,1,1': {
        tag: '中國主題',
        name: '中小學安全教育日'
      }
    }
  },
  {
    format: 'lMn,lDn',
    map: {
      '1,1': {
        tag: '傳統節日',
        name: '春節'
      },
      '2,2': {
        tag: '傳統節日',
        name: '龍抬頭'
      },
      '12-8': {
        tag: '傳統節日',
        name: '腊八节'
      }
    }
  },
  {
    format: [
      'MM',
      function (lsr: Lunisolar) {
        // 检查是否当月的最后一天
        return lsr.add(1, 'day').day === 1
      }
    ],
    map: {
      '2': {
        tag: '國際主題',
        name: '國際罕見病日'
      }
    }
  }
]