import axios from 'axios';
import { Author } from '../models';
import { AUTHOR_ENDPOINT } from '../constants/endpoints';
import { fromJson } from '../factories';

class AuthorAPI {

    public async read(id: Number): Promise<Author> {
        return axios.get(AUTHOR_ENDPOINT + '/' + id.toString() + '_embed=podcasts')
            .then(response => fromJson.author(response.data));
    }

}

export const authorAPI = new AuthorAPI();