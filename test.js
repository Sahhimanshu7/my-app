fetch("https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=Lego%20Star%20Wars&page=1&sortBy=best_match", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "axesso-walmart-data-service.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	response.json;
})
.then(data => {
    console.log(data);
})