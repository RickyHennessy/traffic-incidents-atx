var consumer = new soda.Consumer('data.austintexas.gov');
consumer.query()
    .withDataset('r3af-2r8x')
    .select(['published_date',
        'latitude',
        'longitude',
        'issue_reported'])
    .order('published_date DESC')
    .limit(100)
    .getRows()
    .on('success', function (rows) { createMap(rows); })
    .on('error', function (error) { console.error(error); });