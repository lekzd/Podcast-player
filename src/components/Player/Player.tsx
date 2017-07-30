import * as React from 'react';
import * as plyr from 'plyr';

class Player extends React.Component<{}, {}> {

  private audioElement: HTMLAudioElement;

  componentDidMount() {
    plyr.setup(this.audioElement, {});
  }

  render() {
    return (
      <div>
        <audio ref={audioEl => this.audioElement = audioEl!} />
      </div>
    );
  }
}

export default Player;
