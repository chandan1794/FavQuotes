import './tags.html';

Template.tags.helpers({
	tag: function () {
		tags = this.data.split(",");
		for (i in tags) {
		    tags[i] = tags[i].trim();
		}
		return tags;
	}
})