import './App.css';

import React,  {useState} from 'react'
import Navbar from './components/Navbar';
import Newsbody from './components/Newsbody';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  
// const api_key='f9fff24bda681513a1e6d8cd95dceb3c'
const api_key='7f4a18af19675b4859953d5e47249f2b'

  const [progress, setProgress] = useState(0)
  const [searchval, setSearchval] = useState('')
  const [randroute, setRandroute] = useState('')
  const [newsearchkey, setNewsearchkey] = useState('')

  const searchfunc= (searchvalreturn)=>{
    setSearchval(searchvalreturn);
    console.log("hello moto");
    console.log(searchval+randroute);
    return;
  }

    return (
      <div>
        <Router>
      <Navbar api_key={api_key} searchfunc={searchfunc} setRandroute={setRandroute} setNewsearchkey={setNewsearchkey}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      
{/* <Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Science"      pagesize={15} country={'in'} category={'Science'}/> */}


      <Routes forceRefresh={true}>
          <Route exact path="/Science"          element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Science"         pagesize={15} country={'in'} category={'science'}/>}/>
          <Route exact path="/General"          element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="General"         pagesize={15} country={'in'} category={'general'}/>}/>
          <Route exact path="/Health"           element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Health"          pagesize={15} country={'in'} category={'health'}/>}/>
          <Route exact path="/Entertainment"    element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Entertainment"   pagesize={15} country={'in'} category={'entertainment'}/>}/>
          <Route exact path="/Sports"           element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Sports"          pagesize={15} country={'in'} category={'sports'}/>}/>
          <Route exact path="/Technology"       element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Technology"      pagesize={15} country={'in'} category={'technology'}/>}/>
          <Route exact path="/Business"         element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Business"        pagesize={15} country={'in'} category={'business'}/>}/>
          <Route exact path="/"                 element={<Newsbody query={''}        newstype={'top-headlines'} api_key={api_key} setProgress={setProgress} key="Home"            pagesize={15} country={'in'} category={'general'}/>}/>          
          <Route exact path="/contacts"         element={<Newsbody query={searchval} newstype={'everything'}    api_key={api_key} setProgress={setProgress} key={newsearchkey}    pagesize={15} country={'in'} category={''}/>}/>
          {/* <Route exact path="/"          element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="General"      pagesize={15} country={'in'} category={''}/>}/> */}

    </Routes> 
  
        </Router>      
      </div>
    )
  }

export default App;
