const req = require.context('../vectors');
req.keys().map(req);

import PropTypes from 'prop-types'
import React from 'react'


class Icon extends React.Component {
    propTypes: {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <svg>
                <use
                    xlinkHref={`#${this.props.name}`}
                />
            </svg>
        )
    }
}

export default Icon
