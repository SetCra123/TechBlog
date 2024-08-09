const { notify } = require('../controllers');
const { Blog } = require('../models');

const blogData = [
    {
        title: 'My First Post', 
        date: 'September 29, 2026',
        author: 'Birdie',
        blog_content: 'Hey guys, this is my first blog post. It should be about something, but it is not Lol',
    },
    {
        title: 'My Second Post', 
        date: 'September 21, 2028',
        author: 'Dawg',
        blog_content: 'Same code, different project',
    },
    {
        title: 'My Third Post', 
        date: 'September 7, 2023',
        author: 'Grambling',
        blog_content: 'Football season is right around the corner',
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;