/* global _, Backbone */
'use strict';

// RESUME VIEW ///////////////////////////////////////////////////////////
var ResumeView = Backbone.View.extend({

	resumeTemplate: _.template($('.resume-template').text()),

	events: {
		'click .show-highlights-btn'	:	'showHighlights',
		'click .show-resume-btn'			: 'showResume'
	},

	initialize: function(){
		//appends resume-view div with contents of the resume-template
		$('.resume-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.resumeTemplate);
		this.showInitial();
		return this;
	},

	showInitial: function(){
		$('.show-highlights-btn').hide();
		$('.sub-content-left').hide();
		$('.sub-content-right').hide();
	},

	showHighlights: function(){
		console.log('show highlights button clicked');
		$('.show-highlights-btn').hide();
		$('.sub-content-left').hide('slow');
		$('.show-resume-btn').toggle();
		$('.sub-content-right').hide('slow');
		$('.initial-content').toggle('slow');
	},

	showResume: function(){
		console.log('show resume button clicked');
		$('.show-resume-btn').hide();
		$('.initial-content').hide();
		$('.show-highlights-btn').toggle();
		$('.sub-content-left').toggle('slow');
		$('.sub-content-right').toggle('slow');
	}

});