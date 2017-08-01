import { Podcast, Series, Author } from '../models';

/* tslint:disable:no-any */
class FromJson {

    public podcast(data: any): Podcast {
        return new Podcast(
            data.id,
            data.url,
            data.title,
            data.description,
            data.plays,
            this.series(data.series),
            this.author(data.author),
            new Date(data.date)
        );
    }

    public podcastList(data: any[]): Podcast[] {
        return data.map(item => this.podcast(item));
    }

    public series(data: any): Series {
        return new Series(data.id, data.title, data.description, new Date(data.date));
    }

    public seriesList(data: any[]): Series[] {
        return data.map(item => this.series(item));
    }

    public author(data: any): Author {
        return new Author(data.id, data.name, data.description, new Date(data.date));
    }

    public authorList(data: any[]): Author[] {
        return data.map(item => this.author(item));
    }

}

export const fromJson = new FromJson();