     var myStyle = [
        {
          featureType: "administrative.country",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.province",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "water",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];

     var map = new google.maps.Map(document.getElementById('map'), {
       mapTypeControlOptions: {
         mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
       },
       center: {lat: 40.8054491, lng: -73.9654415},
       zoom: 8,
       mapTypeId: 'mystyle'
     });

     map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
   
   


     //extra//

   //   var marker = new google.maps.Marker({
   // position: {lat: 40.8054491, lng: -73.9654415},
   // map: map,
   // title: 'Monks Café'
  //});
   // }   

    //var map = new google.maps.Map(document.getElementById('map'), {
      // mapTypeControlOptions: {
      //   mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
      // },
       //center: new google.maps.LatLng(41, 0),
       //zoom: 3,
      // mapTypeId: 'mystyle'
     //});

    // map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
   



