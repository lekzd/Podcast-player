import { Series, Author } from './';

export class Podcast {
    constructor(
        public id: number,
        public url: string,
        public title: string,
        public description: string,
        public plays: number,
        public series: Series,
        public author: Author,
        public created: Date
    ) { }
}