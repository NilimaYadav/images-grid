import Model from 'ember-data/model';
import DS from 'ember-data';
const{ attr ,hasMany} = DS;

export default Model.extend({

	title:attr('string'),
	url:attr('string'),
	thumbnailUrl:attr('string'),

	comments: hasMany('comments')
	
});
