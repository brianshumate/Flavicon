var flav_urlBarListener = {
  QueryInterface: function(aIID)
  {
   if (aIID.equals(Components.interfaces.nsIWebProgressListener) ||
       aIID.equals(Components.interfaces.nsISupportsWeakReference) ||
       aIID.equals(Components.interfaces.nsISupports))
     return this;
   throw Components.results.NS_NOINTERFACE;
  },

  onLocationChange: function(aProgress, aRequest, aURI)
  {
    flavicon.processNewURL(aURI);
  },

  onStateChange: function(a, b, c, d) {},
  onProgressChange: function(a, b, c, d, e, f) {},
  onStatusChange: function(a, b, c, d) {},
  onSecurityChange: function(a, b, c) {}
};

var flavicon = {
  oldURL: null,
  
  init: function() {
    // Listen for webpage loads
    gBrowser.addProgressListener(flav_urlBarListener,
        Components.interfaces.nsIWebProgress.NOTIFY_LOCATION);
  },
  
  uninit: function() {
    alert('UNINIT CALLED');
    window.addEventListener("load", function() { flavicon.init(); }, false);

    var flavicon = {
      init: function() {
      console.log('flavicon main function init');  
        var appcontent = document.getElementById("appcontent");   // browser
        if(appcontent)
          appcontent.addEventListener("DOMContentLoaded", flavicon.onPageLoad, true);
      },

      onPageLoad: function(aEvent) {
        var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
    
    gBrowser.removeProgressListener(flav_urlBarListener);
  },

  processNewURL: function(aURI) {
    if (aURI.spec == this.oldURL)
      return;
    
    // now we know the url is new...
    //alert(aURI.spec);
    this.oldURL = aURI.spec;
  }
};

window.addEventListener("load", function() {flavicon.init()}, false);
window.addEventListener("unload", function() {flavicon.uninit()}, false);