import Ember from 'ember';
import config from 'ember-get-config';

const { imgur } = config;
const { RSVP } = Ember;

export default Ember.Service.extend({

	imgurApiUrl: 'https://api.imgur.com/3/',

	imagePost(image, album, type, name, title, description) {
		return this.ajaxCall({
			data: {
				image,
				album,
				type,
				name,
				title,
				description
			},
			path: 'image/',
			type: 'POST'
		});
	},

	imageGet(id) {
		return this.ajaxCall({
			path: 'image/'+id,
			type: 'GET'
		});
	},
	
	ajaxCall(params) {
		return new RSVP.Promise((resolve, reject) => {
			Ember.$.ajax({
				headers: {
					'Authorization': 'Client-ID '+imgur.clientId
				},
				data: params.data,
				url: this.get('imgurApiUrl')+params.path,
				type: params.type,
				success: (data) => {
					resolve(data);
				},
				error: (data) => {
					reject(data.responseJSON);
				}
			});
		});
	}

});
