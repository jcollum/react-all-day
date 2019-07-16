import { CounterAction } from "../actions/counter";
import { INCREMENT, TOGGLELOADING } from "../constants";

export type State = Readonly<{
  value: number,
  loading: boolean
}>;

export const initialState: State = {
  value: 1,
  loading: false
};

export const reducer = (state = initialState, action: CounterAction): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + state.value };
    case TOGGLELOADING: 
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
