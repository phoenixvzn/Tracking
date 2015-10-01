/**
 * 
 */
Ext.define("DeviceTrackingApp.controller.DeviceTrackingController",{
	extend:"Ext.app.Controller",
	views : ["DeviceTrackingView"],
	init : function(){
		this.markers = [];
		this.control({
				'[itemId=History]':{
					click : function(historyBtn){
						var mapWindow = Ext.create('Ext.window.Window',{
							height : 700,
							width : 700,
							modal : true,
							layout : 'anchor',
							title : 'History',
							items:[
								{
									xtype : 'container',
									anchor : '100% 80%',
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
															  stopover:true
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
									
								},
								{
									xtype : 'grid',
									anchor : '100% 20%',
									columns : [{text:'Indicator',dataIndex : 'indicator',width:100,align:'center'},
									           {text:'Location',dataIndex:'loc',width:300,align:'center'},
									           {text:'Date',dataIndex:'time',width:260,align:'center'}],
									store : Ext.create('Ext.data.Store',{
										fields : ['indicator','loc','time'],
										data : [{indicator : 'A', loc : 'Chicago', time : '28/09/2015'},
										        {indicator : 'B', loc : 'Joplin', time : '29/09/2015'},
										        {indicator : 'C', loc : 'Oklahoma City', time : '30/09/2015'},
										        {indicator : 'D', loc : 'Los Angeles', time : '01/10/2015'}]
									})
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
						this.setMapPosition(x,y,btn);
					}
				},
				'[itemId=device2]':{
					click : function(btn){
						var x = 41.8369;
						var y = -87.6847;
						this.setMapPosition(x,y,btn);
					}
				},
				'[itemId=device3]':{
					click : function(btn){
						var x = 34.0522342;
						var y = -118.2436849;
						this.setMapPosition(x,y,btn);
					}
				},
				'[itemId=device4]':{
					click : function(btn){
						var x = 38.9047;
						var y = -77.0164;
						this.setMapPosition(x,y,btn);
					}
				},'[itemId=device5]':{
					click : function(btn){
						var x = 35.5000;
						var y = -98.0000;
						this.setMapPosition(x,y,btn);
					}
				}
		});
	},
	setMapPosition : function(x,y,btn){
		this.clearMarkers(btn);
		
		var myCenter = new google.maps.LatLng(x,y);
		//if(this.marker == null || this.marker == undefined){
			
		var markerOptions = {
			position: myCenter,
			title:'Click to zoom'
		};
		
		if(btn.itemId !='device3'){
			markerOptions.animation = google.maps.Animation.BOUNCE;
		}
			
		var marker = new google.maps.Marker(markerOptions);
		//}
		
		marker.setMap(mapCtrl);
		mapCtrl.setCenter(marker.getPosition());
		
		var markers = this.markers;
		
		markers.push(marker);
		
		if(btn.itemId == 'device3'){
			mapCtrl.setZoom(16);
			var j = 1;
			setTimeout(function(){
				setInterval(function(){
					if(j<5){
						
						var latlng = getLatLong(j);
						j++;
						
						//this.clearMarkers(btn);
						for(var i=0;i<markers.length;i++){
							markers[i].setMap(null);
						}
						
						myCenter = new google.maps.LatLng(latlng.x,latlng.y);
						
						marker = new google.maps.Marker({
						  position: myCenter,
						  title:'Click to zoom'
						  //icon : '../client/extjs/build/images/blueicon.png'
						});
						
						marker.setMap(mapCtrl);
						markers.push(marker);
						
						
						//mapCtrl.setZoom(10);
						
						//mapCtrl.setCenter(marker.getPosition()); 
						
						//marker.setPosition(x,y);
						
						if(j==5){
							/* var request = {
								  origin: "260 S Main St, Los Angeles, CA 90012, USA",
								  destination: "652 S Main St, Los Angeles, CA 90014, USA",
								  waypoints: [
									{
									  location:"432 S Main St, Los Angeles, CA 90013, USA",
									  stopover:false
									},
									{
									  location:"510 S Main St, Los Angeles, CA 90013, USA",
									  stopover:false
									},
									{
									  location:"560 S Main St, Los Angeles, CA 90013, USA",
									  stopover:false
									}
									
								],
								  optimizeWaypoints : true,
								  provideRouteAlternatives: false,
								  travelMode: google.maps.TravelMode.WALKING,
								  unitSystem: google.maps.UnitSystem.IMPERIAL

							};
							

							var directionsService = new google.maps.DirectionsService();
							var directionsDisplay = new google.maps.DirectionsRenderer();
							directionsDisplay.setMap(mapCtrl);
							
							directionsService.route(request, function(result, status) {
								if (status == google.maps.DirectionsStatus.OK) {
									directionsDisplay.setDirections(result);
								}
							}); */
						}
					}
				},1000);
			},5000);
			
			function getLatLong(a){
				var latlong = {};
				
				switch(a){
					case  1:
						latlong.x = 34.0509633657928;
						latlong.y = -118.24421710931347;
						break;
					case 2 :
						latlong.x = 34.04957662873767;
						latlong.y = -118.24563331567333;
						break;
					case  3:
						latlong.x = 34.04744314263364;
						latlong.y = -118.24756450616405;
						break;
					case  4:
						latlong.x = 34.04630526153761;
						latlong.y = -118.24885196518153;
						break;
					case  5:
						latlong.x = 34.0439227732906;
						latlong.y = -118.2509548170492;
						break;
				}
				return latlong;
			};
			
			
		}
	},
	clearMarkers : function(btn){
		for(var i=0;i<this.markers.length;i++){
			this.markers[i].setMap(null);
		}
		var deviceTrackingView = btn.up('[itemId=deviceTrackingParentContainer]');
		
		if(deviceTrackingView!=null && deviceTrackingView!=undefined
			&& deviceTrackingView.marker!=null && deviceTrackingView.marker!=undefined){
			deviceTrackingView.marker.setMap(null);
		}
	}
	
});