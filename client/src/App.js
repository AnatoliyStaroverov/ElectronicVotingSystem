import './assets/tailwind.css'; 

import React from 'react'; 

import Home from './components/Home'; 
import Login from './components/Login'; 
import Candidates from './components/Candidates'; 
import CreateAccount from './components/CreateAccount'; 
import Map from './components/Map'; 
import VotingBallot from './components/VotingBallot'; 
import Logout from './components/Logout'; 
import Timer from './components/Timer'; 
import MenuItems from './components/MenuItems'; 



export default class App extends React.Component
{
  constructor(props) {
    super(props);

    // Global app state.
    this.state = {
      username: '',
      page: 'home',
    }

    this.onNavSelect = this.onNavSelect.bind(this);
    this.doStateChange = this.doStateChange.bind(this);
  }

  // This function is called when someone clicks on a button in the navbar.
  onNavSelect(page) {
    this.setState({page});
  }

  doStateChange(name, value) {
    if (name === 'page') {
      this.onNavSelect(value);
      return;
    }

    this.setState({[name]: value});
  }
  render(){
    const pages = {
      'The Candidates': (
        <Candidates
          data-testid = "page-candidates"
        ></Candidates>
      ),
      'Electoral Map': (
        <Map
          data-testid="page-map"
        ></Map>
      ),
      'Create Account': (
        <CreateAccount
          data-testid="page-createAccount"
          doStateChange={this.doStateChange}
        >
        </CreateAccount>
      ),
      'Login': (
        <Login onNavSelect={this.onNavSelect}
          data-testid="page-login"
          doStateChange={this.doStateChange}
        ></Login>
      ),
      
      'votingBallot': (
        <VotingBallot 
          data-testid="page-votingBallot"
          username={this.state.username}>
        </VotingBallot>
      ),
    }

    if (this.state.username) {
      delete pages['login'];
      delete pages['createAccount'];
      pages['logout'] = (<Logout onNavSelect={this.onNavSelect} doStateChange={this.doStateChange}></Logout>)
    } else {
      delete pages['votingBallot'];
    }
  
    return(
      <main>
        <Home></Home>
        <MenuItems
          items={Object.keys(pages)}
          active={this.state.page}
          onNavSelect={this.onNavSelect}
        ></MenuItems>
        
  
        {pages[this.state.page]}
        
      </main>
    );
  }
 

}