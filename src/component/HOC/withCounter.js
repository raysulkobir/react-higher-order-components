import React, {Component} from 'react';

const withCounter = (OriginalCounter) => {
    class NewComponent extends Component{
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
                 <OriginalCounter count={count} incrementCount={this.incrementHoverCount}/>
            );
        }
    }
    return NewComponent;
}

export default withCounter;