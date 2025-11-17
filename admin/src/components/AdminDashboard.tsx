import React, { useEffect, useState } from 'react';
import { fetchStories, deleteStory } from '../lib/adminApi';

const AdminDashboard: React.FC = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const loadStories = async () => {
            const fetchedStories = await fetchStories();
            setStories(fetchedStories);
        };
        loadStories();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteStory(id);
        setStories(stories.filter(story => story.id !== id));
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Stories</h2>
            <ul>
                {stories.map(story => (
                    <li key={story.id}>
                        <h3>{story.title}</h3>
                        <button onClick={() => handleDelete(story.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;