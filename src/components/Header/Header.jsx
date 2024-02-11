import React from 'react';
import "./Header.css"
import Logo from '../../pictures/logo.webp';
import { LuMenu } from "react-icons/lu";

export default function Header(){
    return (
        <div className='headerContainer'>
            <div  className='childHeader'>
                <div className='leftHeader'>
                    <img className="logoHeader" src={Logo}></img>
                    <nav className='navHeader'>
                        <ul className='ulHeader'> 
                            <li className='liHeader'><a>UTILITE</a></li>
                            <li className='liHeader'><a>COMMENT CELA FONCTIONNE</a></li>
                            <li className='liHeader'><a>TOKENOMICS</a></li>
                            <li className='liHeader'><a>FEUILLE DE ROUTE</a></li>
                            <li className='liHeader'><a>EQUIPE</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='rightHeader'>
                    <div className='buttonAudit'>
                        <p>AUDIT</p>
                    </div>
                    <div className='buttonBuy'>
                        <p>COMMENT ACHETER</p>
                    </div>
                    <div className='buttonStaking'>
                        <p>STAKING</p>
                    </div>
                   
                </div>
                <LuMenu  className='menuPhone'/>
            </div>
        </div>
    )
}