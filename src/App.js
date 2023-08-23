import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsbody from './components/Newsbody';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'






export default class App extends Component {
  
api_key='1d5e90a8e7af41218104e811f0e981a0'

  state={
    progress:0,
    searchval:'uk'
  }


  setProgress=(progress)=>{
    this.setState({progress : progress})
  }

  searchfunc= (serachvalreturn)=>{
    this.setState({ searchval : serachvalreturn});
    console.log("hello moto");
    
    console.log(this.state.searchval);
    return;

  }


  render() {
    return (
      <div>
        <Router>
      <Navbar searchfunc={this.searchfunc}/>
   <Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="General"      pagesize={15} country={'in'} category={'General'}/>

      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(1-0)}
      />


      <Routes>
          <Route exact path="/Science"           element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="Science"      pagesize={15} country={'in'} category={'Science'}/>}/>
          <Route exact path="/General"           element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="General"      pagesize={15} country={'in'} category={'General'}/>}/>
          <Route exact path="/Health"            element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="Health"       pagesize={15} country={'in'} category={'Health'}/>}/>
          <Route exact path="/Entertainment"     element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="Entertainment"pagesize={15} country={'in'} category={'Entertainment'}/>}/>
          <Route exact path="/Sports"            element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="Sports"       pagesize={15} country={'in'} category={'Sports'}/>}/>
          <Route exact path="/Technology"        element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="Technology"   pagesize={15} country={'in'} category={'Technology'}/>}/>
          <Route exact path="/Business"          element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="Business"     pagesize={15} country={'in'} category={'Business'}/>}/>
          <Route exact path="/"                  element={<Newsbody query={this.state.searchval} api_key={this.api_key} setProgress={this.setProgress} key="General"      pagesize={15} country={'in'} category={'General'}/>}/>
          {/* <Route exact path="/search"            element={<Newsbody setProgress={this.setProgress} key="General"      pagesize={15} country={'in'} category={'General'}/>}/> */}
        </Routes>
  
        </Router>      
      </div>
    )
  }
}

