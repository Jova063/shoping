import React, { Component } from 'react'
import "./App.css";
import Dashboard from './pages/js/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Dashboard/>
      </div>
    )
  }
}
