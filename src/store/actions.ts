import { Action, Actions, logedUserDataType } from "../types/store";

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

export const changeLogedUserID = (payload: string): Action => ({
  type: Actions.CHANGE_LOGED_USER_ID,
  payload,
});

export const changeLogedUserData = (payload: logedUserDataType | any): Action => ({
  type: Actions.CHANGE_LOGED_USER_DATA,
  payload,
});