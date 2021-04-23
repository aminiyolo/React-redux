import { createAction, handleActions } from "redux-actions";

// Define action type
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// Create action creator
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// Default value
const initialState = {
  number: 0,
};

// Reducer function
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
