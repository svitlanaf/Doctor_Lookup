export class DoctorSearch {
    getDoctor(locationLat, locationLng, range, query) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=${locationLat},${locationLng},${range}&limit=100&user_key=${process.env.exports.apiKey}`
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
