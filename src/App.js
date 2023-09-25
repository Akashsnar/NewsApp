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




























// import './App.css';

// import React,  {useState} from 'react'
// import Navbar from './components/Navbar';
// import Newsdirect from './components/Newsdirect';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'




// const App=()=> {
  
// const api_key='1d5e90a8e7af41218104e811f0e981a0'
// // const api_key='18bbc7a5a195486b896e0a3b5877214e'
// const [articles, setArticles] = useState([]);
//   const [progress, setProgress] = useState(0)
//   const [searchval, setSearchval] = useState('')
//   const [category , setCategory]= useState('General')
//   const [isLoading, setLoading] = useState(false);

// const categoryset=async(category)=>{
// setCategory(category);
//   fetchdata();
// }

//   const searchfunc= async(searchvalreturn)=>{
//     setSearchval(searchvalreturn);
//     console.log("hello moto");
//     console.log(searchval);
//     fetchdata();
//   }

// const fetchdata=async()=>{
//   setLoading(true);  
//   const url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}&pagesize=15&q=${searchval}`
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       console.log(parsedData);
//       console.log(data);
//       setLoading(false);
//       setArticles(parsedData.articles)
//       // setTotalResults(parsedData.totalResults)
// }

// // const [counter, setCounter] = useState(0);
 
// // const handleIncrease = () => {
// //     setCounter((prev) => prev + 1);
// // };

// // const handleDecrease = () => {
// //     setCounter((prev) => prev - 1);
// // };

// console.log('Rendering!!!');


//     return (
//       <div>
//         <Router>
//       <Navbar  api_key={api_key} searchfunc={searchfunc} categoryset={categoryset}/>
//       <LoadingBar
//         color='#f11946'
//         progress={progress}
//       />
// {/* <Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Science"      pagesize={15} country={'in'} category={'Science'}/> */}

// {/* <Routes>
// <Route exact path="/"    element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="General"      pagesize={15} country={'in'} category={category}/>}/>
// </Routes>  */}
//  {isLoading ? "" : <Newsdirect query={searchval} api_key={api_key} setProgress={setProgress} key="General"  articles={articles}    pagesize={15} country={'in'} category={category}/>}

// {/* <button onClick={handleDecrease}>
//                 decrease
//             </button>
//             <span> {counter} </span>
//             <button onClick={handleIncrease}>
//                 increase
//             </button> */}



//       {/* <Routes>
//           <Route exact path="/Science"           element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Science"      pagesize={15} country={'in'} category={'Science'}/>}/>
//           <Route exact path="/General"           element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="General"      pagesize={15} country={'in'} category={'General'}/>}/>
//           <Route exact path="/Health"            element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Health"       pagesize={15} country={'in'} category={'Health'}/>}/>
//           <Route exact path="/Entertainment"     element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Entertainment"pagesize={15} country={'in'} category={'Entertainment'}/>}/>
//           <Route exact path="/Sports"            element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Sports"       pagesize={15} country={'in'} category={'Sports'}/>}/>
//           <Route exact path="/Technology"        element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Technology"   pagesize={15} country={'in'} category={'Technology'}/>}/>
//           <Route exact path="/Business"          element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="Business"     pagesize={15} country={'in'} category={'Business'}/>}/>
//           <Route exact path="/"                  element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="General"      pagesize={15} country={'in'} category={category}/>}/>
//           <Route exact path="/somewhere_else"    element={<Newsbody query={searchval} api_key={api_key} setProgress={setProgress} key="General"      pagesize={15} country={'in'} category={'General'}/>}/>
//           </Routes>  */}
  
//         </Router>      
//       </div>
//     )
//   }

// export default App;

// {/* <div className="container" id="searchcomponent">
                         
//                          <div className="row">
//                              {articles && articles.map((element) => {
//                                  return <div className="col-md-4" key={element.url}>
//                                      <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                                  </div>
//                              })}
//                          </div>
//                          </div>  */}