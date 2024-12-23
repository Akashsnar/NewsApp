import React from 'react';
import {  Link, useNavigate } from "react-router-dom";

const Navbar=(props)=>{
    const navigate = useNavigate();

    // const [page, setPage] = useState(1)
    // const [totalResults, setTotalResults] = useState(0)
    
    const searchcountry= async(event)=>{
        event.preventDefault();
        let searchquery=event.target.value;
      console.log(searchquery);
       props.searchfunc(searchquery);
    // if(searchquery!==' '|| searchquery!==''){
    //    const url =`https://newsapi.org/v2/top-headlines?country=in&category=General&apiKey=${props.api_key}&pagesize=15&q=${searchquery}`
    //    let data = await fetch(url);
    //    let parsedData = await data.json()
    //    setArticles(parsedData.articles)
    // //    setTotalResults(parsedData.totalResults)
    //    setLoading(false)
    //     console.log(articles);
    // }
}

// const runMyFunction=(e)=> {
//     // e.preventDefault();
//     const element = document.getElementById("searchcomponent");
// if(element){
//     element.innerHTML='';
// }
// console.log("h");
//     return true;
//   }

  const handleSubmit = event => {
    event.preventDefault();
    props.setNewsearchkey(Math.random())
    navigate("/contacts");
  };


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
                                <li className="nav-item"><Link className="nav-link"to="/Business"        >Business</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Entertainment"   >Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/General"         >General</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Health"          >Health</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Science"         >Science</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Sports"          >Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link"to="/Technology"      >Technology</Link></li>

                            </ul>
                            <form onSubmit={handleSubmit} className="d-flex" role="search" >
                                <input className="form-control me-2" onChange={(e)=> searchcountry(e)} type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>


   {/* <div className="container" id="searchcomponent">
                         
                    <div className="row">
                        {articles && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>  */}




            </div>
        )

}
export default Navbar;