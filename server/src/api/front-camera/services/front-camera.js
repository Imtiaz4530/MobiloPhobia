'use strict';

/**
 * front-camera service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::front-camera.front-camera');
