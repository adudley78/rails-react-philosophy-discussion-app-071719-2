import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PropsRoute from './PropsRoute';
import Spark from './Spark';
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

        const { match } = this.props;
        const sparkId = match.params.id;
        const spark = sparks.find(e => e.id === Number(sparkId));

        return (
            <div>
                <Header />
                <SparkList sparks={sparks} />
                <PropsRoute path="/sparks/:id" component={Spark} spark={spark} />
            </div>
        );
    }
}

Spark.propTypes = {
    match: PropTypes.shape(),
};

Spark.defaultProps = {
    match: undefined,
};

export default Editor;