import { Mongo } from 'meteor/mongo';

export const Washrooms = new Mongo.Collection('washrooms');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('washrooms', function tasksPublication() {
      return Washrooms.find();
    });
  }