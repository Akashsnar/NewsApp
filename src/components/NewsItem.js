import React, { Component } from 'react'
// import { format } from "date-fns";
export default class NewsItem extends Component {



  render() {
    let {title, description, imageurl, newsurl, author, date, source}= this.props;

    return (
      <div className="my-3">
 
 <div className="card">
<div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right: '0'}}>
<span className="rounded-pill bg-danger rounded-circle badge">{source}</span>
</div>
  <img className="card-img-top" src={imageurl} style={{height:"260px"}} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel='noreferrer' href={newsurl} className="btn btn-primary">Read Article</a>
    <p className="card-text"><small className="text-muted">{author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
      </div>
    )
  }
}
