import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import {
//     useLocation
//   } from "react-router-dom";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = '';
        if (props.newstype === 'everything' && props.query) {
            console.log(props.query);
            url = `https://gnews.io/api/v4/search?q=${props.query}&lang=en&apikey=${props.api_key}`
            // url=  `https://newsapi.org/v2/everything?q=${props.query}&apiKey=1d5e90a8e7af41218104e811f0e981a0&language=en`
        }
        else if (props.category) {
            console.log(props.category);
            url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&apikey=${props.api_key}`

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
        try {
            let url = '';
            if (props.newstype === 'everything' && props.query) {
                console.log(props.query);
                url = `https://gnews.io/api/v4/search?q=${props.query}&lang=en&apikey=${props.api_key}`
                // url=  `https://newsapi.org/v2/everything?q=${props.query}&apiKey=1d5e90a8e7af41218104e811f0e981a0&language=en`
            }
            else if (props.category) {
                url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&apikey=${props.api_key}`
                // url =`https://newsapi.org/v2/${props.newstype}?country=in&category=${props.category}&apiKey=${props.api_key}&page=${page}&pagesize=${props.pagesize}&q=${props.query}`
            }
            setPage(page + 1)
            let data = await fetch(url);
            let parsedData = await data.json()
            if (parsedData.articles) {
                setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
            } else {
                console.error("No articles found in API response");
            }
            setTotalResults(parsedData.totalArticles || 0);
            console.log(totalResults);
            console.log(articles.length);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }

    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults - 10}
                loader={<Spinner />}
                
            >
                <div className="container">

                    <div className="row">
                        {articles?.map((element) => {
                            if (!element || !element.title || !element.description || !element.url) {
                                return null;
                            }
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imageUrl={element.image} newsUrl={element.url}
                                    author={element.author ? element.author : "Unknown"}
                                    date={element.publishedAt ? element.publishedAt : "Not available"}
                                    source={element.source.name ? element.source.name : "Unknown"} />
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