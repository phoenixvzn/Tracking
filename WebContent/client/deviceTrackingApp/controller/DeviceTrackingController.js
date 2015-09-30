/**
 * 
 */
Ext.define("DeviceTrackingApp.controller.DeviceTrackingController",{
	extend:"Ext.app.Controller",
	views : ["DeviceTrackingView"],
	init : function(){
		this.control({
				'[itemId=History]':{
					click : function(historyBtn){
						var mapWindow = Ext.create('Ext.window.Window',{
							height : 500,
							width : 500,
							modal : true,
							layout : 'fit',
							title : 'History',
							items:[
								{
									xtype : 'container',
									layout : 'fit',
									items : {   xtype: 'gmappanel',
											gmapType: 'map',
											itemId : 'dtMap',
											center: {
												//geoCodeAddr: "Chennai",
												marker: {
													title: 'Chicago, IL'
												}
											}, 
											mapOptions : {
												mapTypeId: google.maps.MapTypeId.ROADMAP
											},
											listeners : {
												mapready : function(ux,mapObj){
													winMapCtrl = mapObj;
													
													var request = {
																			
														  origin: "Chicago, IL",
														  destination: "Los Angeles, CA",
														  waypoints: [
															{
															  location:"Joplin, MO",
															  stopover:false
															},{
															  location:"Oklahoma City, OK",
															  stopover:true
															}],
														  provideRouteAlternatives: false,
														  travelMode: google.maps.TravelMode.DRIVING,
														  unitSystem: google.maps.UnitSystem.IMPERIAL

													};
													

													var directionsService = new google.maps.DirectionsService();
													var directionsDisplay = new google.maps.DirectionsRenderer();
													directionsDisplay.setMap(mapObj);
													
													directionsService.route(request, function(result, status) {
														if (status == google.maps.DirectionsStatus.OK) {
															directionsDisplay.setDirections(result);
														}
													});
													
													
													

												}
											}
										  }
									
								}
							]
							
						});
						mapWindow.show();
					}
				},
				'[itemId=device1]':{
					click : function(btn){
						var x = 40.7127;
						var y = -74.0059;
						this.setMapPosition(x,y);
					}
				},
				'[itemId=device2]':{
					click : function(btn){
						var x = 41.8369;
						var y = -87.6847;
						this.setMapPosition(x,y);
					}
				},
				'[itemId=device3]':{
					click : function(btn){
						var x = 34.0500;
						var y = -118.2500;
						this.setMapPosition(x,y);
					}
				},
				'[itemId=device4]':{
					click : function(btn){
						var x = 38.9047;
						var y = -77.0164;
						this.setMapPosition(x,y);
					}
				},'[itemId=device5]':{
					click : function(btn){
						var x = 35.5000;
						var y = -98.0000;
						this.setMapPosition(x,y);
					}
				}
		});
	},
	setMapPosition : function(x,y){
		var myCenter = new google.maps.LatLng(x,y);
		var marker = new google.maps.Marker({
		  position: myCenter,
		  animation : google.maps.Animation.BOUNCE,
		  title:'Click to zoom'
		  });
		marker.setMap(mapCtrl);
		mapCtrl.setCenter(marker.getPosition());
		
		/* setInterval(function(){
			x = x+1;
			y = y+1;
			
			myCenter = new google.maps.LatLng(x,y);
			marker = new google.maps.Marker({
			  position: myCenter,
			  title:'Click to zoom'
			  });
			marker.setMap(mapCtrl);
			mapCtrl.setCenter(marker.getPosition()); 
			
			//marker.setPosition(x,y);
			
		},20000); */
	}
	
});