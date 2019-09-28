import React from 'react';

const Action = (props) => (
    <div>
        <button
            onClick={props.handleDecision}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

export default Action;