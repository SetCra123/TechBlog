# TechBlog
This will be a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

# Deployment
This site will be deployed using Render and it will follow the MVC paradigm. I will use Handlebars.js as the templating language, Sequelize as the ORM and the expression-session npm package for authentication. 

# User Experience
A user will be presented with a homepage, consisting of blog posts that have already been posted, navigation to the homepage and dashboard and the option to log in. A user will be prompted to log in when they click on the links in the homepage. If a user chooses to sign up, they will be prompted to create a user-name, password and enter their email address. When they click sign up, their credentials are saved and they are logged onto the site

Once they are logged in, they will be taken to a homepage with existing blog posts, which they can comment on. When they click on the blog post, they will be presented with the post's title, conents, post creator's username and the date created. The User will have the option to comment on the post. The comment is saved and the post is updated instantly with the new comment. 

The User will see a button to add posts. When they click on that button, they are prompted to add a title and content to the blog post. Once they add information their content is saved and added to their dashboard. They can now view the blogpost on the dashboard. 

# Technologies Used
express-handlebars
pg
dotenv package
bcrypt package
express-session
Sequelize

