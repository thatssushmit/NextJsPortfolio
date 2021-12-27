// dayjs
import dayjs from 'dayjs';
// lib
import { createPost } from 'utility/createBlogPost';
// type
import { BlogPost } from 'types/blogPostType';

const blogPosts: BlogPost[] = [
  createPost({
    category: ['Angular'],
    date: dayjs().subtract(6, 'week'),
    id: 'how-to-shoot-beautiful-photos-in-sunlight',
    image: {
      alt: 'angularLogo.png',
      height: 2232,
      likes: 98,
      src: '/posts/angularLogo.png',
      width: 1920,
    },
    filename: 'how-to-shoot-beautiful-photos-in-sunlight',
    title: 'Angular | A Beginners Guide',
  }),
  createPost({
    category: ['JavaScript'],
    date: dayjs().subtract(3, 'week'),
    id: 'how-to-be-creative-in-design',
    image: {
      alt: 'person holding light bulb',
      height: 2400,
      likes: 126,
      src: '/posts/nextJs.png',
      width: 1920,
    },
    filename: 'how-to-be-creative-in-design',
    title: 'Building a single-page application with Next.js and React Route',
  }),
  createPost({
    category: ['Angular'],
    date: dayjs().subtract(6, 'day'),
    id: '21-tips-that-every-desinger-must-know',
    image: {
      alt: 'person holding ballpoint pen writing on white paper',
      height: 2396,
      likes: 51,
      src: '/posts/Angular-13-Features.jpg',
      width: 1920,
    },
    filename: '21-tips-that-every-desinger-must-know',
    title: 'What’s New in Angular',
  }),
  createPost({
    category: ['JavaScript'],
    date: dayjs().subtract(2, 'week'),
    id: 'tips-for-photographers-when-it-is-raining',
    image: {
      alt: 'water droplets on glass window',
      height: 2880,
      likes: 20,
      src: '/posts/git.png',
      width: 1920,
    },
    filename: 'tips-for-photographers-when-it-is-raining',
    title: `Welcome to Git-it!`,
  }),
];

export default blogPosts;
