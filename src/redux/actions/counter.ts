import * as Bluebird from "bluebird";
import { INCREMENT, TOGGLELOADING } from "../constants";
import { PayloadAction, ThunkAction, VoidAction } from "./interfaces";

export interface IncrementAction extends PayloadAction<number> {
  type: typeof INCREMENT;
}

export interface LoadingAction extends VoidAction {
  type: typeof TOGGLELOADING;
}

export type CounterAction = IncrementAction | LoadingAction;

export const actionCreators = {
  delayIncrement(amount: number = 1): ThunkAction<Bluebird<void>> {
    return dispatch => {
      dispatch(actionCreators.toggleLoading())
      return Bluebird.delay(1000).then(() => {
        dispatch(actionCreators.increment(amount));
        dispatch(actionCreators.toggleLoading())
      }).catch(()=>{
        dispatch(actionCreators.toggleLoading())
      });
    };
  },
  toggleLoading(): LoadingAction {
    return { type: TOGGLELOADING };
  },
  increment(amount: number = 1): IncrementAction {
    return { payload: amount, type: INCREMENT };
  }
};
