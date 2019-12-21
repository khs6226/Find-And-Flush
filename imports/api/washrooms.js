import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Washrooms = new Mongo.Collection("washrooms");
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("washrooms", function tasksPublication() {
    return Washrooms.find();
  });
}

Meteor.methods({
  detail(id) {
    const washroomName = Washrooms.findOne(id).name;
    const washroomAddress = Washrooms.findOne(id).address;
    const ul = document.getElementById("detail");
    console.log(ul);
    console.log(Washrooms.findOne(id));
    ul.innerHTML = washroomName + " : " + washroomAddress;
    return Washrooms.findOne(id);
  },
  reveiw(id) {
    const washroomName = Washrooms.findOne(id).name;

    const reviews = document.getElementById("reviewContainer");
    reviews.innerHtml = washroomName;
  }
});
