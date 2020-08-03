import React from 'react';
import Logo from '../../assets/img/logo512.png'
import './style.css';
import {ButtonLink} from "../Button";
// import ButtonLink from '../components/buttonLink'

let Header =  () => {
    return(
        <header className="menu">
            <a href="/">
            <img  className="logo" src={Logo} alt="Logo igorFlix"></img>
            </a>
            <nav className="nav">
                <ButtonLink className="buttonLink" href="/">
                    Novo vídeo
                </ButtonLink>
            </nav>
        </header>
    );
}



export default Header;