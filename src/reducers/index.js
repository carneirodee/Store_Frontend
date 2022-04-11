
import { combineReducers } from 'redux';
import { getInfo } from './info.reducer';
import { getEpisodes} from './episodes.reducer';

const reducers = combineReducers({
	getInfo,
	getEpisodes,
})

export default reducers;