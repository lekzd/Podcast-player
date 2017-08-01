import * as React from 'react';

interface Props {
    onSearch: (searchTerm: string) => void;
}

class PodcastSearch extends React.Component<Props, {}> {

    private input: HTMLInputElement;

    constructor() {
        super();
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.search = this.search.bind(this);
        this.clear = this.clear.bind(this);
    }

    search() {
        this.props.onSearch(this.input.value);
    }

    clear() {
        this.input.value = '';
        this.props.onSearch('');
    }

    handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key.toLowerCase() === 'enter') {
            this.search();
        }
    }

    render() {
        return (
            <div>
                <input placeholder="Search" onKeyPress={this.handleKeyPress} ref={(input) => this.input = input!} />
                <button onClick={this.search}>Search</button>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }

}

export default PodcastSearch;