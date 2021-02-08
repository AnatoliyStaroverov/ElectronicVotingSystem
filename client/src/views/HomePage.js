import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';

class HomePage extends Component{
  static displayName = HomePage.name;

  render(){
    return (
      <div className="w-100">
         <NavBar />
        
      </div>
    );
  }
}
export default HomePage;