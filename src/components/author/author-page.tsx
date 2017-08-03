import * as React from 'react';
import { connect } from 'react-redux';
import { Author, Podcast, State } from '../../models';
import { CURRENT_AUTHOR_LOADED, API_ERROR, PLAY_PODCAST } from '../../constants/action-types';
import { authorAPI } from '../../api';
import PodcastComponent from '../podcasts/podcast';

interface Props {
    authorId: number;
    author: Author;
    setCurrentAuthor: (author: Author) => void;
    playPodcast: (podcast: Podcast) => void;
    onError: (errorMessage: String) => void;
}

const mapStateToProps = (state: State) => ({
  author: state.currentAuthor
});

const mapDispatchToProps = (dispatch: Function) => ({
    setCurrentAuthor: (author: Author) => dispatch({type: CURRENT_AUTHOR_LOADED, author }),
    playPodcast: (podcast: Podcast) => dispatch({type: PLAY_PODCAST, podcast}),
    onError: (errorMessage: String) => dispatch({type: API_ERROR})
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
    try {
      author = await authorAPI.read(this.props.authorId);
      this.props.setCurrentAuthor(author);
    } catch (e) {
      this.props.onError('Unable to load podcasts');
    }
  }

  playPodcast(podcast: Podcast) {
    this.props.playPodcast(podcast);
  }

  mapPodcasts() {
    return this.props.author.podcasts.map(podcast =>
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