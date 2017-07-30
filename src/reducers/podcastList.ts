import { Action, State } from '../models';
import { PODCASTLIST_LOADED } from '../constants/actionTypes';

export default (state: State = new State(), action: Action = new Action()) => {
    switch (action.type) {
        case PODCASTLIST_LOADED:
            return {
                ...state,
                podcastList: action.data.podcastList
            };
        default:
            return state;
    }
};