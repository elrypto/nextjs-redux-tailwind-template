/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/

import { Dispatch as ReduxDispatch } from 'redux';


/* Application State for Store (reducer) */
export interface AppState {
  loadingState: LoadingStates;
}


export interface LoadingStates {
  error: Error | null;
  loading: boolean;
  loaded: boolean;
}


/* App Infastructure */

export type Dispatch = ReduxDispatch<Action>;

export interface Action {
  type: ActionType;
  payload: any;
}



export enum ActionType {
  /* SET_FIELD = 'bx/SET_FIELD', */
  INIT = '@@INIT',
  SET_LOADING = 'bg/SET_LOADING',
  SET_ERROR = 'bg/SET_ERROR',
  SET_LOADED = 'bg/SET_LOADED'
}


