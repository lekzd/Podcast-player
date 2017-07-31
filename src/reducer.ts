import { combineReducers } from 'redux';
import { State } from './models';
import { podcastList, error } from './reducers';

export default combineReducers<State>({
    podcastList,
    error
});