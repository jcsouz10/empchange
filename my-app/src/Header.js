import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
    render(){
        return(
            <div>
        <Link className='link' to="/"><div className='header'> <h1 className='nameApp'>Emp. Change </h1> </div></Link>
            </div>
        )
    }
}


export default Header;