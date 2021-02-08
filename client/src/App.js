import React ,{Component} from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import AuthHomePage from './views/AuthHomePage';
import VotingPage from './views/VotingPage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/AuthHomePage' component={AuthHomePage}  />
        <Route path='/VotingPage' Component={VotingPage} />
      </Switch>
      </BrowserRouter>

    );
  }
}
