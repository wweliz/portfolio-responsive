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

// FIT TEXT PLUGIN ///////////////////////////////////////////////////////
// FitText.js 1.2
// Copyright 2011, Dave Rupert http://daverupert.com

(function( $ ){
  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);
    });
  };
})( jQuery );