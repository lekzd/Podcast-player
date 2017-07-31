import * as React from 'react';
import { connect } from 'react-redux';
import { Podcast, State } from '../../models';
import { PODCASTLIST_LOADED, API_ERROR } from '../../constants/action-types';
import { podcastAPI } from '../../api';
import podcastComponent from './podcast';

interface Props {
  onLoad: (podcastList: Podcast[]) => void;
  onError: (errorMessage: String) => void;
  buttonClick: () => void;
  podcastList: Podcast[];
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onLoad: (podcastList: Podcast[]) => dispatch({ type: PODCASTLIST_LOADED, podcastList }),
    onError: (errorMessage: String) => dispatch({ type: API_ERROR, errorMessage })
  };
};

const mapStateToProps = (state: State) => {
  return {
    podcastList: state.podcastList || []
  };
};

class PodcastList extends React.Component<Props, {}> {

  async componentDidMount() {
    let list;
    try {
      list = await podcastAPI.getList();
      this.props.onLoad(list);
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
        {this.props.podcastList.map(podcast => podcastComponent(podcast))}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastList);