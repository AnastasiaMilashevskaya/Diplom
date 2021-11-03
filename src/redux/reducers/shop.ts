import { AnyAction } from "redux";

import { IShop } from "../types";
import { ACTIONS } from "../constants";

export interface IShopState {
  shops: IShop[];
  shop: IShop | null;
}

const defaultState: IShopState = {
    shops: [],
    shop: null,
};

export const shopReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.GET_SHOPS_SUCCESS: {
      return { ...state, shops: action.shops };
    }
    case ACTIONS.GET_SHOP_SUCCESS: {
      return { ...state, shop: action.shop };
    }
    default:
      return state;
  }
};