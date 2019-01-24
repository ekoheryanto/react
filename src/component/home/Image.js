import React, {Component} from 'react';

class Image extends Component {
  render() {
    return(
      <img
      src={this.props.gambarnya}
      alt ="gambar-makanan"
      width = {this.props.lebar}
      />
    );
  }
}

export default Image;
