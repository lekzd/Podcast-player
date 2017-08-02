import { Podcast, Author, Series, APIError, PlayingPodcast } from '.';

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
    playingPodcast?: PlayingPodcast;
}