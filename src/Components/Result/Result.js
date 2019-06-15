import React from 'react';
import Editor from '../Editor/Editor'

class Result extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            html: "",
            css: "",
            js: ""
        }
    }

    
    getSrc = (html, css, js) => {
        let style = "<style>" + css + "</style>";
        let div = "<div>" + html + "</div>";
        let script = "<script>" + js + "</script>";

        return style + div + script;
    }

    setText = (e, srcType)=> {
        e.preventDefault();
        this.setState({[srcType]: e.target.value});
    }

    render() {
        let iframeSrc = this.getSrc(this.state.html, this.state.css, this.state.js);
        return (
            <div className="result">
                <div className="container editor-container">
                    <Editor type="html" title="HTML" setText={this.setText}></Editor>
                    <Editor type="css" title="CSS" setText={this.setText}></Editor>
                    <Editor type="js" title="JS" setText={this.setText}></Editor>
                </div>
                <div className="conatiner iframe-container">
                    <iframe title="result" srcDoc={iframeSrc}></iframe>
                </div>
            </div>
          );
    }
}

export default Result;
