/**
 * 
 */
Ext.define("DeviceTrackingApp.view.DeviceTrackingView",{
	//extend : "Ext.panel.Panel",
	extend : 'Ext.container.Container',
	layout : "anchor",
	style : "background-color:white",
	title : 'Tracker',
	items : [
	        {
	        	 xtype : "container",
	        	 //html : "header",
	        	 //region : "north",
	        	 margin : '5 5 5 10',
	        	 //height : "8%",
	        	 //width : "100%",
				 anchor : "100% 7%",
				 style : 'background-color:#6688FF',
	        	 layout : {
	        		 type : 'hbox'
	        	 },
				 items : [
	        	      {
	        	    	  xtype : 'image',
						  margin : '5 5 5 10',
	        	    	  src : '../client/extjs/build/images/logo.png'
	        	      },
					  /* {
						  
						  xtype : 'container',
						  width : '50%',
						  items : [
							{
									xtype : 'toolbar',
									//height : '10%',
									items: [
										{
											text: 'Button'
										},
										{
											xtype: 'splitbutton',
											text : 'Split Button'
										},
										'->',
										{
											xtype    : 'textfield',
											name     : 'field1',
											emptyText: 'enter search term'
										}
									]
	        	
								}
						  ]
					  }, */
	        	      {
	        	    	  xtype : 'container',
	        	    	  width : '80%',
	        	    	  layout : {
	        	    		  type : 'hbox',
	        	    		  pack : 'end'
	        	    	  },
	        	    	  items : [
	        	    	           {
	        	    	        	   xtype : 'label',
	        	    	        	   text : userName,
	        	    	        	   margin : '15 5 5 5',
									   style:'color:white;font-weight:bold'
	        	    	           },
	        	    	           /* {
	        	    	        	   xtype : 'label',
	        	    	        	   text : 'Logout',
	        	    	        	   margin : '15 5 5 25',
									   style:'color:white;font-weight:bold'
	        	    	        		   
	        	    	           } */ 
								   {
										xtype: 'component',
										autoEl: {
											tag: 'a',
											href: MAIN_URI+'/app/logout',
											html: "Logout"
										},
										margin : '15 5 5 25',
										style:'color:white;font-weight:bold',
										listeners: {
											click: {
												element: 'el', //bind to the underlying el property on the panel
												fn: function(){  }
											}
										}

									}	 
	        	    	  ]
	        	      }
	        	 ]
	        	 
	         }, 
			 {
				 xtype : "container",
				 anchor : "82% 5%",
				 layout : {
					 type : 'hbox',
					 pack : 'end'
				 },
				 items :[
					{
							xtype : 'button',
							text : 'History',
							margin : '5 0 5 5',
							itemId : 'History',
							width : 100
						 }/*,
						 {
							xtype : 'button',
							text : 'From Previous',
							margin : '5 5 5 5',
							itemId : 'history2',
							width : 120
							
						
						 }*/
				 ]
			 },
			 {
				 xtype : "container",
				anchor : "100% 85%",
				itemId : 'dtMapPanel',
				layout : 'hbox',
				items : [
					{
	        	 xtype : "container",
	        	 //html : "Test this now",
	        	 margin : '10 5 5 10',
	        	 //region : "center",
	        	 width : "85%",
				 height : "100%",
	        	 layout : 'fit',
	        	 style : 'border : 1px solid black',
	        	 items :{/*   xtype: 'gmappanel',
      				        gmapType: 'map',
							itemId : 'dtMap',
      				        center: {
      				            geoCodeAddr: "Newyork",
      				            marker: {
      				                title: 'Newyork',
									animation : google.maps.Animation.BOUNCE
      				            }
      				        },
      				        mapOptions : {
      				            mapTypeId: google.maps.MapTypeId.ROADMAP
      				        },
							listeners : {
								mapready : function(ux,mapObj){
									mapCtrl = mapObj;
								}
							}
	        	          */
	        		 xtype: 'gmappanel',
				        gmapType: 'map',
						itemId : 'dtMap',
				        center: {
				            geoCodeAddr: "Newyork"
				            /* marker: {
				                title: 'Newyork',
								animation : google.maps.Animation.BOUNCE
				            } */
				        },
				        mapOptions : {
				            mapTypeId: google.maps.MapTypeId.ROADMAP
				        },
						listeners : {
							mapready : function(ux,mapObj){
								mapCtrl = mapObj;
								var x = 40.7127;
								var y = -74.0059;
								var myCenter = new google.maps.LatLng(x,y);
								var marker = new google.maps.Marker({
									position: myCenter,
									animation : google.maps.Animation.BOUNCE,
									title:'Click to zoom'
								});
								//}
								
								marker.setMap(mapCtrl);
								mapCtrl.setCenter(marker.getPosition());
								ux.up('[itemId=deviceTrackingParentContainer]').marker = marker;
								
							}
						}
	        	 }
	        	 
	         },
	         {
	        	 xtype : "panel",
	        	 //html : "navigator",
	        	 margin : '10 5 5 5',
	        	 //region : "east",
	        		width : "12%",
					height : "100%",
					frame:false,
					title : '',
					border:false,
					style:'background-color:#f3f3f3',
					bodyStyle: 'background-color:#f3f3f3;',
					 layout : {type :'vbox',pack : 'start'},
					 items : [
						{
							xtype : 'panel',
							margin : '5 5 5 5',
							html:"<div style='width:120px;padding-top:5px;height:30px;background-color:#00CDFF;color:white;font-weight:bold;text-align:center'>Devices</div>",
							frame:false,
							border:false,
						 },
						 {
							xtype : 'button',
							text : 'My Car',
							margin : '5 5 5 5',
							itemId : 'device1',
							width : 120
						 },
						 {
							xtype : 'button',
							text : 'My Bike',
							margin : '5 5 5 5',
							itemId : 'device2',
							width : 120
							
						
						 },
						 {
							xtype : 'button',
							text : 'My Cab',
							margin : '5 5 5 5',
							itemId : 'device3',
							width : 120
							
						 },{
							xtype : 'button',
							text : 'Transport',
							margin : '5 5 5 5',
							itemId : 'device4',
							width : 120
						
						 },
						 {
							xtype : 'button',
							text : 'Technician',
							margin : '5 5 5 5',
							itemId : 'device5',
							style : {
								background : 'green'
							},
							width : 120
						
						 }
					 
					 ]
	        		 
	         } 
				
				]
			 
			 } 
	 ]
});