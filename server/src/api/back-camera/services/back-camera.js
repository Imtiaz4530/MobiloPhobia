'use strict';

/**
 * back-camera service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::back-camera.back-camera');
