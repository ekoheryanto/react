import React from 'react';

const Footer = props =>{
  //var nama = "FIRMWARE STUDIO";
return(
  <div>
  <h5>Kumpulan List {props.name} </h5>
  <h6>@{props.tahun}</h6>
  </div>
   );
};

export default Footer;
