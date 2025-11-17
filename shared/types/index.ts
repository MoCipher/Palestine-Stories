export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Story {
    id: string;
    title: string;
    content: string;
    media: Media[];
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Media {
    id: string;
    url: string;
    type: 'image' | 'video';
    storyId: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export interface SigninData {
    email: string;
    password: string;
}