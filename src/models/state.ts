import { Podcast, Author, Series } from '.';

export class State {
    constructor (
        public readonly podcastList: Podcast[] = [],
        public readonly seriesList: Series[] = [],
        public readonly authorList: Author[] = [],
        public readonly currentPodcast?: Podcast,
        public readonly currentAuthor?: Author,
        public readonly currentSeries?: Series,
        public readonly seachTerm: String = '',
        public readonly page: Number = 0,
    ) {

    }
}