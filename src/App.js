import { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/main';
import Safe from './pages/safe';
import Vault from './pages/vault';
import IamService from './pages/iamServiceAccounts';
import ServiceAccount from './pages/serviceAccounts';
import User from './pages/user';
import Documentation from './pages/documentation';
import Azure from './pages/azureActiveDirectory';
import { BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import { menus } from './menus';

function App() {
  return (
    <Router>
      <Header menuLists={menus}/>
      <Main>
      <Switch>
          <Route path="/safe">
            <Safe />
          </Route>
          <Route path="/vault">
            <Vault />
          </Route>
          <Route path="/service">
            <ServiceAccount />
          </Route>
          <Route path="/iam">
            <IamService />
          </Route>
          <Route path="/azure">
            <Azure />
          </Route>
          <Route path="/documentation">
            <Documentation />
          </Route>
          <Route path="/user">
            <User />
          </Route>
      </Switch>
      </Main>
    </Router>
  );
}

export default App;
