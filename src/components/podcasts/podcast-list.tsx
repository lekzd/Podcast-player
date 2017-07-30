import * as React from 'react';
import { connect } from 'react-redux';
import { Podcast, State } from '../../models';
import { PODCASTLIST_LOADED } from '../../constants/action-types';
import podcastAPI from './podcast-api';

interface Props {
  onLoad: (podcastList: Podcast[]) => void;
  podcastList: Podcast[];
}

const mapDispatchToProps = (dispatch: Function) => ({
  onLoad: (podcastList: Podcast[]) => {
    dispatch({ type: PODCASTLIST_LOADED, podcastList });
  }
});

const mapStateToProps = (state: State) => ({
    podcastList: state.podcastList
});

class PodcastList extends React.Component<Props, {}> {

  async componentDidMount() {
    let podcastList = [];
    try {
      podcastList = await podcastAPI.getList();
      this.props.onLoad(podcastList);
    } catch (e) { /* todo */ }
  }

  getTitles() {
    return this.props.podcastList.map(item => <div>item.title</div>);
  }

  render() {
    console.log('render');
    if (!this.props.podcastList) {
      return <div>Loading</div>;
    }
    return (

      <div>
        {this.getTitles()}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastList);