import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'calendario-page',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  gapi: any;

  constructor(public navCtrl: NavController) {

  }
}

//
// import {Page, Platform} from 'ionic-angular';
// import {InAppBrowser, InAppBrowserEvent, InAppBrowserRef} from 'ionic-angular';
// import {Component} from "@angular/core";
// declare var gapi: any;
// interface BrowserEvent extends InAppBrowserEvent{
// }
// interface BrowserRef extends InAppBrowserRef{
//   addEventListener(type: string, callback: (event: InAppBrowserEvent) => void): any;
// }
// // @Page({
// //   templateUrl: 'build/pages/GoogleCalendar/googleCalendar.html'
// // })
// @Component({
//   selector: 'calendario-page',
//   templateUrl: 'calendario.html'
// })
// export class CalendarioPage {
//   calendarEvent:any = {};
//   attendees = [{
//     email:""
//   }];
//   validation:any = {};
//   CLIENT_ID = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com'; // Client ID of your google console project
//   SCOPES = ["https://www.googleapis.com/auth/calendar"];
//   APIKEY = "XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // API key of your google console project
//   REDIRECTURL = "http://localhost/callback";
//   sendInvite() {
//     if(!this.validate()) {
//       alert("Please fill all fields for sending invite.");
//       return;
//     }
//     this.validation.failure = false;
//     var startDateTimeISO = this.buildISODate(this.calendarEvent.startDate, this.calendarEvent.startTime);
//     var enddateTimeISO = this.buildISODate(this.calendarEvent.endDate, this.calendarEvent.endTime);
//     this.popLastAttendeeIfEmpty(this.attendees);
//     var browserRef = InAppBrowser.open('https://accounts.google.com/o/oauth2/auth?client_id=' + this.CLIENT_ID + '&redirect_uri=' + this.REDIRECTURL + '&scope=https://www.googleapis.com/auth/calendar&approval_prompt=force&response_type=token', '_blank', 'location=no');
//     browserRef.addEventListener("loadstart", (event) => {
//       if ((event["url"]).indexOf("http://localhost/callback") === 0) {
//         var url = event["url"];
//         var token = url.split('access_token=')[1].split('&token_type')[0];
//         browserRef.removeEventListener("exit", (event) => { });
//         browserRef.close();
//         //SENDING THE INVITE USING THE GOOGLE CALENDAR API
//         gapi.client.setApiKey(this.APIKEY);
//         var request = gapi.client.request({
//           'path': '/calendar/v3/calendars/primary/events?alt=json',
//           'method': 'POST',
//           'headers': {
//             'Authorization': 'Bearer ' + token
//           },
//           'body': JSON.stringify({
//             "summary": this.calendarEvent.name,
//             "location": this.calendarEvent.location,
//             "description": this.calendarEvent.description,
//             "start": {
//               "dateTime": startDateTimeISO,
//               "timeZone": "Asia/Kolkata" // TODO : Parameterize this
//             },
//             "end": {
//               "dateTime": enddateTimeISO,
//               "timeZone": "Asia/Kolkata" // TODO : Parameterize this
//             },
//             "recurrence": [
//               "RRULE:FREQ=DAILY;COUNT=1" //// TODO : Parameterize this, Frequency of the event
//             ],
//             "attendees": this.attendees,
//             "reminders": {
//               "useDefault": false,
//               "overrides": [
//                 {
//                   "method": "email",
//                   "minutes": 1440   		// TODO : Parameterize this, No. of minutes before you want google services to send an email reminder
//                 },
//                 {
//                   "method": "popup",
//                   "minutes": 10 				// TODO : Parameterize this, No. of minutes before you want google services to send an popup reminder
//                 }
//               ]
//             }
//           }),
//           'callback': function (jsonR, rawR) {
//             if(jsonR.id){
//               alert("Invitation sent successfully");
//             } else {
//               alert("Failed to sent invite.");
//             }
//             console.log(jsonR); // Everything related to invite once created, use this for further enhancements
//           }
//         });
//       }
//     });
//   }
//   buildISODate(date, time){
//     var dateArray = date && date.split('-');
//     var timeArray = time && time.split(':');
//     var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1])-1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);
//     return normalDate.toISOString();
//   }
//   popLastAttendeeIfEmpty(itemsList){
//     if(!!itemsList.length){
//       return itemsList[0]["email"] == "" ? itemsList.shift(itemsList[0]) : itemsList;
//     }
//     return [];
//   }
//   addAttendees(){
//     if(this.attendees[this.attendees.length - 1].email == '') return;
//     var newAttendee = {email:""};
//     this.attendees.unshift(newAttendee);
//   }
//   removeAttendees(itemIndex){
//     this.attendees.splice(itemIndex, 1);
//   }
//   validate() {
//     return this.isStringValid(this.calendarEvent.name) &&
//       this.isStringValid(this.calendarEvent.name) &&
//       this.isStringValid(this.calendarEvent.location) &&
//       this.isStringValid(this.calendarEvent.description) &&
//       this.isStringValid(this.calendarEvent.startDate) &&
//       this.isStringValid(this.calendarEvent.startTime) &&
//       this.isStringValid(this.calendarEvent.endDate) &&
//       this.isStringValid(this.calendarEvent.endTime) &&
//       this.areAttendeesValid(this.attendees);
//   }
//   isStringValid(str){
//     if (typeof str != 'undefined' && str) {
//       return true;
//     };
//     return false;
//   }
//   areAttendeesValid(attendees){
//     if(attendees.length == 1 && !this.isStringValid(attendees[0]["email"])){
//       return false;
//     }
//     return true;
//   }
// }
