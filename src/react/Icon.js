import PropTypes from 'prop-types'
import React from 'react'

const req = require.context('../vectors');
req.keys().map(req);
export const ICONS = req.keys().map(name => /\.\/(.*)\.svg/.exec(name)[1])

class Icon extends React.Component {
    propTypes: {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <svg>
                <use xlinkHref={`#${this.props.name}`}/>
            </svg>
        )
    }
}

export default Icon
