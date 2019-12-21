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
    const cursor = Washrooms.findOne(id);
    const detail = document.getElementById("detail");
    
    var name = cursor.name;
    var address = cursor.address;
    var soap = cursor.soap;
    var TP = cursor.toiletPaper;
    var BF = cursor.babyFriendly;
    var dryer = cursor.dryer;
    var PT = cursor.paperTowel;

    const equipment = (name) => {
      switch(name) {
        case true:
          name = "Yes";
          break;
        case false:
          name = "No";
    }};

    equipment(BF);
    equipment(soap);
    equipment(TP);
    equipment(dryer);
    equipment(PT);
    
    detail.innerHTML = "Name : " + name + "<br>" + 
                       "Address : " + address + "<br>" +
                       "Baby Friendly : " + BF + "<br>" +
                       "Soap : " + soap + "<br>" +
                       "dryer : " + dryer + "<br>" +
                       "Toilet Paper : " + TP + "<br>" +
                       "Paper Towel : " + PT + "<br>";
  },
  
});
