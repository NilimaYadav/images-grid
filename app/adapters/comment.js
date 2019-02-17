import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	pathForType() {
		return 'comment';
	}
});
