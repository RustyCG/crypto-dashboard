import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import SidebarV2 from './components/SidebarV2'
import NavbarV2 from './components/NavbarV2'
import Home from './components/Home'
import List from './components/List'
// import ListSearch from './components/ListSearch'
import CoinDetails from './components/CoinDetails'
// import Portfolio from './components/Portfolio'


function App() {
  return (
    <div className="app">
      {/* <Navbar className="navbar" /> */}
      <NavbarV2 />
      <SidebarV2 />
      <main>
        {/* <Sidebar className="sidebar"/> */}
        <Switch>
          <Route path="/coins/:coinId">
            <CoinDetails />
          </Route>
          <Route path="/coins">
            {/* <ListSearch /> */}
            <List />
          </Route>
          {/*<Route path="/portfolio">
            <Portfolio />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
