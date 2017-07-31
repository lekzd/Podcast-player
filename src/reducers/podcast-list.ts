import { Action, Podcast } from '../models';
import { PODCASTLIST_LOADED } from '../constants/action-types';

const podcastListReducer = (state: Podcast[] = [], action: Action = { type: '' }): Podcast[] => {
    switch (action.type) {
        case PODCASTLIST_LOADED:
            return (action.podcastList || []).slice(0);
        default:
            return state;
    }
};

export default podcastListReducer;