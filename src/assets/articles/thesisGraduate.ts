import { alumni } from "@/views/Member/AlumniTree";
import { bib } from "./bibVue";

export const bibGraduate: bib = AlumniTree2bibGraduate()

/**
 * view/Member/AlumniTree.tsのデータをもとにthesis.tsを作成
 */
function AlumniTree2bibGraduate() {
  let articles: bib[] = []

  for (const year in alumni) {
    let _articles: bib[] = alumni[year].map(person => {
      
      let key = `${person.firstName}${year}`

      return {[key]: {
        author  : person.firstName + person.lastName,
        title   : person.title,
        journal : person.grade=='B4' ? '卒業論文' : person.grade=='M2' ? '修士論文' : '博士論文',
        year    : year,
        url     : person.url
      }}
    })

    articles = articles.concat(_articles)
  }

  return articles.reduce(
    (accumulator, currentValue) => Object.assign(accumulator, currentValue),
    {}
  )
}