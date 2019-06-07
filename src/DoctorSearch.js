export class DoctorSearch {
    getDoctor(query) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=47.609722,-122.333056,100&skip=2&limit=10&user_key=${process.env.exports.apiKey}`
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
