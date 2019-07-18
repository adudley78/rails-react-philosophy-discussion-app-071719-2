import React from 'react';
import PropTypes from 'prop-types';

class SparkList extends React.Component {
    renderSparks() {
        const { sparks } = this.props;
        sparks.sort(
            (a, b) => new Date(b.spark_date) - new Date(a.spark_date),
        );

        return sparks.map(spark => (
            <li key={spark.id}>
                {spark.spark_date}
                {' - '}
                {spark.spark_type}
            </li>
        ));
    }

    render() {
        return (
            <section>
                <h2>Sparks</h2>
                <ul>{this.renderSparks()}</ul>
            </section>
        );
    }
}

SparkList.propTypes = {
    sparks: PropTypes.arrayOf(PropTypes.object),
};

SparkList.defaultProps = {
    sparks: [],
};

export default SparkList;