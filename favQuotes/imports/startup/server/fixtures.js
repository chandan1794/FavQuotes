// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Quotes } from '../../api/quotes/quotes.js';

Meteor.startup(() => {
  // if the Links collection is empty
    Quotes.remove({});
    const data = [
      {
        title: 'Do the Tutorial',
        quote: 'https://www.meteor.com/try',
        tags: ['hello', 'hi'],
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        quote: 'https://www.meteor.com/try',
        tags: ['hello', 'hi'],
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        quote: 'https://www.meteor.com/try',
        tags: ['hello', 'hi'],
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        quote: 'https://www.meteor.com/try',
        tags: ['hello', 'hi'],
        createdAt: new Date(),
      },
    ];

    data.forEach(quote => Quotes.insert(quote));
});
