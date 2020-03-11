import React from 'react';
import { Skeleton } from '@redhat-cloud-services/frontend-components';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Loader = ({ name, size, FieldProvider, formOptions, ...rest }) => (
    <div>
        <Skeleton size={ size }></Skeleton>
    </div>
);

Loader.propTypes = {
    FieldProvider: PropTypes.any,
    formOptions: PropTypes.any,
    name: PropTypes.string,
    size: PropTypes.string
};

Loader.defaultProps = {
    name: '',
    size: 'md'
};

export default Loader;
