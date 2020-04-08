import React from 'react';
import './App.css';
import { Nav} from 'react-bootstrap';

function Footer(props) {
    return (
<div className='Footer'>

        <div className='id1' >
            <a className='FooterLinks' href="#home">Protech</a>
            <a className='FooterLinks' href="#home">ADAS</a>
            <a className='FooterLinks' href="#home">Contact</a>
        </div>
</div>
    );
}

export default Footer;
