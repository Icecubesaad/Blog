import React from 'react';
import BlogsCards from '../Cards/BlogsCards';
import { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../spinner/BigSpinner';
import AppContext from '../Function/AppContext';

const MainBlog = () => {
    const context = useContext(AppContext)
    const {setBlogsFetch,change,changeAgain,buttonHoverStyle} = context
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const { id } = useParams();
  const [Blogs, setBlogs] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const fetchBlogs = async (currentPage) => {
    const data = await fetch(`/api/blogs/get/${id}/${currentPage}`, {
      method: 'GET',
    });
    const parsedData = await data.json();
    setBlogs((prevBlogs) => [...prevBlogs, parsedData]);
  };

  useEffect(() => {
    if (!isInitialRender) {
      fetchBlogs(page);
    } else {
      setIsInitialRender(false);
    }
  }, [id, page, isInitialRender]);

  const loadMoreBlogs = () => {
    setPage((prevPage) => prevPage + 1);
    setLoadMore(false);
  };

  return (
    <div className='Flex-Box-Cards'>
      {Blogs.length >= 1 ? (
        <div>
          {Blogs.map((e) =>
            e.map((y) => (
              <BlogsCards
                title={y.Title}
                desc={y.Description}
                date={y.Date}
                tags={y.Tags}
                id={y.Id}
                style={{ fontSize: '1.3rem' }}
                likes={y.Likes}
                author={y.User}
              />
            ))
          )}
          {!loadMore ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingBottom: '20px' }}>
              <button  style={buttonHoverStyle.style} onClick={loadMoreBlogs} onMouseOver={change} onMouseLeave={changeAgain}>Load more</button>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', height: '60vh', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default MainBlog;
