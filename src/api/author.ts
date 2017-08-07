import axios from 'axios';
import { Author, Podcast } from '../models';
import { AUTHOR_ENDPOINT } from '../constants/endpoints';
import { fromJson } from '../factories';

class AuthorAPI {

    public async read(id: Number): Promise<Author> {
        return axios.get(AUTHOR_ENDPOINT + '/' + id.toString())
            .then(response => fromJson.author(response.data));
    }

    public async readPodcasts(id: Number): Promise<Podcast[]> {
        return axios.get(AUTHOR_ENDPOINT + '/' + id.toString() + '/podcasts')
            .then(response => fromJson.podcastList(response.data));
    }

}

export const authorAPI = new AuthorAPI();