import * as React from 'react';
import { Podcast } from '../../models';

interface Props {
    podcast: Podcast;
    onPlay: (podcast: Podcast) => void;
}
export default class PodcastComponent extends React.Component<Props, {}> {

    constructor() {
        super();
        this.onPlay = this.onPlay.bind(this);
    }

    onPlay(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        this.props.onPlay(this.props.podcast);
    }

    render() {
        return(
            <div className="podcast-item">
                <strong>{this.props.podcast.title}</strong>
                <p>
                    {this.props.podcast.description}
                    <i>{this.props.podcast.plays}</i>
                    <a href="#" title="Play" onClick={this.onPlay}>Play</a>
                </p>
            </div>
        );
    }

}