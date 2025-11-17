import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed users
    const user1 = await prisma.user.create({
        data: {
            username: 'palestinian_hero',
            email: 'hero@example.com',
            password: 'securepassword',
            stories: {
                create: [
                    {
                        title: 'A Day in Jerusalem',
                        content: 'Exploring the rich history and culture of Jerusalem.',
                        media: {
                            create: [
                                { url: 'https://example.com/photo1.jpg', type: 'image' },
                                { url: 'https://example.com/video1.mp4', type: 'video' }
                            ]
                        }
                    }
                ]
            }
        }
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'cultural_ambassador',
            email: 'ambassador@example.com',
            password: 'securepassword',
            stories: {
                create: [
                    {
                        title: 'The Taste of Palestine',
                        content: 'Sharing the delicious traditional dishes of Palestine.',
                        media: {
                            create: [
                                { url: 'https://example.com/photo2.jpg', type: 'image' },
                                { url: 'https://example.com/video2.mp4', type: 'video' }
                            ]
                        }
                    }
                ]
            }
        }
    });

    console.log({ user1, user2 });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });