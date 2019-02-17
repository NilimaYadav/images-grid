import Ember from 'ember';
const{ Route,set}=Ember;

export default Route.extend({
	model() {		
		return this.store.findAll('photo');
	},

	setupController(controller,model){
		set(controller,'photos',model);
	},
	actions: {
        move(photo){
        	debugger
            this.get('router').transitionTo('photos.show', photo.get('id'));
        }
    }


});
