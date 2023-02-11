import { AppDispatch } from "./../../store";
import { IUser } from "./../../../models/IUser";
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),

  setAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: isAuth,
  }),

  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: isLoading,
  }),

  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          // const response = await axios.get<IUser[]>("./users.json");
          const response = await UserService.getUsers();
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreators.setUser(mockUser));
            dispatch(AuthActionCreators.setAuth(true));
          } else {
            dispatch(
              AuthActionCreators.setError("Incorrect login or password")
            );
            dispatch(AuthActionCreators.setIsLoading(false));
          }
        }, 1000);
      } catch (error) {
        dispatch(AuthActionCreators.setError("Error on login"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setAuth(false));
  },
};
