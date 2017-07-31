import { Podcast, Author, Series, APIError } from '.';

export interface State {
    podcastList?: Podcast[];
    seriesList?: Series[];
    authorList?: Author[];
    currentPodcast?: Podcast;
    currentAuthor?: Author;
    currentSeries?: Series;
    seachTerm?: String;
    page?: Number;
    error?: APIError;
}