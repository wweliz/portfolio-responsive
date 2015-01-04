/* global Backbone, BioView, ResumeView, MiceOnMainView, GitHubRebuildView, RollDiceView, EskimoView, ChomaratView, HoowakiView, PhotographyView, FluorView, ScansourceView, WorkView,  */
'use strict';

// THE APP ROUTER ////////////////////////////////////////////////////////
var AppRouter = Backbone.Router.extend({
	routes: {
		//URL to match	//function called when the hash matches
		''												: 'renderBioView',				//	url/#
		'resume'									: 'renderResumeView',			//	url/#resume
		'portfolio'								: 'renderWorkView',				//	url/#portfolio
		// 'work/:id'							: 'renderProjectView',		//	url/#portfolio/projectid
		'portfolio/miceonmain'		: 'renderMiceOnMain',			//	url/#portfolio/miceonmain		
		'portfolio/githubrebuild'	: 'renderGitHubRebuild',	//	url/#portfolio/githubrebuild
		'portfolio/rolldice'			: 'renderRollDice',				//	url/#portfolio/rolldice
		'portfolio/eskimo'				: 'renderEskimo',					//	url/#portfolio/eskimo
		'portfolio/chomarat'			: 'renderChomarat',				//	url/#portfolio/chomarat
		'portfolio/hoowaki'				: 'renderHoowaki',				//	url/#portfolio/hoowaki
		'portfolio/photography'		: 'renderPhotography',		//	url/#portfolio/photography
		'portfolio/fluor'					: 'renderFluor',					//	url/#portfolio/fluor
		'portfolio/scansource'		: 'renderScansource',			//	url/#portfolio/scansource
	},

	initialize: function(){
		this.currentView = null;
	},

  renderBioView: function(){
  	this.swap( new BioView() );
  },

  renderResumeView: function(){
  	this.swap( new ResumeView() );
  },

  renderWorkView: function(){
  	this.swap( new WorkView() );
  },

  // renderProjectView: function(id){
  	// var project = projectCollection.find(id);
  	// this.swap( new ProjectView( {model: projectArray} ) );

  	//var projects = new projectCollection(projectArray);
  // },

  renderMiceOnMain: function(){
  	this.swap( new MiceOnMainView() );
  },

  renderGitHubRebuild: function(){
  	this.swap( new GitHubRebuildView() );
  },

  renderRollDice: function(){
  	this.swap( new RollDiceView() );
  },

  renderEskimo: function(){
  	this.swap( new EskimoView() );
  },

  renderChomarat: function(){
  	this.swap( new ChomaratView() );
  },

  renderHoowaki: function(){
  	this.swap( new HoowakiView() );
  },

  renderPhotography: function(){
  	this.swap( new PhotographyView() );
  },

  renderFluor: function(){
  	this.swap( new FluorView() );
  },

  renderScansource: function(){
  	this.swap( new ScansourceView() );
  },

  swap: function(view){
    if (this.currentView) this.currentView.remove();
    this.currentView = view;
    this.currentView.render();
  }

});

// INSTANTIATING THE ROUTER //////////////////////////////////////////////
new AppRouter();
Backbone.history.start();