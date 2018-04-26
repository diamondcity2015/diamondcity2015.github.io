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
       center: new google.maps.LatLng(41, 0),
       zoom: 3,
       mapTypeId: 'mystyle'
     });

     map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
   