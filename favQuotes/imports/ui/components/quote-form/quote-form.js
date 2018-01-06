import './quote-form.html';

Template.quoteform.onRendered(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
})

Template.quoteform.events({
    "click #save-quote": (event)=>{
        event.preventDefault();
        var source = $("#ip_title").val();
        var quote = $("#ta_quote").val();
        var tags = $("#ip_tags").val();
        tags = tags.split(",");
        for(i in tags){
            tags[i] = tags[i].trim();
        }
        Meteor.call("quotes.insert", source, quote, tags, function(error, success){
            if(error){
                console.error(error);
            }else{
                console.log(success);
                $('.modal').modal("close");
            }
        });
    }
})