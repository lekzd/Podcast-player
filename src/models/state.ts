import { Podcast, Author, Series } from '.';

export class State {
    constructor (
        public podcastList: Podcast[] = [],
        public seriesList: Series[] = [],
        public authorList: Author[] = [],
        public currentPodcast?: Podcast,
        public currentAuthor?: Author,
        public currentSeries?: Series,
        public seachTerm: String = '',
        public page: Number = 1,
    ) { }
}