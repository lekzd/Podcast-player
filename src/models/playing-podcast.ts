import { Podcast } from '.';

export interface PlayingPodcast {
    podcast?: Podcast;
    playState: 'PLAYING'|'PAUSED'|'STOPPED';
}
