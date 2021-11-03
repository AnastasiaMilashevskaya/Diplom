import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IShopState, shopReducer } from "./reducers/shop";
export interface IState {
    shop: any;
    posts: IShopState;
  }
export const store = createStore(combineReducers({shops:shopReducer}), composeWithDevTools());
