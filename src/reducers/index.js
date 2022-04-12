
import { combineReducers } from 'redux';
import {infoReducer} from './info.reducer';
import {episodesReducer} from './episodes.reducer';

export default combineReducers({
	infoReducer,
	episodesReducer,
  });
  