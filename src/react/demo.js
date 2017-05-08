import React from 'react'
import ReactDOM from 'react-dom'

import Icon, {ICONS} from './Icon'


const elements = (
    <div>
        {ICONS.map(name => (<Icon key={`icon-${name}`} name={name}/>))}
    </div>
)

ReactDOM.render(
    elements,
    document.getElementById('root')
);
