import { APIError, Action } from '../models';
import { API_ERROR } from '../constants/action-types';

export const error = (state: APIError, action: Action = { type: '' }): APIError|null => {
    switch (action.type) {
        case API_ERROR:
            return new APIError(action.error || 'An error has occurred');
        default:
            return null;
    }
};