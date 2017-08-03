import * as React from 'react';
import * as plyr from 'plyr';
import { connect } from 'react-redux';
import { State, PlayingPodcast } from '../../models';
import { RESUME_PODCAST, PAUSE_PODCAST } from '../../constants/action-types';

interface Props {
  onPause: () => void;
  onResume: () => void;
  playingPodcast: PlayingPodcast;
}

const mapStateToProps = (state: State) => {
  return {
  playingPodcast: state.playingPodcast
}
};

const mapDispatchToProps = (dispatch: Function) => ({
  onPause: () => dispatch({ type: PAUSE_PODCAST }),
  onResume: () => dispatch({ type: RESUME_PODCAST })
});

class Player extends React.Component<Props, {}> {

  private audioElement: HTMLAudioElement;
  private plyrInstance: plyr.Plyr;

  componentDidMount() {
    this.plyrInstance = plyr.setup(this.audioElement, {})[0];
    this.plyrInstance.on('pause', this.props.onPause.bind(this));
    this.plyrInstance.on('play', () => {
      if (this.props.playingPodcast.playState !== 'PLAYING') {
        this.props.onResume();
      }
    });
  }

  shouldComponentUpdate(newProps: Props) {
    let state = newProps.playingPodcast;
    if (state.podcast && this.plyrInstance.source().indexOf(state.podcast.url) === -1) {
      this.plyrInstance.source({
        type: 'audio',
        title: state.podcast.title,
        sources: [{
          src: state.podcast.url,
          type: 'audio/mp3'
        }]
      });
    }
    if (state.playState === 'PLAYING') {
      this.plyrInstance.play();
    } else {
      this.plyrInstance.pause();
    }
    return false; // never rerender
  }

  render() {
    return (
      <div>
        <audio ref={audioEl => this.audioElement = audioEl!} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
