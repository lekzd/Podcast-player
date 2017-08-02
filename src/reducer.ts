import { combineReducers } from 'redux';
import { State } from './models';
import { playingPodcast, podcastList, error } from './reducers';

export default combineReducers<State>({
    playingPodcast,
    podcastList,
    error
});