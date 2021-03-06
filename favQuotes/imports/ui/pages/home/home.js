import './home.html';

import '../../components/title/title.js';
import '../../components/quote-box/quote-box.js';
import '../../components/tags/tags.js';
import '../../components/fab/fab.js';
import '../../components/quote-form/quote-form.js';

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Template.App_home.onCreated(function () {
    this.x = new ReactiveVar([]);
    Session.set("databaseUpdated", true);
    Session.set("query", 'SELECT * FROM tbl_quotes');
    Session.set("defaultQuery", 'SELECT * FROM tbl_quotes');
    Session.set("order", "ORDER BY id DESC");
})

Template.App_home.helpers({
    setDb: function () {
        if (Session.get("databaseUpdated")) {
            var db = window.openDatabase("db_quotes", "1.0.0", "Quotes Database", 2 * 1024 * 1024);
            var logs = [];
            var x = Template.instance().x;
            var query = Session.get("query") + " "+ Session.get("order");
            db.transaction(function (tx) {
                return tx.executeSql(query, [], function (tx, results) {
                    var len = results.rows.length, i;
                    for (i = 0; i < len; i++) {
                        logs.push(results.rows.item(i));
                    }
                    x.set(logs);
                }, null);
            })
        }
    },

    allQuotes: function () {
        return Template.instance().x.get();
    }
})

Template.App_home.events({
    "click .delete": (event, context) => {
        var id = $(event.currentTarget).data("id");
        var db = window.openDatabase("db_quotes", "1.0.0", "Quotes Database", 2 * 1024 * 1024);

        Session.set("databaseUpdated", false);
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM tbl_quotes WHERE id=?', [id]);
            Session.set("databaseUpdated", true);
        })
    },

    "keyup #search_string": (event, context) => {
        var search_string = $(event.currentTarget).val();
        if (search_string.length) {
            var modifiedQuery = Session.get("defaultQuery");
            modifiedQuery += " WHERE title LIKE '%" + search_string + "%'" +
                " OR quote LIKE '%" + search_string + "%'" +
                " OR tags LIKE '%" + search_string + "%'";
            Session.set("query", modifiedQuery);
        } else {
            Session.set("query", Session.get("defaultQuery"));
        }
    }
})