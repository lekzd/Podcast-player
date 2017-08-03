import { combineReducers } from 'redux';
import { State } from './models';
import { playingPodcast, podcastList, currentAuthor, error } from './reducers';

export default combineReducers<State>({
    playingPodcast,
    podcastList,
    currentAuthor,
    error
});