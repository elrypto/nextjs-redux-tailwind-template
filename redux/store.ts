import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState, ActionType, Action } from '../common/Interfaces';


export const DEFAULT_LOADING_STATES = {
  error: null,
  loading: false,
  loaded: false,
}


/*
  inital state, as defined in AppState interface
*/
const initialState: AppState = {
  loadingState: DEFAULT_LOADING_STATES,
};


const reducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
        ...state,
        loadingState: { ...DEFAULT_LOADING_STATES, loading: true }
      }
    case ActionType.SET_LOADED:
      return {
        ...state,
        loadingState: { ...DEFAULT_LOADING_STATES, loaded: true }
      }
    case ActionType.SET_ERROR:
      return {
        ...state,
        loadingState: { ...DEFAULT_LOADING_STATES, error: action.payload }
      }
    default:
      if (!ActionType.INIT)
        console.warn('reached store.reducer default case (likely actiontype.[]',
          'not defined:', action);
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware())
)

