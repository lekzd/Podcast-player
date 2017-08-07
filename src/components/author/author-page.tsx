import * as React from 'react';
import { connect } from 'react-redux';
import { Author, Podcast, State } from '../../models';
import { CURRENT_AUTHOR_LOADED, API_ERROR, PLAY_PODCAST, PODCASTLIST_LOADED } from '../../constants/action-types';
import { authorAPI } from '../../api';
import PodcastComponent from '../podcasts/podcast';

interface Props {
  route: {
    authorId: number;
  };
  author: Author;
  podcasts: Podcast[];
  match: {
    params: {
      id?: string;
    };
  };
  setCurrentAuthor: (currentAuthor: Author) => void;
  updateList: (podcast: Podcast[]) => void;
  playPodcast: (podcast: Podcast) => void;
  onError: (errorMessage: string) => void;
}

const mapStateToProps = (state: State) => ({
  author: state.currentAuthor,
  podcasts: state.podcastList
});

const mapDispatchToProps = (dispatch: Function) => ({
  setCurrentAuthor: (currentAuthor: Author) => dispatch({ type: CURRENT_AUTHOR_LOADED, currentAuthor }),
  updateList: (podcasts: Podcast[]) => dispatch({ type: PODCASTLIST_LOADED }, podcasts),
  playPodcast: (podcast: Podcast) => dispatch({ type: PLAY_PODCAST, podcast }),
  onError: (errorMessage: string) => dispatch({ type: API_ERROR })
});

class AuthorPage extends React.Component<Props, {}> {

  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.playPodcast = this.playPodcast.bind(this);
    this.mapPodcasts = this.mapPodcasts.bind(this);
  }

  async componentDidMount() {
    let author;
    let podcasts;
    let authorId = parseInt(this.props.match.params.id!, 10);
    if (authorId === undefined || isNaN(authorId)) {
      this.props.onError('Unable to load podcasts');
      return;
    }
    try {
      author = await authorAPI.read(authorId);
      podcasts = await authorAPI.readPodcasts(authorId);
      this.props.setCurrentAuthor(author);
      this.props.updateList(podcasts);
    } catch (e) {
      this.props.onError('Unable to load author details');
    }
  }

  playPodcast(podcast: Podcast) {
    this.props.playPodcast(podcast);
  }

  mapPodcasts() {
    return this.props.podcasts.map(podcast =>
      (<PodcastComponent podcast={podcast} onPlay={this.playPodcast} key={podcast.id} />)
    );
  }

  render() {
    if (!this.props.author) {
      return (
        <div>
          Loading
        </div>
      );
    }
    return (
      <div>
        <h2>{this.props.author.name}</h2>
        <p>{this.props.author.description}</p>
        <hr />
        {this.mapPodcasts()}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);