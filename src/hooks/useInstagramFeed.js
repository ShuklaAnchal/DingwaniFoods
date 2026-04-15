import { useState, useEffect } from 'react';

const useInstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

        if (!accessToken) {
          throw new Error('Instagram Access Token is not configured.');
        }

        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`;

        const response = await fetch(url);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to fetch Instagram feed');
        }

        const data = await response.json();

        const formattedPosts = data.data.map(post => ({
          id: post.id,
          caption: post.caption || '',
          mediaType: post.media_type,
          mediaUrl: post.media_type === 'VIDEO' ? (post.thumbnail_url || '/wafer-dummy.png') : post.media_url,
          permalink: post.permalink,
          likes: Math.floor(Math.random() * 800) + 200,
          views: Math.floor(Math.random() * 10) + 2
        }));

        setPosts(formattedPosts.slice(0, 24)); // Get more posts for scrollable sections
      } catch (err) {
        console.error('Instagram feed error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return { posts, loading, error };
};

export default useInstagramFeed;
