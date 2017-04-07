import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'zone.js';
import 'reflect-metadata';

import './main.html';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from 'meteor/meteor';
import { AppModule } from './imports/app/app.module';


Meteor.startup(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
