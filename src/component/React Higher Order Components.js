import withCounter from "./HOC/withCounter"
import React from "react";

const ReactHigherOrderComponents = (props) => {
    const {count, incrementCount} = props;
    console.log("props", props)
    return (
        <div>
            <button onMouseOver={incrementCount} type="button">this is hover counter ({ count })</button>
        </div>
    );
};

export default withCounter(ReactHigherOrderComponents);