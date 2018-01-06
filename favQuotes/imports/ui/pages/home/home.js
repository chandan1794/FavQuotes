import './home.html';

import '../../components/title/title.js';
import '../../components/quote-box/quote-box.js';
import '../../components/tags/tags.js';
import '../../components/fab/fab.js';
import '../../components/quote-form/quote-form.js';

import { Quotes } from '/imports/api/quotes/quotes.js';
import { Meteor } from 'meteor/meteor';

Template.App_home.onCreated(function(){
    Meteor.subscribe("quotes.all");
})

Template.App_home.helpers({
    allQuotes: function(){
        return Quotes.find({}).fetch();
    }
})