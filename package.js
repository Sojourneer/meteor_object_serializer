Package.describe({
  name: 'sojourneer:object-serializer',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'JavaScript serializer / deserializer that can serialize and deserialize custom classes.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Sojourneer/meteor_object_serializer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('serializer.js');
  api.export("Serializer", ['client','server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use(['practicalmeteor:munit']);
  api.use('sojourneer:object-serializer');
  api.mainModule('serializer-tests.js');
  api.mainModule('serializer-munit-tests.js');
});
