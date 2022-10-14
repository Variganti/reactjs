import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import StatefulApp from './components/stateprops/StatefulApp';
import TextInput from './components/stateprops/TextInput';
import CompLifeCycle from './components/lifecycle/CompLifeCycle';
import WeatherComponent from './components/lifecycle/WeatherComponent';
import UsingRefs from './components/lifecycle/UsingRefs';
import Button from './components/hooks/Button';
import DataLoader from './components/hooks/DataLoader';
import TestHook from './components/hooks/testHook';
import SpaApp from'./spa/SpaApp';


function App() {
  return (
    <div className="App">
      <Header company="JPMC" city="Hyderabad"/>
    
     {/* <TextInput/> */}
     {/* <CompLifeCycle/> */}
     {/* <WeatherComponent/> */}

     {/* <UsingRefs/> */}
{/* <Button/> */}
{/* <DataLoader/> */}
{/* <TestHook/> */}

<SpaApp/>


      <Footer/>
    </div>
  );
}

export default App;


