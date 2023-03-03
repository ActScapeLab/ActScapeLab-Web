// linkには「HP内の記事」or「外部へのURL」が入ります
// 「HP内の記事」の場合，linkは「当該記事のファイル名」とすることでリンクが生成されます

export const tree = [
  {
    year: '2022',
    month: 'November',
    date: '12-13',
    description: '土木計画学秋大会に参加してきました',
    link: 'jscefall'
  },
  {
    year: '2022',
    month: 'November',
    date: '10',
    description: '論文がElsevier社の雑誌Travel Behaviour and Societyで公開されました',
    link: 'https://authors.elsevier.com/c/1g3SE,oML19xKG'
  },
  {
    year: '2022',
    month: 'September',
    date: '23-25',
    description: '行動モデル夏の学校＠東大で総合一位になりました!',
    link: 'summerschool'
  },
  {
    year: '2021',
    month: 'November',
    date: '30',
    description: 'Oyama, Hara and Akamatsu (2022) Markovian traffic equilibrium assignment based on network generalized extreme value model がTransportation Research Part Bで公開されました',
    link: 'https://www.sciencedirect.com/science/article/pii/S0191261521001934'
  }
]

/**
 * リンクを取得する
 */
export function getLink(link:string, year:string) {
  if (link.substring(0, 4) == 'http') {
    return link
  }
  else {
    return `news/${year}/${link}`
  }
}