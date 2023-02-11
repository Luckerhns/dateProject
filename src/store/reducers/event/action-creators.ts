import { IEvent } from "./../../../models/IEvent";
import axios from "axios";
import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../store";
import { EventActionsEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
  setGuests: (users: IUser[]): SetGuestsAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload: users,
  }),
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionsEnum.SET_EVENTS,
    payload: events,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      // const response = await axios.get("./users.json");
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(
        (ev) => ev.author === username || ev.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (error) {
      console.log(error);
    }
  },
};
