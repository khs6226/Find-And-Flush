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

     var equipment = (n) => {
      switch(n) {
        case true:
          n = "Yes";
          break;
        case false:
          n = "No";
    }    return n;
  };

    switch(soap) {
      case true:
        soap = "Yes";
        break;
      case false:
        soap = "No";
  };
    detail.innerHTML = "Name : " + name + "<br>" + 
                       "Address : " + address + "<br>" +
                       "Baby Friendly : " + equipment(BF) + "<br>" +
                       "Soap : " + equipment(soap) + "<br>" +
                       "dryer : " + equipment(dryer) + "<br>" +
                       "Toilet Paper : " + equipment(TP) + "<br>" +
                       "Paper Towel : " + equipment(PT) + "<br>";
  },
  
});
