/* global _, Backbone */
'use strict';

// MICE ON MAIN //////////////////////////////////////////////////////////
var MiceOnMainView = Backbone.View.extend({

	projectTemplate: _.template($('.miceonmain-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// GITHUB REBUILD ////////////////////////////////////////////////////////
var GitHubRebuildView = Backbone.View.extend({

	projectTemplate: _.template($('.githubrebuild-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// ROLL DICE /////////////////////////////////////////////////////////////
var RollDiceView = Backbone.View.extend({

	projectTemplate: _.template($('.rolldice-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// ESKIMO ////////////////////////////////////////////////////////////////
var EskimoView = Backbone.View.extend({

	projectTemplate: _.template($('.eskimo-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// CHOMARAT //////////////////////////////////////////////////////////////
var ChomaratView = Backbone.View.extend({

	projectTemplate: _.template($('.chomarat-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// HOOWAKI ///////////////////////////////////////////////////////////////
var HoowakiView = Backbone.View.extend({

	projectTemplate: _.template($('.hoowaki-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// PHOTOGRAPHY ///////////////////////////////////////////////////////////
var PhotographyView = Backbone.View.extend({

	projectTemplate: _.template($('.photography-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// FLUOR /////////////////////////////////////////////////////////////////
var FluorView = Backbone.View.extend({

	projectTemplate: _.template($('.fluor-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});

// SCANSOURCE ////////////////////////////////////////////////////////////
var ScansourceView = Backbone.View.extend({

	projectTemplate: _.template($('.scansource-template').text()),

	initialize: function(){
		//appends project-view div with contents of the project-template
		$('.project-view').append(this.el);
	},

	render: function(){
		this.$el.html(this.projectTemplate);
		return this;
	}

});