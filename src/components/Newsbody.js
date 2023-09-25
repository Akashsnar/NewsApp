// import React, { useEffect, useState} from 'react'
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



// const Newsbody=(props)=>{
// const [articles, setarticles] = useState([]);
// // const [loading, //setloading] = useState(false);
// const [totalResults, settotalResults] = useState(false);
// const [page, setpage] = useState(1);
// document.title="NewsApp"

  
//     // constructor(){
//     //     super();
//     //     ={
//     //         articles:[],
//     //         loading: false,
//     //         page: 1,
//     //         totalResults: 0
//     //     }
//     //     document.title="NewsApp"
//     // }
    

//     // async componentDidMount(){
// //     let url='https://newsapi.org/v2/everything?q=tesla&from=20230718&sortBy=publishedAt&category=${props.category}&apiKey=1d5e90a8e7af41218104e811f0e981a0';
// //     let data= await fetch(url);
// //     let parsedata = await data.json();
// //     console.log(parsedata);
// // }

// const updatenews= async ()=>{
//   props.setProgress(0);
//   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pagesize}&q=${props.query}&q=${props.query}`
//   // //setloading(true);

//     let data= await fetch(url)
//   props.setProgress(30);

//     let parsedata=await data.json()
//   props.setProgress(60);

//   // //setloading(false);
//   setarticles(parsedata.articles);
//   settotalResults(parsedata.totalResults);


//   props.setProgress(100);

// }


// useEffect( () => {
//   updatenews();
// }, [])



// // previouspage = async ()=>{

// // setState({
// //   page: .page-1, 
// // })
// // updatenews();
// // }

// // nextpage= async ()=>{
// // setState({
// //   page: .page+1, 
// // })
// // updatenews();
// // }


// const fetchMoreData = async()=>{
//   setpage(page+1);
  
//   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pagesize}&q=${props.query}&q=${props.query}`
//   //setloading(true);
//     let data= await fetch(url)
//     let parsedata=await data.json()
//     // setState({articles: .articles.concat(parsedata.articles), totalResults:parsedata.totalResults, loading:false})
    
//   //setloading(false);
//   setarticles(articles.concat(parsedata.articles));
//   settotalResults(parsedata.totalResults);
// }


//     return (
//      <>
//         {/* {loading && <Spinner/>} */}



//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length!==totalResults}
//           loader={<Spinner/> }
//         >
//            <div className="container my-3">
//            <div className="row">
//   {/* {!.loading && .articles.map((element)=>{ */}
//   {articles.map((element)=>{
// return <div className="col-md-4" key={element.url}>
//       <NewsItem title={element.title?element.title: ""} description={element.description?element.description.slice(0, 95)+"....":""} imageurl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaifaI7Xt6w7_u1MWfeuRSUXpPNkb586Ocw&usqp=CAU"} key={element.url} 
//       newsurl={element.url}  author={element.author?element.author:"unknown"} date={element.publishedAt}  source={element.source.name} />
//     </div>
    
//   })} 
// </div>
// </div>
// </InfiniteScroll>


// {/* <div className='container d-flex justify-content-between'>
// <button disabled={.page<=1} onClick={previouspage} type="button" className="btn btn-dark">&laquo; Previous</button>
// <button disabled={.page+1 > Math.ceil(.totalarticle/props.pagesize)} type="button" onClick={nextpage} className="btn btn-dark">Next &raquo;</button>
// </div> */}
//       </>
//     )
//   }


// Newsbody.defaultProps={
//   country :'in',
//   pagesize: 20,
//   category: 'general'
// }

// Newsbody.propTypes = {
//   country: PropTypes.string,
//   pagesize: PropTypes.number,
//   category: PropTypes.string,
// }

// export default Newsbody;

///////////////////////////////////////
import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import {
//     useLocation
//   } from "react-router-dom";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
   
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        let url='';
        if(props.newstype==='everything' && props.query){
        // url =`https://newsapi.org/v2/everything?&q=${props.query}&apiKey=${props.api_key}`
        console.log(props.query);
        url=`https://gnews.io/api/v4/search?q=${props.query}&lang=en&apikey=${props.api_key}`
        // url=  `https://newsapi.org/v2/everything?q=${props.query}&apiKey=1d5e90a8e7af41218104e811f0e981a0&language=en`
        }
        else if(props.category){
            console.log(props.category);
            url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&apikey=${props.api_key}`

        // url =`https://newsapi.org/v2/${props.newstype}?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pagesize}&q=${props.query}`
        }
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalArticles)
        setLoading(false)
        props.setProgress(100);
        console.log(parsedData.totalArticles);
        console.log(totalResults);
        console.log(parsedData.articles.length);
        console.log(articles.length);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        console.log("why2");
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        let url='';
        if(props.newstype==='everything' && props.query){
        console.log(props.query);
        url=`https://gnews.io/api/v4/search?q=${props.query}&lang=en&apikey=${props.api_key}`
        // url=  `https://newsapi.org/v2/everything?q=${props.query}&apiKey=1d5e90a8e7af41218104e811f0e981a0&language=en`
        }
        else if(props.category){
            url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&apikey=${props.api_key}`
        // url =`https://newsapi.org/v2/${props.newstype}?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pagesize}&q=${props.query}`
        }
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalArticles)
        console.log(totalResults);
        console.log(articles.length);

      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults-10}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles?.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}  imageUrl={element.image} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News


//https://gnews.io/api/v4/top-headlines?category=General&lang=en&country=us&max=10&apiKey=f9fff24bda681513a1e6d8cd95dceb3c
//https://gnews.io/api/v4/top-headlines?category=General&lang=en&country=us&max=10&apiKey=f9fff24bda681513a1e6d8cd95dceb3c

//https://gnews.io/api/v4/top-headlines?category=General&lang=en&country=us&max=10&apikey=f9fff24bda681513a1e6d8cd95dceb3c