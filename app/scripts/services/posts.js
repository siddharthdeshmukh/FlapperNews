'use strict';

/**
 * @ngdoc service
 * @name flapperNewsAppApp.posts
 * @description
 * # posts
 * Service in the flapperNewsAppApp.
 */
angular.module('flapperNewsAppApp')
  .service('posts', function () {

    this.posts = [{title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 15},
      {title: 'post 4', upvotes: 9},
      {title: 'post 5', upvotes: 4}];
    this.addPost = function (post) {
      if (!post.title || post.title === '') {
        return;
      }
      this.posts.push({
        title: post.title,
        link: post.link,
        upvotes: 0
      });
      post.title = '';
      post.link = '';
    };
  });
