//function to pull zillow ID's under shelly's MLS #

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
		'X-RapidAPI-Key': '7d2bcc6c1cmsh1f2acfdcd0d6ad3p1cb80ejsn94f2d95a8d03'
	}
};

fetch('https://realty-in-us.p.rapidapi.com/properties/list-by-mls?mls_id=1813680&limit=200&offset=0&sort=price_low', options)
	.then(response => 
        response.json())
        .then(response => console.log(response.listings[0]))
        .catch(err => console.error(err));
