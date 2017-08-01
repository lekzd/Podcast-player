import * as React from 'react';
import { connect } from 'react-redux';
import { Podcast, State } from '../../models';
import { PODCASTLIST_LOADED, API_ERROR } from '../../constants/action-types';
import { podcastAPI } from '../../api';
import PodcastComponent from './podcast';
import PodcastSearch from './podcast-search';

interface Props {
  updateList: (podcastList: Podcast[]) => void;
  onError: (errorMessage: String) => void;
  buttonClick: () => void;
  podcastList: Podcast[];
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateList: (podcastList: Podcast[]) => dispatch({ type: PODCASTLIST_LOADED, podcastList }),
    onError: (errorMessage: String) => dispatch({ type: API_ERROR, errorMessage })
  };
};

const mapStateToProps = (state: State) => {
  return {
    podcastList: state.podcastList || []
  };
};

class PodcastContainer extends React.Component<Props, {}> {

  private amountPerPage: number = 10;

  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.searchForPodcasts = this.searchForPodcasts.bind(this);
  }

  async componentDidMount() {
    let list;
    try {
      list = await podcastAPI.getList({ _start: 0, _end: this.amountPerPage });
      this.props.updateList(list);
    } catch (e) {
      this.props.onError('Unable to load podcasts');
    }
  }

  async searchForPodcasts(searchTerm: string) {
    let list;
    try {
      list = await podcastAPI.getList({ _start: 0, _end: this.amountPerPage, q: searchTerm });
      this.props.updateList(list);
    } catch (e) {
      this.props.onError('Unable to load podcasts');
    }
  }

  render() {
    if (!this.props.podcastList) {
      return (
        <div>
          Loading
        </div>
      );
    }
    return (
      <div>
        <PodcastSearch onSearch={this.searchForPodcasts} />
        {this.props.podcastList.map(podcast => PodcastComponent(podcast))}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastContainer);