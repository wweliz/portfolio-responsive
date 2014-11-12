/* global _, Backbone */
'use strict';

// WORK VIEW /////////////////////////////////////////////////////////////
var WorkView = Backbone.View.extend({

	className : 'project-target',
	workTemplate: _.template($('.work-template').text()),

	events: {
		'mouseover #miceonmain'			: 'showMiceSummary',
		'mouseover #githubrebuild'	: 'showGithubSummary',
		'mouseover #rolldice'				: 'showDiceSummary',
		'mouseover #eskimo'					: 'showEskimoSummary',
		'mouseover #chomarat'				: 'showChomaratSummary',
		'mouseover #hoowaki'				: 'showHoowakiSummary',
		'mouseover #photography'		: 'showPhotoSummary',
		'mouseover #fluor'					: 'showFluorSummary',
		'mouseover #scansource'			: 'showScanSourceSummary',
	},

	initialize: function(){
		//appends work-view div with contents of the work-template
		$('.work-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.workTemplate);
		return this;
	},

	showMiceSummary: function(){
		$('.project-text').html('Mice On Main is a webapp that utilizes the HTML5 geolocation API to help visitors to Greenville find the mice sculptures hidden along Main Street.');
	},

	showGithubSummary: function(){
		$('.project-text').html('I rebuilt my GitHub profile page as a way to practice structuring my HTML, styling with CSS, and pulling data from public APIs.');
	},

	showDiceSummary: function(){
		$('.project-text').html('As part of a team project at the Iron Yard, we created a vitual dice roller that allows you to choose both the number of dice and the number of sides on each die.');
	},

	showEskimoSummary: function(){
		$('.project-text').html('The ETB is the only theatre in Berlin that presents plays exclusively in English; I illustrated this poster for the play Prophecy of a Nameless Eskimo.');
	},

	showChomaratSummary: function(){
		$('.project-text').html('Headquarted in Le Cheylard, France, Chomarat\'s American base of operations is located in Anderson, SC. After a major expansion in 2009, the company needed help implementing their new brand identity in the American market.');
	},

	showHoowakiSummary: function(){
		$('.project-text').html('Hoowaki is a micro technology startup based in Clemson, SC. I worked with the company\'s founders to develop the brand identity and style guide.');
	},

	showPhotoSummary: function(){
		$('.project-text').html('I like taking pictures to document my travels at home and abroad. These are a few of my favorites.');
	},

	showFluorSummary: function(){
		$('.project-text').html('Fluor Government Group executes contracts for numerous goverment organizations; they needed a flexible, concise marketing piece with a list of the Technical Suppport Service organization\'s common offerings to hand out at trade shows or email to potential clients.');
	},

	showScanSourceSummary: function(){
		$('.project-text').html('ScanSource\'s product managers needed a quick reference for common marketing projects; this rate lists the basic elements of each project, as well as the cost to execute.');
	}

});