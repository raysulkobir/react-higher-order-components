import React, { Component } from 'react';
import Lifecycle from "../src/component/Lifecycle"
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import ReactHigherOrderComponents from "./component/React Higher Order Components";
import ReactHigherOrderComponentsHover from "./component/React Higher Order Components hover"; // ES6



// import ImageResize from 'quill-image-resize-module-react';

// Quill.register('modules/imageResize', ImageResize);



class SimpleMap extends Component {

   modules = {
    toolbar: [
       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
       [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
       [{ 'header': 1 }, { 'header': 2 }],
       ['blockquote', 'code-block'],
       // custom button values
       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
       [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
       [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
       [{ 'direction': 'rtl' }],                         // text direction

       [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
       [{ 'font': [] }],
       [{ 'align': [] }],
       ['link', 'image', 'video'],
       ['clean']
    ],

  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'align', 'background', 'color', 'size', 'script', 'underline',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
  ]

  handleChange (html) {
     console.log("html", html)
    this.setState({ editorHtml: html });
  }


  render() {
    return (
      <div>
          {/*<Lifecycle/>*/}
          <ReactHigherOrderComponents/>
          {/*<ReactHigherOrderComponentsHover/>*/}
        {/*<ReactQuill Toolbar={Toolbar}  modules={this.modules} formats={this.formats} onChange={this.handleChange}/>*/}




      </div>
    );
  }
}

export default SimpleMap;