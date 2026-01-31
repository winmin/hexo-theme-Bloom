/**
 * Bloom Theme Helpers
 */

'use strict';

// ========================================
// Markdown Helper
// ========================================
hexo.extend.helper.register('markdown', function(text) {
  if (!text) return '';
  var marked = require('marked');
  return marked.parse(text);
});

// ========================================
// Is Current Helper
// ========================================
hexo.extend.helper.register('is_current', function(path) {
  var pagePath = this.page.path;
  if (!pagePath) return false;

  // Remove trailing slashes for comparison
  path = path.replace(/^\/|\/$/g, '');
  pagePath = pagePath.replace(/^\/|\/$/g, '');

  if (path === '' && pagePath === 'index.html') return true;
  if (path === '' && pagePath === '') return true;

  return pagePath.indexOf(path) === 0;
});

// ========================================
// Word Count Helper
// ========================================
hexo.extend.helper.register('word_count', function(content) {
  if (!content) return 0;
  // Remove HTML tags
  content = content.replace(/<[^>]*>/g, '');
  // Count Chinese characters
  var cn = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  // Count English words
  var en = (content.replace(/[\u4e00-\u9fa5]/g, ' ').match(/[a-zA-Z]+/g) || []).length;
  return cn + en;
});

// ========================================
// Reading Time Helper
// ========================================
hexo.extend.helper.register('reading_time', function(content, wordsPerMinute) {
  wordsPerMinute = wordsPerMinute || 200;
  var words = this.word_count(content);
  var minutes = Math.ceil(words / wordsPerMinute);
  return minutes < 1 ? 1 : minutes;
});

// ========================================
// Truncate Helper
// ========================================
hexo.extend.helper.register('truncate', function(text, length) {
  if (!text) return '';
  length = length || 100;

  // Remove HTML tags
  text = text.replace(/<[^>]*>/g, '');

  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
});
