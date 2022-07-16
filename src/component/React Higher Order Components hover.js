import React, {Component} from 'react';

class ReactHigherOrderComponentsHover extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    incrementHoverCount = () =>{
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onMouseOver={this.incrementHoverCount} type="button">this is hover counter ({ count })</button>
            </div>
        );
    }
}

export default ReactHigherOrderComponentsHover;