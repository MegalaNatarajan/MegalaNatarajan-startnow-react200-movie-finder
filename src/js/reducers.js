import { combineReducers } from 'redux';
//import ContainerReducer from '../containers/MovieDetailContainer/containerReducer';
import SearchReducer from '../containers/MovieSearchContainer/searchReducer';

const reducers = combineReducers({
  search: SearchReducer,
 // container: ContainerReducer
});

export default reducers;
