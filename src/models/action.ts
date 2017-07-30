import { Podcast, Author, Series } from '.';

export class Action {
    constructor(
        public readonly type: string = '',
        public readonly data: {
            podcastList?: Podcast[],
            seriesList?: Series[],
            authorList?: Author[]
            currentPodcast?: Podcast,
            currentAuthor?: Author,
            currentSeries?: Series,
            seachTerm?: String,
            page?: number,
        } = {}
    ) { }
}