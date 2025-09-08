import VideoPopup from "@/src/modals/video-popup";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const PostboxArea = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Wait until ID is available

    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch single post
        const postResponse = await axios.get(`${BASEURL}/api/blogs/${id}`);
        const postData = postResponse.data;
        const formattedPost = {
          id: postData.id,
          img: postData.image?.url,
          date: new Date(postData.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          post_by: postData.author,
          title: postData.title,
          description: extractDescription(postData.content),
          tags_data: postData.tags.map((tag) => tag.tag),
        };
        setPost(formattedPost);

        // Fetch recent posts for sidebar
        const recentResponse = await axios.get(`${BASEURL}/api/blogs`);
        const formattedRecentPosts = recentResponse.data.docs
          .filter((item) => item.id !== id) // Exclude current post
          .slice(0, 3) // Limit to 3 recent posts
          .map((item) => ({
            id: item.id,
            img: item.image?.url,
            date: new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            title: item.title,
          }));
        setRecentPosts(formattedRecentPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

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

  return (
    <>
      <section className="postbox__area pt-10 pb-120">
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
          ) : !post ? (
            <div className="text-center py-5">
              <p>No blog post found.</p>
            </div>
          ) : (
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12">
                <div className="postbox__wrapper pr-20">
                  <div className="post__button">
                    <Link className="tp-btn" href="/blog">
                      Back
                    </Link>
                  </div>

                  <article className="postbox__item format-image mb-50 transition-3">
                    {post.img && (
                      <div className="postbox__thumb w-img">
                        <Link href={`/blog-details/${post.id}`}>
                          <img
                            src={`${BASEURL}${post.img}`}
                            alt={post.image?.alt || post.title || "Blog Post"}
                              loading="lazy"
                          />
                        </Link>
                      </div>
                    )}
                    {post.video && (
                      <div className="postbox__thumb postbox__video w-img p-relative">
                        <Link href={`/blog-details/${post.id}`}>
                          <img
                            src={`${BASEURL}${post.img}`}
                            alt={post.image?.alt || post.title || "Blog Post"}
                              loading="lazy"
                          />
                        </Link>
                        <button
                          onClick={() => setIsVideoOpen(true)}
                          className="play-btn pulse-btn popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </button>
                        <VideoPopup
                          isVideoOpen={isVideoOpen}
                          setIsVideoOpen={setIsVideoOpen}
                          videoId={post.video}
                        />
                      </div>
                    )}
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <i className="far fa-calendar-check"></i>
                          {post.date}
                        </span>
                        <span>
                          <i className="far fa-user"></i>
                          {post.post_by}
                        </span>
                      </div>
                      <h3 className="postbox__title">{post.title}</h3>
                      <div className="postbox__text">
                        <p>{post.description}</p>
                      </div>
                    </div>
                  </article>
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
