import { databaseProduct } from "./databaseProductsType";
import { Screens } from "./screens";

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: any;
}

export enum Actions {
  "CHANGE_SCREEN" = "CHANGE_SCREEN",
  "CHANGE_SEARCH_TEXT" = "CHANGE_SEARCH_TEXT",
  "CHANGE_VIEW_PRODUCT" = "CHANGE_VIEW_PRODUCT",
  "SIDE_MENU_VISIBILITY" = "SIDE_MENU_VISIBILITY",
  "CHANGE_LOGED_USER_ID" = "CHANGE_LOGED_USER_ID",
  "CHANGE_LOGED_USER_DATA" = "CHANGE_LOGED_USER_DATA",
  "RESTART_GLOBAL_STORE" = "RESTART_GLOBAL_STORE",
  "UPDATE_DATABASE_PRODUCTS" = "UPDATE_DATABASE_PRODUCTS",
  "UPDATE_MY_PRODUCTS_SEARCH" = "UPDATE_MY_PRODUCTS_SEARCH"
}

export interface AppState {
  screen: Screens | string
  searchText: string,
  viewProduct: string,
  sideMenu: boolean,
  logedUserData: logedUserDataType,
  databaseProducts: Array<databaseProduct>,
  myProductsSearch: string
}

export interface logedUserDataType {
  name: string | null,
  email: string | null,
  password: string | null,
  cellphone: string | null,
  userID: string | null,
  firebaseID: string | null,
  identificationDocument: string | null,
  uploadedProducts: [] | null
}
