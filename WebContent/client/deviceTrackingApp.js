/**
 * 
 */
Ext.Loader.setConfig({enabled:true});
Ext.application({
	name:"DeviceTrackingApp",
	appFolder:"../client/deviceTrackingApp",
	controllers : "DeviceTrackingController",
	launch : function(){
		
		var deviceTrackingView = Ext.create("DeviceTrackingApp.view.DeviceTrackingView",{
			itemId : 'deviceTrackingParentContainer'
		});
		
		Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			layout : 'fit',
			items : [deviceTrackingView]
		});
		
	}
});