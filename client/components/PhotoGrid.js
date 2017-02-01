import React, { Component } from 'react';
import Photos from './Photos';

class PhotoGrid extends Component {
  render() {
    return(
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photos {...this.props} key={i} i={i} post={post}/> )}
      </div>
    );
  }
}

export default PhotoGrid;