'use strict';

/**
 * rsa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rsa.rsa');
