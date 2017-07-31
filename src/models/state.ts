import { Podcast, Author, Series } from '.';

export interface State {
    podcastList?: Podcast[];
    seriesList?: Series[];
    authorList?: Author[];
    currentPodcast?: Podcast;
    currentAuthor?: Author;
    currentSeries?: Series;
    seachTerm?: String;
    page?: Number;
}