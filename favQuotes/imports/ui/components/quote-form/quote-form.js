import './quote-form.html';

Template.quoteform.onRendered(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
})

Template.quoteform.events({
    "click #save-quote": (event) => {
        event.preventDefault();
        var source = $("#ip_title").val();
        var quote = $("#ta_quote").val();
        var tags = $("#ip_tags").val();

        var db = window.openDatabase("db_quotes", "1.0.0", "Quotes Database", 2 * 1024 * 1024);
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS tbl_quotes (title, quote, tags)');
        });
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO tbl_quotes (title, quote, tags) VALUES ("' + source + '", "' + quote + '","' +tags + '")');
        });
        $(".modal").modal("close");
    }
})