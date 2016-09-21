'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('Should list 20 articles', function () {
    expect(page.articlesListEls.count()).toBeGreaterThan(5);
  });

});
