import React from 'react';

const Scroll = (props) => {
    return (<div style={{
            overflow: "scroll",
            height: "80vh",
            border: "2px solid black"
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;