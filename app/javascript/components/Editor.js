import React from 'react';
import axios from 'axios';
import Header from './Header';
import SparkList from './SparkList';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sparks: null,
        };
    }

    componentDidMount() {
        axios
            .get('/api/sparks.json')
            .then(response => this.setState({ sparks: response.data }))
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { sparks } = this.state;
        if (sparks === null) return null;

        return (
            <div>
                <Header />
                <SparkList sparks={sparks} />
            </div>
        );
    }
}

export default Editor;