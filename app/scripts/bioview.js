/* global _, Backbone */
'use strict';

// BIO VIEW //////////////////////////////////////////////////////////////
var BioView = Backbone.View.extend({
	className : 'bio',
	bioTemplate: _.template($('.bio-template').text()),

	initialize: function(){
		//appends bio-view div with contents of the bio-template
		$('.bio-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.bioTemplate);
		return this;
	}

});