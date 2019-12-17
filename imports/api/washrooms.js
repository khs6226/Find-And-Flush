import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Washrooms = new Mongo.Collection('washrooms');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('washrooms', function tasksPublication() {
      return Washrooms.find();
    });
  }
  Meteor.methods({
    'washroom.detail'(id) {
      const washroomName = Washrooms.findOne(id).name;
      const ul = document.getElementById("detail");
      console.log(ul);
      console.log(Washrooms.findOne(id));
      ul.innerHTML = washroomName;
    }
  });
