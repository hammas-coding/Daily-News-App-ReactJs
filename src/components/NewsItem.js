import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div
        className="card bg-dark text-light"
        style={{ width: "18rem", border: "2px solid #d4d4d4" }}
      >
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-light text-dark">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://english.cdn.zeenews.com/sites/default/files/2023/03/20/1170617-sd-5.jpg"
          }
          className="card-img-top"
          alt="News Image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-white-50">
              By {author ? author : "Unknown"} at {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-success"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
