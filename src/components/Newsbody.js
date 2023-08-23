import React, { Component} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class Newsbody extends Component {
 
static defaultProps={
  country :'in',
  pagesize: 20,
  category: 'general'
}

static propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}


    constructor(){
        super();
        this.state={
            articles:[],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title="NewsApp"
    }
    

    // async componentDidMount(){
//     let url='https://newsapi.org/v2/everything?q=tesla&from=20230718&sortBy=publishedAt&category=${this.props.category}&apiKey=1d5e90a8e7af41218104e811f0e981a0';
//     let data= await fetch(url);
//     let parsedata = await data.json();
//     console.log(parsedata);
// }

async updatenews(){
  this.props.setProgress(0);
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pagesize=${this.props.pagesize}&q=${this.props.query}`
  this.setState({loading:true})
    let data= await fetch(url)
  this.props.setProgress(30);

    let parsedata=await data.json()
  this.props.setProgress(60);

    this.setState({articles: parsedata.articles, totalResults:parsedata.totalResults, loading:false})
  this.props.setProgress(100);

}


async componentDidMount(){
  this.updatenews();
}



// previouspage = async ()=>{

// this.setState({
//   page: this.state.page-1, 
// })
// this.updatenews();
// }

// nextpage= async ()=>{
// this.setState({
//   page: this.state.page+1, 
// })
// this.updatenews();
// }


fetchMoreData= async()=>{
  this.setState({page: this.state.page+1})
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pagesize=${this.props.pagesize}&q=${this.props.query}`
  this.setState({loading:true})
    let data= await fetch(url)
    let parsedata=await data.json()
    this.setState({articles: this.state.articles.concat(parsedata.articles), totalResults:parsedata.totalResults, loading:false})
}


    render() {
    return (
     <>
        {/* {this.state.loading && <Spinner/>} */}



        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/> }
        >
           <div className="container my-3">
           <div className="row">
  {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
  {this.state.articles.map((element)=>{
return <div className="col-md-4" key={element.url}>
      <NewsItem title={element.title?element.title: ""} description={element.description?element.description.slice(0, 95)+"....":""} imageurl={element.urlToImage?element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaifaI7Xt6w7_u1MWfeuRSUXpPNkb586Ocw&usqp=CAU"} key={element.url} 
      newsurl={element.url}  author={element.author?element.author:"unknown"} date={element.publishedAt}  source={element.source.name} />
    </div>
    
  })} 
</div>
</div>
</InfiniteScroll>


{/* <div className='container d-flex justify-content-between'>
<button disabled={this.state.page<=1} onClick={this.previouspage} type="button" className="btn btn-dark">&laquo; Previous</button>
<button disabled={this.state.page+1 > Math.ceil(this.state.totalarticle/this.props.pagesize)} type="button" onClick={this.nextpage} className="btn btn-dark">Next &raquo;</button>
</div> */}
      </>
    )
  }
}
