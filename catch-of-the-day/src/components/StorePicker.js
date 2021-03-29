import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {
    render() {
        return (
            <form action="" className="store-picker">
                <h2>Enter a Store Name</h2>
                <input type="text" required placeholder="Enter Store Name"/>
                <button type="submit">Enter</button>
            </form>
        )
    }
}

export default StorePicker;