import { Action, State } from '../models';
// import { PODCASTLIST_LOADED } from '../constants/action-types';

export default (state: State = new State(), action: Action = {type: ''}): State => {
    switch (action.type) {
        // case PODCASTLIST_LOADED:
        //     return {
        //         ...state,
        //         podcastList: action.podcastList || []
        //     };
        default:
            return state;
    }
};