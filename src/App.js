import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUPPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils'
class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <Routes>
        <Route path='/' element={<Header currentUser={this.state.currentUser}/>}>
          <Route index element={<HomePage/>} />
          <Route path='shop' element={<ShopPage/>} />
          <Route path='signin' element={<SignInAndSignUPPage/>} />
        </Route>
      </Routes>
    );
  }
  
}

export default App;
