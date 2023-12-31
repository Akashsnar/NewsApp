import React from 'react'
const NewsItem= (props)=> {
  let { title, description, imageUrl, newsUrl, author, date, source }= props;
   
   return (
<div className="my-3">
 
 <div className="card">
<div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right: '0'}}>
<span className="rounded-pill bg-danger rounded-circle badge">{source}</span>
</div>
  <img className="card-img-top" src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl}  style={{height:"260px"}} alt=""/>
<div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel='noreferrer' href={newsUrl} className="btn btn-primary">Read Article</a>
    <p className="card-text"><small className="text-muted">{author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
      </div>
    )
}
export default NewsItem;
