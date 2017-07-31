import * as React from 'react';
import { Podcast } from '../../models';

export default (podcast: Podcast) => (
    <div key={podcast.id} className="podcast-item">
        <strong>{podcast.title}</strong>
        <p>
            {podcast.description}
            <i>{podcast.plays}</i>
        </p>
    </div>
);