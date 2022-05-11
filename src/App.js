import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Safe from "./pages/safe";
import Vault from "./pages/vault";
import IamService from "./pages/iamServiceAccounts";
import ServiceAccount from "./pages/serviceAccounts";
import User from "./pages/user";
import Documentation from "./pages/documentation";
import Azure from "./pages/azureActiveDirectory";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { menus } from "./menus";
const secretKey = process.env.secretKey;
const secretKey2 = process.env.secretKey1;
function App() {
  return (
    <Router>
      <Header menuLists={menus} />
      <Main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/safe" />;
            }}
          />
          <Route path="/safe" component={Safe} />
          <Route path="/vault" component={Vault} />
          <Route path="/service" component={ServiceAccount} />
          <Route path="/iam" component={IamService} />
          <Route path="/azure" component={Azure} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/user" component={User} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
