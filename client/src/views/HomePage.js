import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';

class HomePage extends Component{
  static displayName = HomePage.name;

  render(){
    return (
      <div className="w-100">
         home page 

         <RegisterForm />
      </div>
    );
  }
}
export default HomePage;