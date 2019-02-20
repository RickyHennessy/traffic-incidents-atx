var consumer = new soda.Consumer('data.austintexas.gov');
var query = consumer.query()
    .withDataset('r3af-2r8x')
    .select(['published_date',
        'latitude',
        'longitude',
        'issue_reported'])
    .order('published_date DESC')
    .limit(100)

$.ajax({
    url: query.getURL(),
    jsonp: "$jsonp",
}).done(function(data) {
    createMap(data);
});