import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    name: "Aarav Patil",
    role: "BCA Student",
    category: "Programming",
    text: "Which programming language should a beginner learn first for placements?",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    name: "Sneha Sharma",
    role: "Final Year Student",
    category: "Career Guidance",
    text: "I am preparing my resume. Which skills are important for a fresher?",
    likes: 18,
    comments: 5,
  },
  {
    id: 3,
    name: "Rahul Deshmukh",
    role: "Web Development Learner",
    category: "Projects",
    text: "Share your favourite project ideas for final-year BCA students!",
    likes: 9,
    comments: 2,
  },
];

const groups = [
  {
    name: "Coding Beginners",
    members: "120+ students",
    description: "Learn programming and solve problems together.",
  },
  {
    name: "Placement Preparation",
    members: "95+ students",
    description: "Discuss aptitude, interviews and resume tips.",
  },
  {
    name: "Project Community",
    members: "80+ students",
    description: "Share project ideas and help each other.",
  },
];

export default function Community() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");
  const [category, setCategory] = useState("General");
  const [filter, setFilter] = useState("All");
  const [likedPosts, setLikedPosts] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  const categories = [
    "All",
    "General",
    "Programming",
    "Career Guidance",
    "Projects",
  ];

  const addPost = (e) => {
    e.preventDefault();

    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      name: "You",
      role: "Community Member",
      category,
      text: newPost.trim(),
      likes: 0,
      comments: 0,
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const toggleLike = (id) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter((postId) => postId !== id));
      setPosts(
        posts.map((post) =>
          post.id === id
            ? { ...post, likes: Math.max(0, post.likes - 1) }
            : post
        )
      );
    } else {
      setLikedPosts([...likedPosts, id]);
      setPosts(
        posts.map((post) =>
          post.id === id ? { ...post, likes: post.likes + 1 } : post
        )
      );
    }
  };

  const addComment = (postId) => {
    const message = (commentInputs[postId] || "").trim();

    if (!message) return;

    setComments({
      ...comments,
      [postId]: [
        ...(comments[postId] || []),
        { id: Date.now(), text: message },
      ],
    });

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: post.comments + 1 }
          : post
      )
    );

    setCommentInputs({ ...commentInputs, [postId]: "" });
  };

  const visiblePosts =
    filter === "All"
      ? posts
      : posts.filter((post) => post.category === filter);

  return (
    <div className="community-page">
      <style>{`
        .community-page {
          min-height: 100vh;
          background: #f5f3ff;
          padding: 30px 18px;
          font-family: Arial, sans-serif;
          color: #252542;
        }

        .community-container {
          max-width: 1050px;
          margin: auto;
        }

        .community-hero {
          padding: 35px 24px;
          background: linear-gradient(135deg, #5427a8, #8b5cf6);
          color: white;
          border-radius: 18px;
          margin-bottom: 25px;
          text-align: center;
        }

        .community-hero h1 {
          margin-top: 0;
          font-size: 30px;
        }

        .community-hero p {
          line-height: 1.6;
        }

        .community-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(230px, 1fr);
          gap: 22px;
          align-items: start;
        }

        .community-box {
          background: white;
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 4px 14px rgba(40, 20, 80, 0.06);
        }

        .community-box h2 {
          font-size: 20px;
          margin-top: 0;
        }

        .community-textarea {
          width: 100%;
          min-height: 100px;
          padding: 12px;
          border: 1px solid #d8d0f0;
          border-radius: 9px;
          box-sizing: border-box;
          resize: vertical;
          font: inherit;
          color: #252542;
          background: white;
        }

        .community-select {
          padding: 10px;
          border: 1px solid #d8d0f0;
          border-radius: 8px;
          background: white;
          color: #252542;
          margin: 12px 0;
          max-width: 100%;
        }

        .community-button {
          border: none;
          border-radius: 8px;
          padding: 10px 15px;
          background: #5427a8;
          color: white;
          cursor: pointer;
          font-weight: bold;
        }

        .community-button:hover {
          background: #402080;
        }

        .community-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .community-filter {
          padding: 8px 11px;
          border: 1px solid #d8d0f0;
          border-radius: 18px;
          background: white;
          color: #5427a8;
          cursor: pointer;
        }

        .community-filter.active {
          background: #5427a8;
          color: white;
        }

        .community-post {
          background: white;
          border-radius: 14px;
          padding: 20px;
          margin-bottom: 16px;
          border: 1px solid #ece7fa;
          overflow-wrap: anywhere;
        }

        .community-post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .community-post p {
          line-height: 1.6;
        }

        .community-tag {
          display: inline-block;
          background: #eee7ff;
          color: #5427a8;
          border-radius: 15px;
          padding: 6px 10px;
          font-size: 12px;
        }

        .community-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
        }

        .community-action {
          background: #f0ebff;
          color: #5427a8;
          border: none;
          border-radius: 8px;
          padding: 9px 12px;
          cursor: pointer;
        }

        .community-comment-input {
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
          border: 1px solid #d8d0f0;
          border-radius: 8px;
          margin-top: 10px;
          background: white;
          color: #252542;
        }

        .community-comment {
          background: #f7f5ff;
          padding: 10px;
          border-radius: 8px;
          margin-top: 8px;
          overflow-wrap: anywhere;
        }

        .community-group {
          border: 1px solid #ece7fa;
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 12px;
        }

        .community-group h3 {
          font-size: 16px;
          margin-top: 0;
        }

        .community-group p {
          font-size: 13px;
          color: #5e5e73;
          line-height: 1.5;
        }

        .community-muted {
          color: #686880;
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .community-layout {
            grid-template-columns: 1fr;
          }

          .community-hero h1 {
            font-size: 25px;
          }
        }
      `}</style>

      <div className="community-container">
        <header className="community-hero">
          <h1>Uplyft Community 👥</h1>
          <p>
            Learn together, share ideas, ask questions, and grow
            your career with fellow students.
          </p>
        </header>

        <div className="community-layout">
          <main>
            <section className="community-box">
              <h2>Share with the Community ✨</h2>

              <form onSubmit={addPost}>
                <textarea
                  className="community-textarea"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Ask a question, share a project idea, or help another student..."
                  aria-label="Write a community post"
                />

                <div>
                  <select
                    className="community-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Post category"
                  >
                    {categories
                      .filter((item) => item !== "All")
                      .map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>

                <button className="community-button" type="submit">
                  Publish Post
                </button>
              </form>
            </section>

            <div className="community-filters">
              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    filter === item
                      ? "community-filter active"
                      : "community-filter"
                  }
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {visiblePosts.map((post) => (
              <article className="community-post" key={post.id}>
                <div className="community-post-header">
                  <div>
                    <strong>{post.name}</strong>
                    <div className="community-muted">{post.role}</div>
                  </div>

                  <span className="community-tag">{post.category}</span>
                </div>

                <p>{post.text}</p>

                <div className="community-actions">
                  <button
                    className="community-action"
                    onClick={() => toggleLike(post.id)}
                  >
                    {likedPosts.includes(post.id) ? "❤️ Liked" : "🤍 Like"}
                    {" · "}
                    {post.likes}
                  </button>

                  <button
                    className="community-action"
                    onClick={() =>
                      document
                        .getElementById(`comment-${post.id}`)
                        ?.focus()
                    }
                  >
                    💬 Comments ({post.comments})
                  </button>
                </div>

                {(comments[post.id] || []).map((comment) => (
                  <div className="community-comment" key={comment.id}>
                    {comment.text}
                  </div>
                ))}

                <input
                  id={`comment-${post.id}`}
                  className="community-comment-input"
                  value={commentInputs[post.id] || ""}
                  onChange={(e) =>
                    setCommentInputs({
                      ...commentInputs,
                      [post.id]: e.target.value,
                    })
                  }
                  placeholder="Write a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addComment(post.id);
                    }
                  }}
                />

                <button
                  className="community-button"
                  style={{ marginTop: "8px" }}
                  onClick={() => addComment(post.id)}
                >
                  Add Comment
                </button>
              </article>
            ))}

            {visiblePosts.length === 0 && (
              <div className="community-box">
                No posts in this category yet. Be the first to share!
              </div>
            )}
          </main>

          <aside>
            <section className="community-box">
              <h2>Study Groups 🤝</h2>

              {groups.map((group) => {
                const joined = joinedGroups.includes(group.name);

                return (
                  <div className="community-group" key={group.name}>
                    <h3>{group.name}</h3>
                    <p>{group.description}</p>
                    <div className="community-muted">
                      {group.members}
                    </div>

                    <button
                      className="community-button"
                      style={{ marginTop: "12px" }}
                      onClick={() =>
                        setJoinedGroups(
                          joined
                            ? joinedGroups.filter(
                                (name) => name !== group.name
                              )
                            : [...joinedGroups, group.name]
                        )
                      }
                    >
                      {joined ? "Joined ✓" : "Join Group"}
                    </button>
                  </div>
                );
              })}
            </section>

            <section className="community-box">
              <h2>Community Guidelines 💜</h2>
              <p>• Be respectful to everyone.</p>
              <p>• Share helpful and relevant information.</p>
              <p>• Ask questions without hesitation.</p>
              <p>• Never share passwords or private information.</p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}