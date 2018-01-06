// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Quotes } from '../quotes.js';

Meteor.publish('quotes.all', function () {
  return Quotes.find();
});