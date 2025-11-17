export interface Story {
    id: string;
    title: string;
    content: string;
    media: Array<{
        type: 'image' | 'video';
        url: string;
    }>;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
}