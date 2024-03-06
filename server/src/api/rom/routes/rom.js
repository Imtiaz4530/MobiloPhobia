'use strict';

/**
 * rom router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rom.rom');
