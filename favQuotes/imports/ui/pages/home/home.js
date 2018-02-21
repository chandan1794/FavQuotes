import './home.html';

import '../../components/title/title.js';
import '../../components/quote-box/quote-box.js';
import '../../components/tags/tags.js';
import '../../components/fab/fab.js';
import '../../components/quote-form/quote-form.js';

import { Meteor } from 'meteor/meteor';

Template.App_home.onCreated(function () {
    this.x = new ReactiveVar([]);
})

Template.App_home.helpers({
    setDb: function () {
        var db = window.openDatabase("db_quotes", "1.0.0", "Quotes Database", 2 * 1024 * 1024);
        var logs = [];
        var x = Template.instance().x;
        db.transaction(function (tx) {
            return tx.executeSql('SELECT * FROM tbl_quotes', [], function (tx, results) {
                var len = results.rows.length, i;
                for (i = 0; i < len; i++) {
                    logs.push(results.rows.item(i));
                }
                x.set(logs);
            }, null);
        })
    },
    allQuotes: function () {
        return Template.instance().x.get();
    }
})

Template.App_home.events({
    "click .delete": (event, context) => {
        var id = $(event.currentTarget).data("id");
        var db = window.openDatabase("db_quotes", "1.0.0", "Quotes Database", 2 * 1024 * 1024);

        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM tbl_quotes WHERE id=?', [id]);
        })
    }
})