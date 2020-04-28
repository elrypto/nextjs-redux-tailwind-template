import { useSelector } from 'react-redux';
import { AppState } from '../../common/Interfaces';

const useReduxState = (expression: string) => useSelector((state: AppState) => state[expression])

export default useReduxState;