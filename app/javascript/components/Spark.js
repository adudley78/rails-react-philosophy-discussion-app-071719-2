import React from 'react';
import PropTypes from 'prop-types';

const Spark = ({ spark }) => (
    <div>
        <h2>
            {spark.spark_date}
            {' - '}
            {spark.spark_type}
        </h2>
        <ul>
            <li>
                <strong>Type:</strong>
                {' '}
                {spark.spark_type}
            </li>
            <li>
                <strong>Date:</strong>
                {' '}
                {spark.spark_date}
            </li>
            <li>
                <strong>Title:</strong>
                {' '}
                {spark.title}
            </li>
            <li>
                <strong>URL:</strong>
                {' '}
                {event.url}
            </li>
            <li>
                <strong>Member:</strong>
                {' '}
                {event.memember_name}
            </li>
        </ul>
    </div>
);

Spark.propTypes = {
    spark: PropTypes.shape(),
};

Spark.defaultProps = {
    spark: undefined,
};

export default Spark;