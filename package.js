
Package.describe({
  name:"ramstein74:filepicker",
  summary: "upload file to FilePicker",
  version: "1.2.3",
  git: ""
});

Package.on_use(function (api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.3.0');
  api.use([
    'underscore',
    'templating',
    'handlebars']
  , 'client');

  api.add_files(['ramstein74_filepicker.js'],'client');
  api.export('loadFilePicker', 'client');
});