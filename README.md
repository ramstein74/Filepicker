Package to upload files File Picker

Currenty configured to take a photo


Example script
```javascript
if (Meteor.isClient) {
 loadFilePicker('your FilePicker Key');
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
```

In your html
```html
<head>
  <title>filepicker</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>

  {{> home}}
</body>

<template name="home">
<button id='fp'>{{filepickerUpload 'fp' 'here'}}</button>
<div id="here" style="color:yellow;border:1px solid black"></div>
</template>

```