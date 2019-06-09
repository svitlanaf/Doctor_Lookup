export class LocationSearch {
    getLocation(place) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${process.env.place.apiKey}`
            request.onload = function() {
                if (this.status == 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }
}
