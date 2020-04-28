import {
  Dispatch,
  ActionType
} from './Interfaces';



/* 
  redux dispatch shortcut
*/
export const dp = (dispatch: Dispatch, type: ActionType, payload: any) => dispatch({ type, payload });


/* states for UI - loading, error or fully loaded */
export const loading = (val: boolean, dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_LOADING,
    payload: val,
  });
};

export const error = (err: Error, dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_ERROR,
    payload: err,
  });
};

export const loaded = (val: boolean, dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SET_LOADED,
    payload: val,
  });
};

/*
React-toastify is broken in nextjs (currently)


export const notify = (msg: string, success?: boolean) => {
  if (!success) {
    toast(msg, { className: 'notify' });
  } else {
    toast.success(msg, { autoClose: false, className: 'notify' });
  }
};


export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false, className: 'notify' });
};


export const notifyWarn = (msg: string) => {
  if (!toast.isActive('nfId')) {
    toast.warn(msg, { toastId: 'nfId', className: 'notify' });
  }
};
*/

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

