// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Quotes } from '../../api/quotes/quotes.js';

Meteor.startup(() => {
  // if the Links collection is empty
  // Quotes.remove({});
  const data = [
    {
      source: 'Do the Tutorial',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      tags: ['hello', 'hi'],
      createdAt: new Date(),
    },
    {
      source: 'Follow the Guide',
      quote: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      tags: ['hello', 'hi'],
      createdAt: new Date(),
    },
    {
      source: 'Read the Docs',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      tags: ['hello', 'hi', "Lorem", "simply", "text of", "Lorem Ipsum is simply dummy text of"],
      createdAt: new Date(),
    },
    {
      source: 'Discussions',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: ['hello', 'hi'],
      createdAt: new Date(),
    },
  ];

  // data.forEach(quote => Quotes.insert(quote));
});
