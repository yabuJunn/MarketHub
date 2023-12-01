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
          userID: action.payload.userID,
          firebaseID: action.payload.firebaseID,
          identificationDocument: action.payload.identificationDocument,
          uploadedProducts: action.payload.uploadedProducts
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
          userID: null,
          firebaseID: null,
          identificationDocument: null,
          uploadedProducts: null,
        },
        databaseProducts: [],
        myProductsSearch: ""
      };
    case Actions.UPDATE_DATABASE_PRODUCTS:
      return {
        ...currentState,
        databaseProducts: action.payload
      }
    case Actions.UPDATE_MY_PRODUCTS_SEARCH:
      return {
        ...currentState,
        myProductsSearch: action.payload
      }
    default:
      return currentState;
  }
};
