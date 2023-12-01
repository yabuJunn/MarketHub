import { databaseProduct } from "../types/databaseProductsType";
import { Action, Actions, AppState, logedUserDataType } from "../types/store";

export const changeScreen = (payload: string): Action => ({
  type: Actions.CHANGE_SCREEN,
  payload,
});

export const changeSeaarchText = (payload: string): Action => ({
  type: Actions.CHANGE_SEARCH_TEXT,
  payload,
});

export const changeViewProduct = (payload: string): Action => ({
  type: Actions.CHANGE_VIEW_PRODUCT,
  payload,
});

export const sideMenuVisibility = (payload: Boolean): Action => ({
  type: Actions.SIDE_MENU_VISIBILITY,
  payload,
});

export const changeLogedUserData = (payload: logedUserDataType | any): Action => ({
  type: Actions.CHANGE_LOGED_USER_DATA,
  payload,
});

export const restarTGlobalStore = (): Action => ({
  type: Actions.RESTART_GLOBAL_STORE,
  payload: ""
});

export const updateDatabaseProducts = (payload: Array<databaseProduct>): Action => ({
  type: Actions.UPDATE_DATABASE_PRODUCTS,
  payload: payload
});

export const updateMyProductsSearch = (payload: String): Action => ({
  type: Actions.UPDATE_MY_PRODUCTS_SEARCH,
  payload: payload
});