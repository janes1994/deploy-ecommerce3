import React from 'react';
import withSecretToLife from '../HOC/withSecretToLife'

const DisplayTheSecret = props => (
    <div>
        The secret to life is {props.secretToLife}
    </div>
)

const WrappedComponent = withSecretToLife(DisplayTheSecret)

export default WrappedComponent;