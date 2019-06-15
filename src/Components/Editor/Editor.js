import React from 'react';

class Editor extends React.Component {

    render() {
        return (
            <div className="editor">
              <div className="title">{this.props.title}</div>
              <textarea onChange={(e) => {this.props.setText(e, this.props.type)}}></textarea>
            </div>
          );
    }
}

export default Editor;
