var devil   = 'application/x-shockwave-flash',
    embeds  = document.getElementsByTagName('embed'),
    iframes = document.getElementsByTagName('iframe'),
    objects = document.getElementsByTagName('object'),
    skull   = false;

for (i = 0; i < embeds.length; i++) {
  embtype = embeds[i].getAttribute('type');
  if ( embtype === devil) {
    skull = true;
  }
}

for (i = 0; i < objects.length; i++) {
  objtype = objects[i].getAttribute('type');
  if ( objtype === devil) {
    skull = true;
  }
}

// sorta hacky case for iframe based le Goog ads
for (i = 0; i < iframes.length; i++) {
  frame = iframes[i].getAttribute('id');
  ifrid = frame.substring(0, 10);
  if ( ifrid === 'google_ads') {
    skull = true;
  }
}

function skullify() {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'http://media.brianshumate.com/flavicon/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
}

if (skull === true) {
  skullify();
}