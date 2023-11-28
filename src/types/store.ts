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
  "SIDE_MENU_VISIBILITY" = "SIDE_MENU_VISIBILITY"
}

export interface AppState {
  screen: Screens | string
  searchText: string,
  viewProduct: string,
  sideMenu: boolean
}
