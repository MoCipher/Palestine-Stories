import React from 'react';

interface StoryCardProps {
    title: string;
    content: string;
    imageUrl?: string;
    videoUrl?: string;
    createdAt: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, content, imageUrl, videoUrl, createdAt }) => {
    return (
        <div className="story-card">
            <h2>{title}</h2>
            <p>{content}</p>
            {imageUrl && <img src={imageUrl} alt={title} />}
            {videoUrl && (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <p className="timestamp">{new Date(createdAt).toLocaleString()}</p>
        </div>
    );
};

export default StoryCard;