// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by serializer.js.
//import { name as packageName } from "sojourneer:object-serializer";
var P = Package["sojourneer:object-serializer"];
var Serializer = P.Serializer;

// Write your tests here!
// Here is an example.


Tinytest.add('serializer - package name', function (test) {
  test.equal(P.name, "object-serializer");
});

Tinytest.add('serializer - number', function (test) {
  var s = Serializer.stringify(123);
  test.equal(Serializer.parse(s), 123);
});

Tinytest.add('serializer - text', function (test) {
  var s = Serializer.stringify("abcd");
  test.equal(Serializer.parse(s), "abcd");
});

