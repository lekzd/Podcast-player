import axios from 'axios';
import { Podcast } from '../models';
import { PODCAST_ENDPOINT } from '../constants/endpoints';
import { fromJson, toQueryString } from '../factories';

interface ListParams {
    [key: string]: string|number|boolean;
}

class PodcastAPI {

    public async getList(params?: ListParams): Promise<Podcast[]> {
        return axios.get(PODCAST_ENDPOINT + toQueryString(params))
            .then(response => fromJson.podcastList(response.data));
    }

}

export const podcastAPI = new PodcastAPI();