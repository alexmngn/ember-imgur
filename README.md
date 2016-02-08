# Ember-imgur [![Build Status](https://travis-ci.org/alexmngn/ember-imgur.png?branch=master)](https://travis-ci.org/alexmngn/ember-imgur)

This Ember Service allows you to upload and get images from Imgur.

## Installation

```
ember install ember-imgur
```

## How to use it

Simply inject the service in your controller or component.

```

export default Ember.Controller.extend({

	imgur: Ember.inject.service()

});

```

### Post an image

```
//imageData is the base64 representation of the image. It shouldn't include the "data:image/png;base64," prefix. You can also pass an URL.

this.get('imgur').imagePost(imageData).then((result) => {
	//Result from imgur
}).catch((result) => {
	//Error
});
```

### Get an image

```
this.get('imgur').imageGet(imageId).then((result) => {
	//Result from imgur
}).catch((result) => {
	//Error
});
```

Feel free to implement additional features to this addon.
