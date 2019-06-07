import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './DoctorSearch.js';

$(document).ready(function() {
    $('#doctorSearch').submit(function() {
      let query = $('#query').val();
      $('#query').val("");
  
  
      let DoctorSearch = new DoctorSearch();
      let promise = DoctorSearch.getDoctor(query);
  
      promise.then(function(response) {
        let body = JSON.parse(response);
        for(let i= 0; i<body.data.length; i++) {
        $('.searchResults').append("<li>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + " "+ body.data[i].practices[0].accepts_new_patients + " "+ body.data[i].practices[0].phones[0].number + body.data[i].practices[0].website + "</li>");
    }
        
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  
  });