import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './DoctorSearch.js';
import { LocationSearch } from './LocationSearch.js';

function search(place, query) {
    let output = [];
    let locationSearch = new LocationSearch();
    let doctorSearch = new DoctorSearch();
    



$(document).ready(function() {
    $('#userInput').submit(function(e) {
       e.preventDefault();
       let query = $('#query').val();
       $('#query').val("");
       let newDoctorSearch = new DoctorSearch();
       
       let promise = newDoctorSearch.getDoctor(query);
       promise.then(function(response) {
           let body = JSON.parse(response);
           if(body.data.length>0) {
               $('#searchResults').text('');

           for(let i= 0; i<body.data.length; i++) {
               if (body.data[i].practices[0].accepts_new_patients == true) {
                   $('#searchResults').append("<br>" + "<ul>" + "<li>" + "Doctor: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Specialties: " + body.data[i].specialties[0].actor + "<br>" + "Phone number: " + body.data[i].practices[0].phones[0].number + "<br>" + "Practice website: "+ body.data[i].practices[0].website+ "<br>" + "This doctor is accepting new patients."+ "</li>"+"</ul>");
                } else {
                    $('#searchResults').append("<br>" + "<ul>" + "<li>" + "Doctor: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Specialties: " + body.data[i].specialties[0].actor + "<br>" + "Phone number: " + body.data[i].practices[0].phones[0].number+ "<br>" + "Practice website: "+ body.data[i].practices[0].website + "<br>" + "This doctor is not accepting new patients."+ "</li>" + "</ul>");
                }
            }
           } else {
            $('#searchResults').text('Sorry, no doctors found. Try new search.');
           }
        }, function(error) {
            $('.errors').text(`There was an error processing your request: ${error.message}. Please try again.`);
        });
    });
});