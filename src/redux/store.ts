import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IShopState, shopReducer } from "./reducers/shop";
export interface IState {

    shops: IShopState;
  }
export const store = createStore(combineReducers({shops:shopReducer}), composeWithDevTools());
