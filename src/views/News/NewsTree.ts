// linkには「HP内の記事」or「外部へのURL」が入ります
// 「HP内の記事」の場合，linkは「当該記事のファイル名」とすることでリンクが生成されます

// コンテンツのタイプに応じてアイコンと色を指定する
// iconはここから一覧で調べられる（https://fonts.google.com/icons）
const articleType: { [name: string]: {icon: string, color: string} } = {
  'award': {
    icon: 'emoji_events',
    color: 'orange'
  },
  'meeting': {
    icon: 'group',
    color: 'black',
  },
  'publish': {
    icon: 'description',
    color: 'black',
  },
  'event': {
    icon: 'celebration',
    color: 'secondary'
  }
}

// 表示する記事の一覧
export const tree = [
  {
    type: 'meeting',
    year: '2022',
    month: 'November',
    date: '12-13',
    description: '土木計画学秋大会に参加してきました',
  },
  {
    type: 'publish',
    year: '2022',
    month: 'November',
    date: '10',
    description: '論文がElsevier社の雑誌Travel Behaviour and Societyで公開されました',
    link: 'https://authors.elsevier.com/c/1g3SE,oML19xKG',
  },
  {
    type: 'award',
    year: '2022',
    month: 'September',
    date: '23-25',
    description: '行動モデル夏の学校＠東大で総合一位になりました!',
    link: 'SummerSchool',
  },
  {
    type: 'publish',
    year: '2021',
    month: 'November',
    date: '30',
    description: 'Oyama, Hara and Akamatsu (2022) Markovian traffic equilibrium assignment based on network generalized extreme value model がTransportation Research Part Bで公開されました',
    link: 'https://www.sciencedirect.com/science/article/pii/S0191261521001934',
  }
]

/**
 * リンクを取得する
 */
export function getLink(year:string, link?:string) {
  if (link == undefined) {
    return undefined
  }
  if (link.substring(0, 4) == 'http') {
    return link
  }
  else {
    return `news/${year}/${link}`
  }
}

/**
 * 日付を取得する
 */
export function setDate(year:string, month:string, date:string) {
  return `${month} ${date}, ${year}`
}

/**
 * イベントのアイコンを取得
 */
export function getSymbolIcon(type:string) {
  return articleType[type].icon
}

/**
 * イベントの色を取得
 */
export function getSymbolColor(type:string) {
  return articleType[type].color
}