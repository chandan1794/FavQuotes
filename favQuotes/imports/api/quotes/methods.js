// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Quotes } from './quotes.js';

Meteor.methods({
	'quotes.insert'(source, quote, tags) {
		check(source, String);
		check(quote, String);
		check(tags, Array);

		return Quotes.insert({
			source,
			quote,
			tags,
			createdAt: new Date(),
		});
	},
});
