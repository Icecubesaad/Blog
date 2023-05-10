import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SidebarBlogs from "./SideComponent/SidebarBlogs";
import Header from "./Header";
const ShowBlogs = () => {
  const [checked, setchecked] = useState(false);

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
    updateUser(changelike);
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
    setchangelike(true)
    updateUserDisLike()
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
  const updateUser = async()=>{
    const User_side = await fetch(`/api/auth/likes/${id}`,{
      method:"POST",
      headers:{
        "jwt_token" : localStorage.getItem("key"),
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        option:true
      })
    })
}
const updateUserDisLike = async()=>{
  const User_side = await fetch(`/api/auth/likes/${id}`,{
    method:"POST",
    headers:{
      "jwt_token" : localStorage.getItem("key"),
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      option:false
    })
  })
}
  return (
    <>
      <Header />
      <div
        className="container-Show"
        style={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}
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
              justifyContent: "space-between",
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
                marginLeft: "70px",
                alignItems: "center",
              }}
            >
              {likes}
              <div>
                {changelike ? (
                  <button
                  style={{backgroundColor:"transparent",border:"transparent"}}
                    
                    onClick={UpdateLike}
                  >
                    <input type="checkbox" id="checkbox" />
                        <label for="checkbox">
                          <svg
                            id="heart-svg"
                            viewBox="467 392 58 57"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="Group"
                              fill="none"
                              fill-rule="evenodd"
                              transform="translate(467 392)"
                            >
                              <path
                                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                id="heart"
                                fill="#AAB8C2"
                              />
                              <circle
                                id="main-circ"
                                fill="#E2264D"
                                opacity="0"
                                cx="29.5"
                                cy="29.5"
                                r="1.5"
                              />

                              <g
                                id="grp7"
                                opacity="0"
                                transform="translate(7 6)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#9CD8C3"
                                  cx="2"
                                  cy="6"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#8CE8C3"
                                  cx="5"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp6"
                                opacity="0"
                                transform="translate(0 28)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#CC8EF5"
                                  cx="2"
                                  cy="7"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#91D2FA"
                                  cx="3"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp3"
                                opacity="0"
                                transform="translate(52 28)"
                              >
                                <circle
                                  id="oval2"
                                  fill="#9CD8C3"
                                  cx="2"
                                  cy="7"
                                  r="2"
                                />
                                <circle
                                  id="oval1"
                                  fill="#8CE8C3"
                                  cx="4"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp2"
                                opacity="0"
                                transform="translate(44 6)"
                              >
                                <circle
                                  id="oval2"
                                  fill="#CC8EF5"
                                  cx="5"
                                  cy="6"
                                  r="2"
                                />
                                <circle
                                  id="oval1"
                                  fill="#CC8EF5"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp5"
                                opacity="0"
                                transform="translate(14 50)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#91D2FA"
                                  cx="6"
                                  cy="5"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#91D2FA"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp4"
                                opacity="0"
                                transform="translate(35 50)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#F48EA7"
                                  cx="6"
                                  cy="5"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#F48EA7"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                />
                              </g>

                              <g
                                id="grp1"
                                opacity="0"
                                transform="translate(24)"
                              >
                                <circle
                                  id="oval1"
                                  fill="#9FC7FA"
                                  cx="2.5"
                                  cy="3"
                                  r="2"
                                />
                                <circle
                                  id="oval2"
                                  fill="#9FC7FA"
                                  cx="7.5"
                                  cy="2"
                                  r="2"
                                />
                              </g>
                            </g>
                          </svg>
                        </label>
                  </button>
                ) : (
                  <button onClick={Dislike} style={{backgroundColor:"transparent",border:"transparent", marginLeft:"15px"}}><div id="main-content">
                    <div>
                      <input type="checkbox" id="checkbox1" />
                      <label for="checkbox1">
                        <svg
                          id="heart-svg"
                          viewBox="467 392 58 57"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Group"
                            fill="red"
                            fill-rule="evenodd"
                            transform="translate(467 392)"
                          >
                            <path
                              d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                              id="heart"
                              fill="red"
                            />
                            <circle
                              id="main-circ"
                              fill="#E2264D"
                              opacity="0"
                              cx="29.5"
                              cy="29.5"
                              r="1.5"
                            />

                            <g
                              id="grp7"
                              opacity="0"
                              transform="translate(7 6)"
                            >
                              <circle
                                id="oval1"
                                fill="#9CD8C3"
                                cx="2"
                                cy="6"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#8CE8C3"
                                cx="5"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp6"
                              opacity="0"
                              transform="translate(0 28)"
                            >
                              <circle
                                id="oval1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="7"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#91D2FA"
                                cx="3"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp3"
                              opacity="0"
                              transform="translate(52 28)"
                            >
                              <circle
                                id="oval2"
                                fill="#9CD8C3"
                                cx="2"
                                cy="7"
                                r="2"
                              />
                              <circle
                                id="oval1"
                                fill="#8CE8C3"
                                cx="4"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp2"
                              opacity="0"
                              transform="translate(44 6)"
                            >
                              <circle
                                id="oval2"
                                fill="#CC8EF5"
                                cx="5"
                                cy="6"
                                r="2"
                              />
                              <circle
                                id="oval1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp5"
                              opacity="0"
                              transform="translate(14 50)"
                            >
                              <circle
                                id="oval1"
                                fill="#91D2FA"
                                cx="6"
                                cy="5"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#91D2FA"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp4"
                              opacity="0"
                              transform="translate(35 50)"
                            >
                              <circle
                                id="oval1"
                                fill="#F48EA7"
                                cx="6"
                                cy="5"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#F48EA7"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="grp1"
                              opacity="0"
                              transform="translate(24)"
                            >
                              <circle
                                id="oval1"
                                fill="#9FC7FA"
                                cx="2.5"
                                cy="3"
                                r="2"
                              />
                              <circle
                                id="oval2"
                                fill="#9FC7FA"
                                cx="7.5"
                                cy="2"
                                r="2"
                              />
                            </g>
                          </g>
                        </svg>
                      </label>
                    </div>
                  </div></button>
                )}
              </div>
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
