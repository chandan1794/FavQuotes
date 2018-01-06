// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Quotes } from '../../api/quotes/quotes.js';

Meteor.startup(() => {
  // if the Links collection is empty
  Quotes.remove({});
  const data = [
    {
      title: 'Do the Tutorial',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      tags: ['hello', 'hi'],
      createdAt: new Date(),
    },
    {
      title: 'Follow the Guide',
      quote: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      tags: ['hello', 'hi'],
      createdAt: new Date(),
    },
    {
      title: 'Read the Docs',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      tags: ['hello', 'hi', "Lorem", "simply", "text of", "Lorem Ipsum is simply dummy text of"],
      createdAt: new Date(),
    },
    {
      title: 'Discussions',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      tags: ['hello', 'hi'],
      createdAt: new Date(),
    },
  ];

  data.forEach(quote => Quotes.insert(quote));
});
