import React from 'react';
import searchIcon from './search.png'; 
import bell from './bel.png'

function Icons() {
  return (
    <div>
      <img src={searchIcon} style={{width:"25px",top:"20px" ,position:"absolute", right:"120px", opacity:"0.1px"}} alt="Search Icon" />
      <img src={bell} style={{width:"45px",top:"10px" ,position:"absolute", right:"160px", opacity:"0.1px"}} alt="Search Icon" />
    </div>
  );
}

export default Icons;
