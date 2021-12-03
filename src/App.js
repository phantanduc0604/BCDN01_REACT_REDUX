import logo from './logo.svg';
import './App.css';
import BTOanTuXi from './Component/BTOanTuXi/BTOanTuXi';
import {Switch ,BrowserRouter ,Route} from "react-router-dom"
import BTBookingTicket from './Component/BTBookingTicket/BTBookingTicket';
import Header from './Component/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        
        <Route exact path="/BTOanTuXi" component={BTOanTuXi}/>
        <Route exact path="/BTBookingTicket" component={BTBookingTicket}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
