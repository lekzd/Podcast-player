import { Action, PlayingPodcast } from '../models';
import { PLAY_PODCAST, RESUME_PODCAST, PAUSE_PODCAST } from '../constants/action-types';

export const playingPodcast = (
        state: PlayingPodcast = {playState: 'PAUSED'},
        action: Action = {type: ''}
    ): PlayingPodcast => {
    switch (action.type) {
        case PLAY_PODCAST:
            return { ...state, podcast: action.podcast, playState: 'PLAYING' };
        case PAUSE_PODCAST:
            return { ...state, playState: 'PAUSED' };
        case RESUME_PODCAST:
            return { ...state, playState: 'PLAYING' };
        default:
            return state;
    }
};