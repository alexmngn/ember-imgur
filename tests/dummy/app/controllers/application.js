/* global FileReader */

import Ember from 'ember';

export default Ember.Controller.extend({

	imgur: Ember.inject.service(),

	imagePostResult: null,

	imageGetValue: null,

	imageGetResult: null,

	actions: {
		imagePost() {
			const fileToLoad = Ember.$('#image-post')[0].files[0];
			const fileReader = new FileReader();
			fileReader.onload = ((fileLoadedEvent) => {
				var srcData = fileLoadedEvent.target.result.split(',')[1];
				this.get('imgur').imagePost(srcData).then((result) => {
					this.set('imagePostResult', 'Success! '+result.data.link+' <br><img src="'+result.data.link+'">');
				}).catch((result) => {
					this.set('imagePostResult', 'Error '+result.data.error);
				});
			});
			fileReader.readAsDataURL(fileToLoad);
		},

		imageGet() {
			this.get('imgur').imageGet(this.get('imageGetValue')).then((result) => {
				console.log(result);
				this.set('imageGetResult', 'Success! '+result.data.link+' <br><img src="'+result.data.link+'">');
			}).catch((result) => {
				this.set('imageGetResult', 'Error '+result.data.error);
			});
		}
	}
});
