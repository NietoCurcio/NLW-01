import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img alt="Ecoleta" src={logo}/>
                </header>

                <main>
                    <h1>Seu Marketplace de coleta de </h1>
                    <p>Ajudamos as pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    {/* <a href="/create-point">  era uma a tag e virou link pra funcionar o SPA*/}
                    <Link to="/create-point">
                        {/* this span is for to place the icon in our button */}
                        <span>
                            <FiLogIn />
                        </span> 
                        <strong>Cadastre um ponto de coleta.</strong>
                        {/* insert icon inside React with react-icons */}
                    </Link>
                    {/* </a> spa = trocar a rota sem recarregar a aplicação*/}
                </main>
            </div>
        </div>
    )
}

export default Home;