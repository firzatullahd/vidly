import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import Logout from './components/commons/logout';
import ProtectedRoute from './components/commons/protectedRoute';
import RegisterForm from './components/registerForm';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {}

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user })
  }

  render() {
    const { user } = this.state;

    return <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/vidly/register" component={RegisterForm} />
          <Route path="/vidly/login" component={LoginForm} />
          <Route path="/vidly/logout" component={Logout} />
          <ProtectedRoute
            path="/vidly/movies/:id"
            component={MovieForm}
          />
          <Route
            path="/vidly/movies"
            render={props => <Movies {...props} user={this.state.user} />}
          />
          <Route path="/vidly/customers" component={Customers} />
          <Route path="/vidly/rentals" component={Rentals} />
          <Route path="/vidly/not-found" component={NotFound} />
          <Redirect from="/" exact to="/vidly/movies" />
          <Redirect from="/vidly" exact to="/vidly/movies" />
          <Redirect to="/vidly/not-found" />
        </Switch>

      </main>
      {/* <main className="container">
        <Movies />
      </main> */}
    </React.Fragment>
  }
}

export default App;
