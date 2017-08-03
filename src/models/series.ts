import { Podcast } from '.';

export class Series {
    constructor (
        public id: number,
        public title: string,
        public description: string,
        public created: Date,
        public podcasts: Podcast[] = []
    ) { }
}