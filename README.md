# _Doctor Lookup_

#### _Doctor Lookup is a web application that takes user's medical issue, doctor's name or speciality and returns a list of doctors with their first name, last name, address, phone number, website and whether or not they are accepting new patients._

#### By _**Svitlana Filatova**_

## Description
_This web application allows to make a searhh for a doctor in Seattle._

| User stories                                                                                                                                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I should be able to enter a medical issue to receive a list of doctors in Seattle.                                                                                                       |
| I should be able to to enter a doctor name to receive a list of doctors in Seattle.                                                                                                      |
| I should be able to to enter a doctor speciality to receive a list of doctors in Seattle.                                                                                                |
| I should be able to get a list of doctors with the following information: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. |
| If no doctors found I should be able to get an appropriate notification.                                                                                                                 |


## Setup/Installation Requirements

* _Clone this repository on your Desktop._
* _Open Terminal (for Mac users) or PowerShell (for Windows users), navigate to age_calculator folder(cd .../Desktop/doctor) and run the following command: npm install._
* _An application requiers a unique API key to use the BetterDoctor API. To get one you need to register here https://developer.betterdoctor.com/ with listing Epicodus as the Organization/Company Name._
* _An application requires a unique API key to use OpenCage Geocoding. To get it you need to register here https://opencagedata.com by clicking on "Sign Up For Free API Key" button._
* _Once you get the key you need to copy and paste it in DoctorSearch.js file (url variable, instead of '${process.env.exports.apiKey}')._
* _Now run npm start (it will build the project and open an html file automatically)._


## Known Bugs / Limitations

* _Not handling "undefined" websites._

## Support and contact details

_Contact Svitlana Filatova at svitlana.filatova@gmail.com._

## Technologies Used

_JavaScript, Jasmine, Karma, ES6, Webpack, Eslinter, HTML, CSS, Bootstrap, API._



### License

*This software (sans images) is licensed under the MIT license.*

Copyright (c) 2019 **_Svitlana Filatova_**
