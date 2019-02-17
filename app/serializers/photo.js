import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeResponse(store,primaryModelClass,payload,id,requestType)
	{
		payload={photos:payload};
		
		return this._super(store,primaryModelClass,payload,id,requestType);
	},
	normalizeSingleResponse(store,primaryModelClass,payload,id,requestType)
	{
	payload.photos.user=payload.photos.userId;
	return this._super(store,primaryModelClass,payload,id,requestType);

},
normalizeArrayResponse(store,primaryModelClass,payload,id,requestType)
{
payload.photos.forEach((photo)=>{
	photo.user=photo.userId;

});
return this._super(store,primaryModelClass,payload,id,requestType);
}
}); 
