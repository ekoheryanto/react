import React, {Component} from 'react';
import Image from './Image';

class List extends Component {
render() {
    return(
<ol type='a'>
<Image/>
<li>Nasi Goreng</li>
<li>Nasi Kebuli</li>
<li>Nasi Rames</li>
</ol>
    );
  }
}

export default List;
