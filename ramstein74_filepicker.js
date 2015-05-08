loadFilePicker = function(key, callback){
  //todo - shift arguements to support just callback
  if(typeof filepicker === "undefined"){
    if(!key && Meteor.settings && Meteor.settings.public && Meteor.settings.public.filepicker && Meteor.settings.public.filepicker.key)
        key = Meteor.settings.public.filepicker.key;

    if(key){
        // Functions to run after the script tag has loaded
        var filepickerLoadCallback = function() {
          filepicker.setKey(key);

          if (Object.prototype.toString.call(callback) === "[object Function]")
            callback();
        };

        // If the script doesn't load
        var filepickerErrorCallback = function(error) {
          if(typeof console !== "undefined") {
            console.log(error);
          }
        };

        // Generate a script tag
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//api.filepicker.io/v1/filepicker.js";
        script.onload = filepickerLoadCallback;
        script.onerror = filepickerErrorCallback;

        // Load the script tag
        document.getElementsByTagName('head')[0].appendChild(script);
      
    }else{
      if(typeof console !== "undefined") {
        console.log("filepicker-plus - tried to load but key not supplied");
      }
    }
  }
};

UI.registerHelper("filepickerUpload", function(btn,toId) {


       $(document).ready(function(){
       	 document.getElementById(btn).onclick = function(){
                filepicker.pick({
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:[ 'WEBCAM'],
  },function(fpfile) {
                    console.log(fpfile.url);
                    var img = document.createElement("img");
                        img.setAttribute("src", fpfile.url);
                        img.setAttribute("alt", fpfile.filename);
                        img.setAttribute("title", fpfile.filename);
                        jQuery("#"+toId).append(img);
                });
            };

       })
           
})