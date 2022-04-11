import { createStore } from 'redux';
import reducers from  '../reducers'

function store() {
	return createStore(reducers)
}

export default store