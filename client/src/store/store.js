import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
//! 만약에 특정 액션이 몇초뒤에 실행되게 하거나, 현재 상태에 따라 아예 액션이 무시되게 하려면, 일반 액션 생성자로는 할 수가 없습니다.
//! 하지만, redux-thunk 는 이를 가능케합니다
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
