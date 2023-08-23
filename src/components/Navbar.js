import React, { Component } from 'react'
// import Newsbody from './Newsbody';
// import NewsItem from './NewsItem';
import {  Link } from "react-router-dom";

export default class navbar extends Component {

searchcountry= (event)=>{
    let searchquery=event.target.value;
    // let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1d5e90a8e7af41218104e811f0e981a0&q=${searchquery}`
    //   let data= await fetch(url)
    //   let parsedata=await data.json()
  console.log(searchquery);
  this.props.searchfunc({searchquery});

}

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand"to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page"to="/">Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link"to="/Business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/General">General</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Technology">Technology</Link></li>

                            </ul>
                            <form className="d-flex" role="search" >
                                <input className="form-control me-2" onChange={(e)=>this.searchcountry(e)} type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}
