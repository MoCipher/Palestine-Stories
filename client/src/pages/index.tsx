import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import StoryCard from '../components/StoryCard';
import { useStories } from '../hooks/useStories';

const HomePage = () => {
    const { stories, loading, error } = useStories();

    return (
        <div>
            <Head>
                <title>Palestine Stories</title>
                <meta name="description" content="Share your stories and experiences from Palestine." />
            </Head>
            <Navbar />
            <main>
                <h1>Welcome to Palestine Stories</h1>
                {loading && <p>Loading stories...</p>}
                {error && <p>Error loading stories: {error.message}</p>}
                <div className="story-list">
                    {stories.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            </main>
            <style jsx>{`
                .story-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                }
            `}</style>
        </div>
    );
};

export default HomePage;