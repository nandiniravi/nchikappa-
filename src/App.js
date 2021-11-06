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
          <Route exact path='/childhood'>
            <Childhood></Childhood>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
          <Route exact path='/commendations'>
            <Commendations></Commendations>
          </Route>
          <Route exact path='/vision'>
            <Vision></Vision>
          </Route>
          <Footer></Footer>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
