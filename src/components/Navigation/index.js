import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '../../pages';
import Games from '../../pages/Games';
import Home from '../../pages/Home';
import Boxes from '../../pages/Boxes';
import Minesweeper from '../../pages/MiniGames/Minesweeper';
import Crash from '../../pages/MiniGames/Crash';

import Dice from '../../pages/MiniGames/Dices';
import Sportsbook from '../../pages/Sportsbook';
import Bonuses from '../../pages/Bonuses';
import Tournaments from '../../pages/Tournaments';
import News from '../../pages/News';
import Loyalty from '../../pages/Loyalty';
import Rules from '../../pages/Rules';
import FAQ from '../../pages/FAQ';
import Registration from '../../pages/Registration';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Header from './Header';
import Navbar from './Navbar';
import MobileBar from './Mobilebar';
import Popup from './Popup';
import SearchModal from './SearchModal';
import Footer from '../Footer';
import { BetSlipComponent } from '../BetSlip';
import axios from 'axios';
import ViewMatch from '../../pages/ViewMatch';
// <<<<<<< HEAD
// =======

// >>>>>>> 49c10ab9fe3eb477c9e2d7e8d89cd4136613298d
function Navigations({ toggle, isOpened }) {
  const [isShowed, setShowed] = useState(false);
  const [categoryLists, setCategoryLists] = useState([]);
  const [displayLang, setDisPlayLang] = useState('block');
  const [displayCategory, setDisPlayCategory] = useState('block');
  const [categoryTitle, setCategoryTitle] = useState('');
  const [currentLanguageNumber, setCurrentLanguageNumber] = useState(3);
  useEffect(() => {
    if (localStorage.languageIndex !== undefined) {
      setCurrentLanguageNumber(localStorage.languageIndex);
    }
  }, []);
  const showPop = (categoryLists, displayL, displayC, categoryTitle) => {
    setShowed(!isShowed);
    if (!isShowed) {
      setCategoryLists(categoryLists);
      setDisPlayLang(displayL);
      setDisPlayCategory(displayC);
      setCategoryTitle(categoryTitle);
    }
  };
  const [isSearchActive, setSearchActive] = useState(false);
  const showSearch = () => {
    setSearchActive(!isSearchActive);
  };
  const currentLanguage = (current) => {
    setCurrentLanguageNumber(current);
  };

  //here should bring bet data (live matches, top matches (matches with most bets?), upcoming matches).
  const [liveData, setLiveData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [newError, setNewError] = useState(null);
  const [isBetDataLoading, setBetDataLoading] = useState(true);

  const getBetDataFromLocal = async () => {
    try {
      const responseLive = await axios.get('/mockData/LiveInfo.json');
      const responseTop = await axios.get('/mockData/TopInfo.json');
      const responseUpcoming = await axios.get('/mockData/UpcomingInfo.json');
      setLiveData(responseLive.data);
      setTopData(responseTop.data);
      setUpcomingData(responseUpcoming.data);
    } catch (e) {
      setNewError(e.message);
      setLiveData(null);
      setTopData(null);
      setUpcomingData(null);
    } finally {
      setBetDataLoading(false);
    }
  };

  useEffect(() => {
    getBetDataFromLocal();
  }, []);
  //is User Logged in ? (currently in true just for layout purposes... by default should be false)
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Popup
          showPop={showPop}
          isShowed={isShowed}
          setShowed={setShowed}
          categoryLists={categoryLists}
          displayLang={displayLang}
          displayCategory={displayCategory}
          categoryTitle={categoryTitle}
          currentLanguage={currentLanguage}
        />
        <Header isUserLoggedIn={isUserLoggedIn} />
        <Navbar
          toggle={toggle}
          isOpened={isOpened}
          showPop={showPop}
          isShowed={isShowed}
          setShowed={setShowed}
          showSearch={showSearch}
          currentLanguageNumber={currentLanguageNumber}
        />
        <MobileBar toggle={toggle} isOpened={isOpened} />
        <Routes>
{/* <<<<<<< HEAD */}
          <Route
            path='/'
            exact
            element={
              <Sportsbook
                liveData={liveData}
                topData={topData}
                upcomingData={upcomingData}
                newError={newError}
                isBetDataLoading={isBetDataLoading}
              />
            }
          />
          <Route path='/games' exact element={<Games />} />
          <Route
            path='/sportsbook'
            exact
            element={
              <Sportsbook
                liveData={liveData}
                topData={topData}
                upcomingData={upcomingData}
                newError={newError}
                isBetDataLoading={isBetDataLoading}
              />
            }
          />
          <Route path='/bonuses' exact element={<Bonuses />} />
          <Route path='/tournaments' exact element={<Tournaments />} />
          <Route path='/news' exact element={<News />} />
          <Route path='/loyalty' exact element={<Loyalty />} />
          <Route path='/rules' exact element={<Rules />} />
          <Route path='/FAQ' exact element={<FAQ />} />
          <Route path='/registration' exact element={<Registration />} />
          <Route path='/login' exact element={<Login />} />
          <Route path={'/profile'} exact element={<Profile />} />
          <Route path='/dices' exact element={<Dice />} />
          //TODO viewmatch
          <Route path={'/view-match'} exact element={<ViewMatch />} />
{/* ======= */}
          <Route path="/" exact element={<Home />} />
          <Route path="/games" exact element={<Games />} />
          <Route path="/sportsbook" exact element={<Sportsbook liveData={liveData} topData={topData} upcomingData={upcomingData} newError={newError} isBetDataLoading={isBetDataLoading}/>} />
          <Route path="/bonuses" exact element={<Bonuses />} />
          <Route path="/tournaments" exact element={<Tournaments />} />
          <Route path="/loyalty" exact element={<Loyalty />} />
          <Route path="/rules" exact element={<Rules />} />
          <Route path="/FAQ" exact element={<FAQ />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/login" exact element={<Login />} />
          <Route path={"/profile"} exact element={<Profile/>} />
          <Route path='/dices' exact element={<Dice />} />
          <Route path={"/boxes"} exact element={<Boxes />}/>
          <Route path={"/sweet-news"} exact element={<News />}/>
          //TODO viewmatch
          <Route path={"/view-match"} exact element={<ViewMatch/>}/>
          //MiniGames
          <Route path={"/minesweeper"} exact element={<Minesweeper/>}/>
          <Route path={"/crash"} exact element={<Crash/>}/>
{/* >>>>>>> 49c10ab9fe3eb477c9e2d7e8d89cd4136613298d */}
        </Routes>
        <BetSlipComponent />
        <SearchModal isSearchActive={isSearchActive} showSearch={showSearch} />
        <Footer showPop={showPop} />
      </BrowserRouter>
    </>
  );
}

export default Navigations;
