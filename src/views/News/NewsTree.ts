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
    type: 'event',
    year: '2023',
    month: '2',
    date: '15',
    description: '新B4が配属されました!!'
  },
  {
    type: 'event',
    year: '2023',
    month: '2',
    date: '8-9',
    description: '卒論発表会が行われました'
  },
  {
    type: 'publish',
    year: '2023',
    month: '1',
    date: '12',
    description: '論文がTransportation Research Part C: Emerging Technologiesに掲載されました',
    link: 'https://www.sciencedirect.com/science/article/pii/S0968090X23000037?via%3Dihub'
  },
  {
    type: 'meeting',
    year: '2022',
    month: '12',
    date: '3-4',
    description: '都市計画学会に参加してきました'
  },
  {
    type: 'meeting',
    year: '2022',
    month: '11',
    date: '12-13',
    description: '土木計画学秋大会に参加してきました',
  },
  {
    type: 'meeting',
    year: '2022',
    month: '10',
    date: '27',
    description: '論文が雑誌Travel Behaviour & Societyに掲載されました',
  },
  {
    type: 'publish',
    year: '2022',
    month: '10',
    date: '26',
    description: '都市計画論集で3本の論文が公開されました',
  },
  {
    type: 'meeting',
    year: '2022',
    month: '9',
    date: '23-25',
    description: '行動モデル夏の学校＠東大で総合一位になりました!',
    link: 'SummerSchool',
  },
  {
    type: 'publish',
    year: '2021',
    month: '11',
    date: '30',
    description: 'Oyama, Hara and Akamatsu (2022) Markovian traffic equilibrium assignment based on network generalized extreme value model がTransportation Research Part Bで公開されました',
    link: 'https://www.sciencedirect.com/science/article/pii/S0191261521001934'
  },
  {
    type: 'event',
    year: '2021',
    month: '11',
    date: '27',
    description: '12月1日(水)5限の土木工学キャリアセミナーで国土交通省の吉田調整官を招いて「土木・建築をつなぐ都市・地域計画の仕事」という題の講演をいただきました'
  },
  {
    type: 'publish',
    year: '2022',
    month: '9',
    date: '23-25',
    description: '池上・大山 (2021) "公共交通利便性に着目した活動ベースの高齢者モビリティ指標の提案" が都市計画論集で出版されました',
    link: ''
  },
  {
    type: 'event',
    year: '2021',
    month: '4',
    description: '2021年度基礎ゼミを打ち上げ,豊洲公園でピクニックしました'
  },
  {
    type: 'event',
    year: '2021',
    month: '4',
    description: '卒大宮で自動運転バスの実証実験に参加しました'
  },
  {
    type: 'award',
    year: '2021',
    month: '3',
    date: '17',
    description: '村上君の卒論が高く評価され，土木賞を受賞しました．おめでとうございます！',
    link: 'SummerSchool'
  },
  {
    type: 'award',
    year: '2021',
    month: '3',
    date: '1',
    description: '砂田君，藤島君，國分君が，(株)丸八テント商会様とのチームで参加した芝浦ビジネスモデルコンペティション(SBMC)で，ビジネス賞を受賞しました．おめでとうございます！'
  },
  {
    type: 'event',
    year: '2021',
    month: '2',
    date: '16',
    description: '新しく9人の卒論生が研究室に配属されました.これからよろしくお願いします',
    link:' Member'
  },
  {
    type: 'event',
    year: '2021',
    month: '1',
    date: '21',
    description: 'ホームページ (暫定版) を公開しました'
  },
  {
    type: 'event',
    year: '2020',
    month: '4',
    date: '1',
    description: '大山が芝浦工業大学土木工学科に助教として着任し,都市環境設計研究室が立ち上がりました.Oyama started working at Shibaura Institute of Technology as an Assistant Professor and the director of the Activity Landscape Design (ActScape) Laboratory.'
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
  return `${month}月${date}日, ${year}年`
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