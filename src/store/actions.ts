import { Action, Actions } from "../types/store";

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

export const changeLogedUser = (payload: string): Action => ({
  type: Actions.CHANGE_LOGED_USER,
  payload,
});