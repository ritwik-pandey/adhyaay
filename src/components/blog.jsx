import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './blog.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // verify path

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "BlogPosts"));
                const postsData = [];
                querySnapshot.forEach((doc) => {
                    postsData.push({ id: doc.id, ...doc.data() });
                });
                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching blog posts: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="blog-section" id='blog-adhyaay'>
            <div className="blog-header">
                <h4 className="blog-subtitle">Insights & Updates</h4>
                <h2 className="blog-title">Our <span className="gold-text">Blog</span></h2>
            </div>

            <div className="blog-grid">
                {loading ? (
                    <p className="loading-text">Loading posts...</p>
                ) : posts.length > 0 ? (
                    posts.map((post) => (
                        <Link to={`/blog/${post.id}`} className="blog-card" key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="blog-content">
                                <h3 className="blog-card-title">{post.title || 'Untitled Post'}</h3>
                                {post.date && <p className="blog-date">{post.date}</p>}
                                <p className="blog-excerpt">
                                    {post.Description ? post.Description : 'No summary available.'}
                                </p>
                            </div>
                            <div className="blog-overlay">
                                <span className="read-more">Read More <span className="arrow">→</span></span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="loading-text">No blog posts found.</p>
                )}
            </div>
        </section>
    );
};

export default Blog;
