import React from "react";
import HomePage from "./Components/HomePage.jsx";
import TheCandidates from "./Components/TheCandidates.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import VotingMap from "./Components/VotingMap.jsx";
import MenuItems from "./Components/MenuItems.jsx";


//  <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>

export default class App extends React.Component {
   constructor(props) {
    super(props);

    // Global app state.
    this.state = {
      username: '',
      page: 'Home',
      islogin:false
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
    const notLoginedPages = {
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
  
      'Login / Register': (
        <LoginPage />
       
      ),
    }

    const LoginedPages = {
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
  
      'Logout': (
        <LoginPage />
       
      ),
    }


    return (
      <main>
        { this.state.islogin == false ?
        <MenuItems
          items={Object.keys(notLoginedPages)}
          active={this.state.page}
          onNavSelect={this.onNavSelect}
        >
        </MenuItems> 
        :
        <MenuItems
        items={Object.keys(LoginedPages)}
        active={this.state.page}
        onNavSelect={this.onNavSelect}
      >
      </MenuItems>
      }
        {this.state.islogin ? LoginedPages[this.state.page]:
        notLoginedPages [this.state.page] }
      </main>
    );
  }
}

  

 

