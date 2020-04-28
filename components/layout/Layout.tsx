import React from 'react'
import { useDispatch } from 'react-redux';
import Header from './Header'
import { Footer } from './Footer';
import useReduxState from '../hooks/useReduxState';
import { LoadingStates, ActionType } from '../../common/Interfaces';
import { dp } from '../../common/Actions';

export const Layout = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <>
    <Header />
    <ErrorDisplay />
    <div className="max-w-screen-xl min-h-full m-auto">
      {children}
    </div>
    <Footer />
  </>
)



const ErrorDisplay = () => {
  const loadingState: LoadingStates = useReduxState('loadingState');
  const dispatch = useDispatch();
  console.log('loadingState:', loadingState);
  const { error } = loadingState;

  if (error)
    return (
      <div className="relative px-4 py-3 m-4 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block ml-2 sm:inline">{error.message}</span>
        <a
          href='/'
          onClick={(evt) => {
            evt.preventDefault();
            dp(dispatch, ActionType.SET_ERROR, null);
          }}
        >
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="w-6 h-6 text-red-500 fill-current" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </a>
      </div>
    )

  return null;
}

