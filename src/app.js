/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');
var RSS = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://b.hatena.ne.jp/hotentry/it.rss&num=20';

ajax({
    url: RSS,
    type: 'json'
  },
  function(data) {
    // Success!
    var entryData = data.responseData.feed.entries;
    var news = [];
    for(var i = 0,l = entryData.length; i < l; i++) {
      news.push({title: entryData[i].title});
    }

    var list = new UI.Menu({
      sections: [{
        title: 'hotentry',
        items: news
      }]
    });
    list.show();
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
