import React from "react";
import './styles.scss';
import MainCarousel from './MainCarousel';
import LastBets from './LastBets';
import Button from '../../components/Button';

const games = [
    {src:require('../../images/sampleImages/PortadasJuegos/juego original.png')},
    {src:require('../../images/sampleImages/PortadasJuegos/Slot.png')},
];
const sections = ['', 'Slots']
const carouseItems = [
    {src:require('../../images/sampleImages/Banners/banner (1).png')},
    {src:require('../../images/sampleImages/Banners/banner (2).png')},
    {src:require('../../images/sampleImages/Banners/banner (3).png')},
    {src:require('../../images/sampleImages/Banners/banner (1).png')}
];

const Home = (props) => {
    return (
        <>
            <div className="homepage-container">
                <section className="main-carousel">
                    <MainCarousel
                        items={carouseItems}
                    />
                </section>
                <section className="nav-container">
                    <ul className="items">
                        <li>
                            <Button variant='contained'>
                                🎮 BetSweet originals
                            </Button>
                        </li>
                        <li>
                            <span className="btn-secondary">
                                ⭐ Favoritos
                            </span>
                        </li>
                        <li>
                            <span className="btn-secondary">
                                🔥 Reciente
                            </span>
                        </li>
                        <li>
                            <span className="btn-secondary">
                                🃏 En vivo
                            </span>
                        </li>
                    </ul>
                </section>
                    {
                        sections.map((data, index)=>{
                            return (
                                <section className="games-container" key={index}>
                                    <div className="title">
                                        {data}
                                    </div>
                                    <ul className="game-list">
                                        {
                                            games.map((data, index)=> {
                                                return (
                                                    <li key={'game-'+index} className='game-item'>
                                                        <div>
                                                            <img src={data.src} alt=''/>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </section>
                            )
                        })
                    }
                    <div className="lazyload-container">
                        <Button variant='contained'>Cargar mas</Button>
                    </div>
                <section className="last-bets">
                    <div className="title">
                        ÚLTIMAS APUESTAS
                    </div>
                    <div className="bets-container">
                        <LastBets/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;