'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/logo.png'
  ];

  this.balloonUrl = this.dynamicContent.My_GoogleSheet_Feed[0].image1.Url;
  this.images.push(this.balloonUrl);

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    retina: true,
    parent: this.banner
  });

  this.balloon = this.smartObject({
    backgroundImage: this.balloonUrl,
    parent: this.banner
  });

  this.copy1 = this.smartObject({
    color: '#000',
    top: 'none',
    bottom: 0,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.copy1.innerHTML = this.dynamicContent.My_GoogleSheet_Feed[0].copy1;
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {

};
