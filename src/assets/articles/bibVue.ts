import { bibBook } from "./thesisBook"
import { bibInternational } from "./thesisInternational"
import { bibOther } from "./thesisOther"
import { bibRefereed } from "./thesisRefereed"

/**
 * 各Bibの型定義
 * 
 * 原則として以下の項目を全て記述し、?がついている項目は省略することができる
 * 
 * ---
 * 
 * 【注意】
 * 
 * - authorの項目では、人同士の区切りには「 and 」を用いること（カンマ区切り不可）
 */
export interface bib {
  [key: string]: {
    author: string
    title: string
    journal: string
    volume?: string
    number?: string
    pages?: string
    year: string
    url?: string
  }
}

/**
 * 全てのbibデータ
 */
const data = Object.assign({}, bibRefereed, bibBook, bibInternational, bibOther)

/**
 * 論文をWebページに記載する際の表示名を取得する
 * `thesis.ts`に論文を事前に登録しておくことで、任意のページから常に同じフォーマットの論文データを取得可能
 * @param key `thesis.ts`に登録した論文のKey
 * @returns 「論文を表示するときの文字列」と「論文のURL」
 */
export function getArticleItem(key: string): [string, string | undefined] {
  const articleData = data[key]
  const langType = judgeLang(articleData.title)
  const volume = articleData.volume === void 0 ? '' : `, ${articleData.volume}`
  const number = articleData.number === void 0 ? '' : `(${articleData.number})`
  const pages = articleData.pages === void 0 ? '' : `, p.${articleData.pages}`
  return [`${allNames(articleData.author, langType)} (${articleData.year}) ${articleData.title}. ${articleData.journal}${volume}${number}${pages}`, articleData.url]
}

type Language = 'JP' | 'EN'
/**
 * 論文の言語を判定する
 */
function judgeLang(title: string): Language {
  const re = new RegExp('^[ -~]+$')
  if (re.test(title)) { return 'EN' }
  else { return 'JP' }
}

/**
 * Bibで指定された名前群を分割する
 */
function splitNames(names: string) {
  return names.split(' and ')
}

/**
 * 英語版の名前を取得
 */
function getENname(name: string) {
  const names = name.split(' ')
  let lastName: string
  let firstName = names[0]
  if (firstName.slice(-1) != ',') {
    firstName += ','
    lastName   = names[names.length-1]
  }
  else {
    firstName = names[names.length-1]
    lastName  = names[0]
  }
  return `${lastName} ${firstName[0]}.`
}

/**
 * 日本語版の名前を取得
 */
function getJPname(name: string) {
  return name.replace(' ', '')
}

/**
 * 名前の一覧を取得
 */
function allNames(names: string, LangType: Language) {
  const nonFormatNames = splitNames(names)
  const formatNames = nonFormatNames.map(name => {
    switch (LangType) {
      case 'EN':
        return getENname(name)
      case 'JP':
        return getJPname(name)
      default:
        return `(Undefined) ${name}`
    }
  });
  return formatNames.join(', ')
}