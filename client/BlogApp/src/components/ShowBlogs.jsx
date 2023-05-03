import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SidebarBlogs from "./SideComponent/SidebarBlogs";
import Header from "./Header";
const ShowBlogs = () => {
  const [ShowBlogs, setShowBlogs] = useState("");
  const [changelike, setchangelike] = useState(true);
  const [likes, setlikes] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchBlog();
  }, [id]);
  const fetchBlog = async () => {
    const data = await fetch(`/api/blogs/filter/${id}`, {
      method: "GET",
    });
    const parsed = await data.json();
    setShowBlogs(parsed);
    setlikes(parsed.Likes);
  };
  const UpdateLike = async () => {
    setchangelike(false);
    setlikes((e) => e + 1);
    const data = await fetch(`/api/blogs/updates/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        changelike: true,
      }),
    });
  };
  const Dislike = async () => {
    setchangelike(true);
    setlikes((e) => e - 1);
    const data = await fetch(`/api/blogs/updates/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        changelike: false,
      }),
    });
  };
  return (
    <>
      <Header />
      <div
        className="container-Show"
        style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
      >
        <div
          className="container-blogs"
          style={{ width: "70%", paddingLeft: "30px" }}
        >
          <div
            className="img-blog"
            style={{ height: "300px", width: "80%", backgroundColor: "red" }}
          ></div>
          <div
            style={{
              display: "flex",
              width: "80%",
              marginTop: "20px",
              flexDirection: "row",
              justifyContent:"space-between"
            }}
          >
            <div
              className="title-blogs"
              style={{
                fontSize: "2rem",
                fontFamily: "Heebo",
                fontWeight: "1000",
              }}
            >
              {ShowBlogs.Title}
            </div>
            <div
              style={{
                display: "flex",
                marginLeft:"70px",
                alignItems:"center"
              }}
            >
              {likes}
              {changelike ? (
                <button
                  style={{ marginLeft: "23px" }}
                  className="btn btn-dark"
                  onClick={UpdateLike}
                >
                  like
                </button>
              ) : (
                <button
                  style={{ marginLeft: "23px" }}
                  className="btn btn-dark"
                  onClick={Dislike}
                >
                  Dislike
                </button>
              )}
            </div>
          </div>
          <div
            className="desc-blogs my-2"
            style={{
              fontSize: "1.1rem",
              fontFamily: "poppins",
              whiteSpace: "pre-wrap",
              width: "777px",
            }}
          >
            {ShowBlogs.Description}
          </div>
        </div>
        <SidebarBlogs />
      </div>
    </>
  );
};

export default ShowBlogs;
