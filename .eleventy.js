const pluginDate = require('eleventy-plugin-date');
const pluginRSS = require('@11ty/eleventy-plugin-rss');
const metagen = require('eleventy-plugin-metagen');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(metagen);

  eleventyConfig.addFilter('dateFilter', function (date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });
  // eleventyConfig.ignores.add('docs/**');
  // eleventyConfig.addPassthroughCopy({ 'docs/dist': 'docs' });
};
