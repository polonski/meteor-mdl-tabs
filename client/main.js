import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.header.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.titleLabel = new ReactiveVar("RepKeeper");
  
});

Template.header.helpers({
  titleLabel() {
    return Template.instance().titleLabel.get();
  },
});

Template.header.events({
	
	  'click button'(event) {
		  
		console.log("a press");
	    // increment the counter when button is clicked
		  Template.instance("header").titleLabel.set("Moo");
		  
	    //instance.counter.set(instance.counter.get() + 1);
	  },
	  
	  


});

Template.tabs.events({
	
  'click a'(event) {
	  
	console.log("a press");
    // increment the counter when button is clicked
	Template.instance("header").titleLabel.set("Moo");
	  
    //instance.counter.set(instance.counter.get() + 1);
  },
  
});
