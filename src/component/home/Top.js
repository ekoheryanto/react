import React from 'react';
const Top =()=>{

const handleevent=(value, e)=>{
e.preventDefault();
alert("isi pesan ini sangat rahasia silahkan klik OK");
alert(value);
};

return(<a href="/" onClick={e=>handleevent('Pesan Dari Top',e)}>Pesan</a>);
}

export default Top;
