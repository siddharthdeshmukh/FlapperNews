'use strict';

/**
 * @ngdoc function
 * @name flapperNewsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flapperNewsAppApp
 */
angular.module('flapperNewsAppApp')
  .controller('MainCtrl',['posts', function (po) {
    this.posts = po.posts;
    this.addPost = function () {
      po.addPost(this.title,this.link);
    };

    this.incrementUpvotes = function (post) {
     po.incrementUpvotes(post);
    };
  }]);
