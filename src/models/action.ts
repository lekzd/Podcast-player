import { Podcast, Author, Series } from '.';

export interface Action {
    type: String;
    podcastList?: Podcast[];
    seriesList?: Series[];
    authorList?: Author[];
    currentPodcast?: Podcast;
    currentSeries?: Series;
    currentAuthor?: Author;
    page?: number;
    searchTerm?: String;
}