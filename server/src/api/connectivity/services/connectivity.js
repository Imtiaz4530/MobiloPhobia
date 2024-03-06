'use strict';

/**
 * connectivity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connectivity.connectivity');
