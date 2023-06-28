export enum TodoCategories {
  ALL = 'all',
  PRIVATE = 'private',
  PUBLIC = 'public'
}
export interface TodosQuery {
  categorie?: TodoCategories;
}