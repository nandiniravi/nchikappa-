import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Herobanner from './components/Herobanner/Herobanner';
import NavOptions from './components/NavOptions/NavOptions';
import Footer from './components/Footer/Footer';
import Commendations from './components/Commendations/Commendations';
import Intro from './components/Intro/Intro';
import MainPageOptions from './components/MainPageOptions/MainPageOptions';
import NavBarInSubPage from './components/NavBarInSubPage/NavBarInSubPage';
import Gallery from './components/Gallery/Gallery';
import Bhajan from './components/Bhajan/Bhajan';
import Slokas from './components/Slokas/Slokas';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          <Header></Header>
          <Route exact path='/'>
            <Herobanner></Herobanner>
            <Intro></Intro>
            <NavOptions></NavOptions>
          </Route>
          <Route exact path='/about-him'>
            <MainPageOptions page='aboutHim'></MainPageOptions>
          </Route>
          <Route exact path='/religion'>
            <MainPageOptions page='religion'></MainPageOptions>
          </Route>
          <Route exact path='/gallery'>
            <NavBarInSubPage page='aboutHim'></NavBarInSubPage>
            <Gallery></Gallery>
          </Route>
          <Route exact path='/commendations'>
            <NavBarInSubPage page='aboutHim'></NavBarInSubPage>
            <Commendations></Commendations>
          </Route>
          <Route exact path='/slokas'>
            <NavBarInSubPage page='religion'></NavBarInSubPage>
            <Slokas></Slokas>
          </Route>
          <Route exact path='/bhajan'>
            <NavBarInSubPage page='religion'></NavBarInSubPage>
            <Bhajan></Bhajan>
          </Route>
          <Footer></Footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
