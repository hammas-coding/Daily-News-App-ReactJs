import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
const News = (props) => {
  const { country, category, apikey, pagesize, head } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async (page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setPage(page);
    setLoading(false);
  };
  useEffect(() => {
    fetchData(1);
    document.title = `${head} - Hunter News`;
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${
      page + 1
    }&pageSize=${pagesize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="container bg-dark rounded my-5 p-4">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner />}
        >
          <div className="container bg-dark text-light">
            <h1 className="my-2 mb-4 text-center">
              Hunter <span className="text-info">News</span> - {head}{" "}
              <span className="text-info">Headlines</span>
            </h1>
            {loading && <Spinner />}
            <div className="row">
              {articles.map((article) => (
                <div
                  className="col-md-4 d-flex justify-content-center"
                  key={article.url}
                >
                  <NewsItem
                    title={
                      article.title ? article.title.slice(0, 45) : article.title
                    }
                    description={
                      article.description
                        ? article.description.slice(0, 88)
                        : article.description
                    }
                    imgUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
