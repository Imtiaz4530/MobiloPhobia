'use strict';

/**
 * rom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rom.rom');
