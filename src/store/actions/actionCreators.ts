import * as actionTypes from './actionTypes'

export type NumberAction = {
  type: string
}

export function addNumber(): NumberAction {
  return { type: actionTypes.ADD_NUMBER }
}
// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article,
//   }

//   return simulateHttpRequest(action)
// }
