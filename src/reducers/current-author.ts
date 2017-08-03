import { Action, Author } from '../models';
import { CURRENT_AUTHOR_LOADED } from '../constants/action-types';

export const currentAuthor = (state: Author, action: Action = { type: '' }): Author|null => {
    switch (action.type) {
        case CURRENT_AUTHOR_LOADED:
            return action.currentAuthor || null;
        default:
            return null;
    }
};