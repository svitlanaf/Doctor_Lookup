import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './DoctorSearch.js';

$(document).ready(function() {
    $('#userInput').submit(function(e) {
       e.preventDefault();
       let query = $('#query').val();
       $('#query').val("");
       let newDoctorSearch = new DoctorSearch();
       
       let promise = newDoctorSearch.getDoctor(query);
       promise.then(function(response) {
           let body = JSON.parse(response);
           for(let i= 0; i<body.data.length; i++) {
               if (body.data[i].practices[0].accepts_new_patients == true) {
                   $('.searchResults').append("<li>"  + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + " " + body.data[i].specialties[0].actor + " " + body.data[i].practices[0].phones[0].number + body.data[i].practices[0].website + "This doctor is accepting new patients." + "</li>");
                } else {
                    $('.searchResults').append("<li>"  + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + " " + body.data[i].specialties[0].actor + " " + body.data[i].practices[0].phones[0].number + body.data[i].practices[0].website + "This doctor is not accepting new patients." + "</li>");
                }
            }
        }, function(error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });
    });
})