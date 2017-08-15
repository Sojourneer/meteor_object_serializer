// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by serializer.js.
import { name as packageName } from "meteor/serializer";

// Write your tests here!
// Here is an example.
Tinytest.add('serializer - example', function (test) {
  test.equal(packageName, "serializer");
});
