Package to upload files File Picker

Currenty configured to take a photo


Example script
```javascript```javascript
if (Meteor.isClient) {
 loadFilePicker('your FilePicker Key');
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
```