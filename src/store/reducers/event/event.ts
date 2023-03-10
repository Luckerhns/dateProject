import { EventState, EventAction, EventActionsEnum } from "./types";

const initialState: EventState = {
  events: [],
  guests: [],
};

export const EventReducer = (
  state = initialState,
  action: EventAction
): EventState => {
  switch (action.type) {
    case EventActionsEnum.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EventActionsEnum.SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
