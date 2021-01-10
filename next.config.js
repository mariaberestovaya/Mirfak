const with_plugins = require('next-compose-plugins');
const with_images = require('next-images');

// TODO: add next-offline and next-optimized-images

module.exports = with_plugins([with_images], {
	poweredByHeader: false,
	experimental: {
		reactMode: 'concurrent',
	},
	reactStrictMode: true,
});
