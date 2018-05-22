'use strict';
/**
 * Grab some dynamic data.
 */
Banner.prototype.loadDynamicData = function () {
  Enabler.setProfileId(999999);
  let devDynamicContent = {};

  /* jshint ignore:start */
  devDynamicContent.My_GoogleSheet_Feed= [{}];
  devDynamicContent.My_GoogleSheet_Feed[0]._id = 0;
  devDynamicContent.My_GoogleSheet_Feed[0].copy1 = "Hello World";
  devDynamicContent.My_GoogleSheet_Feed[0].image1 = {};
  devDynamicContent.My_GoogleSheet_Feed[0].image1.Type = "file";
  devDynamicContent.My_GoogleSheet_Feed[0].image1.Url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/59506/balloons.png";
  Enabler.setDevDynamicContent(devDynamicContent);
  /* jshint ignore:end */

  this.dynamicContent = dynamicContent || devDynamicContent;
  _this.start();
};
