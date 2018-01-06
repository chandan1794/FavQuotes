// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Quotes } from './quotes.js';

Meteor.methods({
  'quotes.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Quotes.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
