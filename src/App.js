import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Herobanner from './components/Herobanner/Herobanner';
import NavOptions from './components/NavOptions/NavOptions';
import Footer from './components/Footer/Footer';
import Childhood from './components/Childhood/Childhood';
import Service from './components/Service/Service';
import Commendations from './components/Commendations/Commendations';
import Vision from './components/Vision/Vision';
import Intro from './components/Intro/Intro';
import MainPageOptions from './components/MainPageOptions/MainPageOptions';
import NavBarInSubPage from './components/NavBarInSubPage/NavBarInSubPage';
import WriteUps from './components/WriteUps/WriteUps';
import Festivals from './components/Festivals/Festivals';
import Gallery from './components/Gallery/Gallery';

const App = () => {
  return (
    <BrowserRouter>
      
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
            <Gallery></Gallery>
          </Route>
          <Route exact path='/childhood'>
            <NavBarInSubPage page='aboutHim'></NavBarInSubPage>
            <Childhood></Childhood>
          </Route>
          <Route exact path='/service'>
            <NavBarInSubPage page='aboutHim'></NavBarInSubPage>
            <Service></Service>
          </Route>
          <Route exact path='/commendations'>
            <NavBarInSubPage page='aboutHim'></NavBarInSubPage>
            <Commendations></Commendations>
          </Route>
          <Route exact path='/vision'>
            <NavBarInSubPage page='aboutHim'></NavBarInSubPage>
            <Vision></Vision>
          </Route>
          <Route exact path='/writeup'>
            <NavBarInSubPage page='religion'></NavBarInSubPage>
            <WriteUps></WriteUps>
          </Route>
          <Route exact path='/slokas'>
            <NavBarInSubPage page='religion'></NavBarInSubPage>
            {/* <Slokas></Slokas> */}
          </Route>
          <Route exact path='/bhajan'>
            <NavBarInSubPage page='religion'></NavBarInSubPage>
            {/* <Bhajan></Bhajan> */}
          </Route>
          <Route exact path='/festivals'>
            <NavBarInSubPage page='religion'></NavBarInSubPage>
            <Festivals></Festivals>
          </Route>
          <Footer></Footer>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
