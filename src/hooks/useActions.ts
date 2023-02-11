import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/mainCreator";
import { AppDispatch } from "../store/store";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, dispatch);
};
