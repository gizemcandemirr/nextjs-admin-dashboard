import ThemeReducer from "./ThemeReducer";
import LanguageReducer from "./LanguageReducer";
import { combineReducers } from "redux";

const rootReducer= combineReducers({ThemeReducer, LanguageReducer})

export default rootReducer