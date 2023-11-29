import { Screens } from "../types/screens";
import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.CHANGE_SCREEN:
      return {
        ...currentState,
        screen: action.payload
      };
    case Actions.CHANGE_SEARCH_TEXT:
      return {
        ...currentState,
        searchText: action.payload
      };
    case Actions.CHANGE_VIEW_PRODUCT:
      return {
        ...currentState,
        viewProduct: action.payload
      };
    case Actions.SIDE_MENU_VISIBILITY:
      return {
        ...currentState,
        sideMenu: action.payload
      };
    case Actions.CHANGE_LOGED_USER_DATA:
      return {
        ...currentState,
        logedUserData: {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          cellphone: action.payload.cellphone,
          id: action.payload.id
        }
      };
    case Actions.RESTART_GLOBAL_STORE:
      return {
        screen: Screens.landingPage,
        searchText: "",
        viewProduct: "",
        sideMenu: false,
        logedUserData: {
          name: null,
          email: null,
          password: null,
          cellphone: null,
          id: null
        }
      };
    default:
      return currentState;
  }
};
