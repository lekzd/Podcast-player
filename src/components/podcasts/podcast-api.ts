import axios from 'axios';
import { Podcast } from '../../models';
import { PODCAST_ENDPOINT } from '../../constants/endpoints';
import fromJson from '../../factories/from-json';

class PodcastAPI {

    public async getList(): Promise<Podcast[]> {
        return axios.get(PODCAST_ENDPOINT)
            .then(response => fromJson.podcastList(response.data));
    }

}

export default new PodcastAPI();