import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const docRef = doc(db, "BlogPosts", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setPost({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching blog post: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div className="blog-post-loading">Loading post...</div>;
    }

    if (!post) {
        return <div className="blog-post-loading">Post not found.</div>;
    }

    return (
        <div className="blog-post-container">
            <div className="blog-post-content-wrapper">


                <h1 className="post-main-title">{post.title}</h1>

                <div className="author-section">
                    <div className="author-info">
                        <div className="author-avatar">
                            <img src={post.authorImage || "https://i.pravatar.cc/150?img=32"} alt="Author" />
                        </div>
                        <div className="author-details">
                            <p className="author-name">{post.author || 'Adhyaay'}</p>
                            <p className="post-meta">{post.date || '11 Jan 2022'} • {post.readTime || '5 min read'}</p>
                        </div>
                    </div>
                    <div className="social-share">
                        <button className="share-btn">🔗</button>
                        <button className="share-btn">in</button>
                        <button className="share-btn">🐦</button>
                        <button className="share-btn">f</button>
                    </div>
                </div>

                <div className="post-body">
                    {post.content ? (
                        <div dangerouslySetInnerHTML={{ __html: post.description }} />
                    ) : (
                        <>
                            <p className="post-text">
                                {post.description ? post.description : "As technology continues to evolve at a rapid pace, it's crucial to stay up-to-date with the latest trends and innovations shaping our digital landscape. In this tech blog, we'll explore some of the most exciting developments across various domains, from artificial intelligence and blockchain to augmented reality and quantum computing. Join us on this journey into the future as we delve into the fascinating world of technology."}
                            </p>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
