import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogListProps from '../types/BlogListType';
import Pagination from './Pagination';

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className='flex flex-col items-left'>
        <div className='columns-1 md:columns-2 lg:columns-3 flex-auto p-5'>
          {currentPosts.map((post) => (
            <div className='m-2 p-2 md:m-4 md:p-4' key={post.id}>
              <h4 className='text-2xl'>{post.title}</h4>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`}>Read More</Link>
            </div>
          ))}
        </div>
        <Pagination
          totalCount={blogPosts.length}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogList;