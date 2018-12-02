import React, {Component} from 'react';
import Image from './Image';

class List extends Component {
render() {
    return(
<ol type='a'>
<Image gambarnya="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500"/>
<li>Nasi Padang</li>
<Image gambarnya="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="200"/>
<li>Sate</li>
<Image gambarnya="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="200"/>
<li>Soto Lamongan</li>
<Image gambarnya="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="200"/>
</ol>
    );
  }
}

export default List;
