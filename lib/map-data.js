function createMap(data) {
    
    var mymap = L.map('mapid').setView([30.31, -97.743], 11);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoicmpoZW5uZXNzeTE1IiwiYSI6ImNpeG0xN2FrYzAwYW4ycWxlbmZicGVxbHkifQ.XpxhhKIDvEdlZvcsCupIsQ'
    }).addTo(mymap);
    
    // fitler to contain only most recent hour of data    
    var updated_datetime = new Date(data[0]['published_date'])
    updated_datetime.setHours(updated_datetime.getHours() - 24);

    data = data.filter(function(trip) {
        return new Date(trip['published_date']) >= updated_datetime
    });

    // Visualize traffic incidents
    for (var i = 0; i < data.length; i++) {
        L.circleMarker([data[i]['latitude'], data[i]['longitude']],
            {
                radius: 7,
                color: "#EA1D5D",
                stroke: false,
                fillOpacity: .8,

            }).bindTooltip(data[i]['issue_reported']).addTo(mymap)
    };
};