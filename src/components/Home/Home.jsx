import React, { useState, useEffect } from 'react';
import './Home.css';
import Logo from '../../pictures/logo.webp';
import Bottom from '../../pictures/bottom.png';
import SplashFgLeft from '../../pictures/splash-fg-left.webp';
import SplashBgLeft from "../../pictures/splash-bg-left.webp";
import SplashFgRight from '../../pictures/splash-fg-right.webp';
import SplashBgRight from "../../pictures/splash-bg-right.webp";
import USDTlogo from "../../pictures/icon-usdt.svg";
import ETHlogo from "../../pictures/icon-eth.svg";
import BNBlogo from "../../pictures/icon-bsc.svg";

export default function Home()
{
    const [scrollPosition, setScrollPosition] = useState(0);
    const [deviseSelect, setDeviseSelect] = useState(0);
    const [priceBeforeChange, setPriceBeforeChange] = useState("");
    const [priceDevise, setPriceDevise] = useState("");
    const [bsb, setBsb] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const handleDeviseSelect = (info) => {
        setDeviseSelect(info);
        setPriceDevise("");
        setPriceBeforeChange("");
        setBsb(true);
    };

    const handleChangeDevise = (value) => {
        if (bsb){
            if (deviseSelect === 1){
                let tmp = Math.floor(value / 0.279);
                setPriceDevise(tmp);
            } else {
                let tmp = Math.floor(value * 8967);
                setPriceDevise(tmp);
            }
        } else
        {
            let tmp = Math.floor(value * 1144);
            setPriceDevise(tmp);
        }
       
        
    };

    const handlePriceBeforeChange = (e) => {
        setPriceBeforeChange(e.target.value);
        handleChangeDevise(e.target.value);
    };

    const handleChangeBsb = () => {
        setBsb(!bsb);
        setPriceDevise("");
        setPriceBeforeChange("");
        setDeviseSelect(0);
    };



    return (
        <div className='homeContainer'>
            <div className='childContainer'>
                <img alt="leftLogo" className="leftLogo" src={SplashBgLeft} style={{ transform: `translate(${-scrollPosition * 0.3}px, ${-scrollPosition * 0.3}px)` }}></img>
                <img alt="leftLogo" className="leftLogo" src={SplashFgLeft} style={{ transform: `translate(${-scrollPosition }px, ${-scrollPosition }px)` }}></img>

                <img alt="rightLogo" className="rightLogo" src={SplashBgRight} style={{ transform: `translate(${scrollPosition * 0.3}px, ${-scrollPosition * 0.3}px)` }}></img>
                <img alt="rightLogo" className="rightLogo" src={SplashFgRight} style={{ transform: `translate(${scrollPosition }px, ${-scrollPosition }px)` }}></img>
               
                <div className='logoContainer'>
                    <img alt="logo" className='imgLogo' src={Logo}></img>
                </div>
                <div className='walletContainer'>
                    <p className='titleWallet'>STAKEZ, JOUEZ & GAGNEZ DES RÉCOMPENSES</p>
                    <p className='textWallet'>Meme Kombat est une nouvelle plateforme de jeu innovante conçue pour les passionnés de jeux. Du pari actif au staking passif, il existe des récompenses pour tous les utilisateurs.</p>
                    <div className='modelePourcent'>
                        <div className='colorModelePourcent'></div>
                        <p style={{zIndex:'1'}}>USDT levés : $8,546,503.25 / $10,000,000.00</p>
                    </div>
                    <div className='ligne'></div>
                    <p className='titleWallet' style={{fontSize:"1.5em", margin:"0"}}>CHOISISSEZ VOTRE DEVISE</p>
                    <div className='containerDevise'>
                        <div className='buttonDevise' onClick={()=>{handleDeviseSelect(0)}} style={{backgroundColor: deviseSelect === 0 ? '#10464F' : '#237A89', transition: 'background-color 0.5s' }}>
                        <img alt="logoCrypto" className="logoCrypto" src={!bsb ? BNBlogo : ETHlogo} ></img>
                        { !bsb ? <p>BNB</p> : <p>ETH</p>}
                        </div>
                        <div className='buttonDevise' onClick={()=>{handleDeviseSelect(1)}} style={{backgroundColor: deviseSelect === 1 ? '#10464F' : '#237A89', transition: 'background-color 0.5s' }}>
                            <img alt="logoCrypto" className="logoCrypto" src={USDTlogo}></img>
                            <p>USDT</p>
                        </div>
                    </div>
                    <p className='titleWallet' style={{fontSize:"1.3em", color:"#3E5F61", marginTop:"20px", marginBottom:"10px"}}>1 $MK = $0.279</p>
                    <div className='ligne'></div>
                    <div className='containerMount'>
                        <div className='containerInput'>
                            <p className='textTopInput'><b>{bsb ? (deviseSelect === 0 ? 'ETH' : 'USDT') : 'BNB'}</b> que vous payez</p>
                            <input className='inputMount' value={priceBeforeChange} onChange={(e)=>{handlePriceBeforeChange(e)}} placeholder='0'></input>
                        </div>
                        <div className='containerInput'>
                            <p className='textTopInput'> <b>$MK</b> vous recevez.</p>
                            <input className='inputMount'  placeholder='0' value={priceDevise} style={{backgroundColor:"#5B8488"}}></input>
                        </div>
                    </div>
                    <div className='modeleButton' >
                        <p>Connecter le portefeuille</p>
                    </div>
                    <div className='modeleButton' onClick={handleChangeBsb}>
                        <img alt="logoCrypto" className="logoCrypto" src={bsb ? BNBlogo : ETHlogo} ></img>
                        { bsb ? <p>Acheter sur la BSC</p> : <p>Acheter sur Ethereum</p>}
                    </div>
                </div>
                <img alt="bottom" className="imgBottom" src={Bottom}></img>
            </div>
        </div>
    )
}