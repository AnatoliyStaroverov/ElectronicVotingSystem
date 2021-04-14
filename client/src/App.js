import React from "react";

import HomePage from "./Components/HomePage.jsx";
import CreateAccount from "./Components/CreateAccount.jsx";
import TheCandidates from "./Components/TheCandidates.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import VotingMap from "./Components/VotingMap.jsx";
import MenuItems from "./Components/MenuItems.jsx";




export default class App extends React.Component {
   constructor(props) {
    super(props);

    // Global app state.
    this.state = {
      username: '',
      page: 'Home',
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

  // menu state here
  render() {
    const pages = {
      'Home': (
       <HomePage
         data-test-id="page-home"
       ></HomePage>
      ), 
      'The Candidates': (
    
        <TheCandidates
          data-testid="page-candidates"
        ></TheCandidates>
      ),
      'Voting Map': (

        <VotingMap
          data-testid="page-voting-map"
        >
        </VotingMap>
      ),
      'Create Account': (
      <CreateAccount
        data-testid="page-create-account"
        doStateChange={this.doStateChange}
       >
      </CreateAccount>
        
      ),
      'Login': (
        <LoginPage onNavSelect={this.onNavSelect}
          data-testid="page-login"
          doStateChange={this.doStateChange}
        ></LoginPage>
       
      ),
    }


    return (
      <main>
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

  

 

