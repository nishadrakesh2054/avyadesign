import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const PostboxArea = () => {
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postsPerPage = 2;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch paginated posts for main content
        const postsResponse = await axios.get(
          `${BASEURL}/api/blogs?page=${currentPage}&limit=${postsPerPage}`
        );
        const formattedPosts = postsResponse.data.docs.map((item) => ({
          id: item.id,
          img: item.image?.url,
          date: new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          post_by: item.author,
          title: item.title,
          description: extractDescription(item.content),
          tags_data: item.tags.map((tag) => tag.tag),
        }));
        setPosts(formattedPosts);
        setTotalPages(
          postsResponse.data.totalPages ||
            Math.ceil(postsResponse.data.totalDocs / postsPerPage)
        );

        // Fetch 5 most recent posts for sidebar
        const recentResponse = await axios.get(`${BASEURL}/api/blogs?limit=5`);
        const formattedRecentPosts = recentResponse.data.docs.map((item) => ({
          id: item.id,
          img: item.image?.url,
          date: new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          title: item.title,
          tags_data: item.tags.map((tag) => tag.tag),
        }));
        setRecentPosts(formattedRecentPosts);

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  // Extract description from content.root.children
  const extractDescription = (content) => {
    if (!content?.root?.children) return "No description available.";
    const paragraphs = content.root.children
      .filter(
        (child) => child.type === "paragraph" && child.children.length > 0
      )
      .map((child) => child.children.map((textNode) => textNode.text).join(""));
    return paragraphs.join(" ") || "No description available.";
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section className="postbox__area pt-120 pb-120">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-5">
              <p>No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="postbox__wrapper pr-20">
                  {posts.slice(0, 2).map((item, i) => (
                    <article
                      key={item.id || i}
                      className="postbox__item format-image mb-50 transition-3"
                    >
                      {item.img && (
                        <div className="postbox__thumb w-img">
                          <Link href={`/blog-details/${item.id}`}>
                            <img
                              src={`${BASEURL}${item.img}`}
                                loading="lazy"
                              alt={item.image?.alt || item.title || "Blog Post" }
                            />
                          </Link>
                        </div>
                      )}
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span>
                            <i className="far fa-calendar-check"></i>
                            {item.date}
                          </span>
                          <span>
                            <Link href={`/blog-details/${item.id}`}>
                              <i className="far fa-user"></i>
                              {item.post_by}
                            </Link>
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href={`/blog-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                        <div className="postbox__text">
                          <p>{item.description}</p>
                        </div>
                        <div className="post__button">
                          <Link
                            className="tp-btn"
                            href={`/blog-details/${item.id}`}
                          >
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link
                            href="#"
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={currentPage === 1 ? "disabled" : ""}
                          >
                            <i className="far fa-angle-left"></i>
                          </Link>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                          <li key={i}>
                            <Link
                              href="#"
                              onClick={() => handlePageChange(i + 1)}
                              className={currentPage === i + 1 ? "current" : ""}
                            >
                              {i + 1}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="#"
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={
                              currentPage === totalPages ? "disabled" : ""
                            }
                          >
                            <i className="far fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                    <div className="sidebar__widget-content">
                      <div className="sidebar__post rc__post">
                        {recentPosts.map((item, i) => (
                          <div
                            key={item.id || i}
                            className="rc__post mb-20 d-flex align-items-center"
                          >
                            <div className="rc__post-thumb mr-20">
                              <Link href={`/blog-details/${item.id}`}>
                                <img
                                  src={`${BASEURL}${item.img}`}
                                    loading="lazy"
                                  alt={
                                    item.image?.alt || item.title || "Blog Post"
                                  }
                                />
                              </Link>
                            </div>
                            <div className="rc__post-content">
                              <h3 className="rc__post-title">
                                <Link href={`/blog-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                              <div className="rc__meta">
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Tags</h3>
                    <div className="sidebar__widget-content">
                      <div className="tagcloud">
                        {[
                          ...new Set(
                            [...posts, ...recentPosts].flatMap(
                              (item) => item.tags_data
                            )
                          ),
                        ].map((tag, i) => (
                          <Link key={i} href="/blog">
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PostboxArea;
