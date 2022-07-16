import React, {Component} from 'react';

class Lifecycle extends Component {
    constructor() {
        super();
        console.log("I am constructor");
    }

    componentDidMount() {
        console.log("I am componentDidMount");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }
    

    render() {
        console.log("Render");
        return (
            <div>
                df
            </div>
        );
    }
}

export default Lifecycle;