import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-primary">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.reuters.com/resizer/v2/QUZX3TEEDVPJHHK2ZEK5KV5XK4.jpg?auth=8d63da4ae981f6e75ecf37d94ac278695f093b49405aaacdbc01f42fae9a9d0f&height=1005&width=1920&quality=80&smart=true"
              : imageUrl
          }
          alt=".."
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
