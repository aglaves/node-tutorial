const Blog = require('../models/blog');

const blog_index = (request, response) => {
    Blog.find().sort({ createdAt: -1 }).then((result) => {
        response.render('blogs/index', {title: 'All Blogs', blogs: result})
    }).catch((err) => {
        console.log(err);
    });
}

const blog_details = (request, response) => {
    const id = request.params.id;
    Blog.findById(id)
        .then((result) => {
            response.render('blogs/details', {title: 'Blog Details', blog: result});
        }).catch(err => {
            console.log(err);
            response.status(404).render('404', {title: 'Blog id:'  + id + ' not found.'});
        });
}

const blog_create_get = (request, response) => {
    response.render('blogs/create', {title: 'New Blog'});
}

const blog_create_post = (request, response) => {
    const blog = new Blog(request.body);
    blog.save()
        .then((request) => {
            response.redirect("/blogs");
        }).catch((err) => {
            console.log(err);
        });
}

const blog_delete = (request, response) => {
    const id = request.params.id;
    Blog.findByIdAndDelete(id).then(() => {
        response.json({redirect: '/blogs'})
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}