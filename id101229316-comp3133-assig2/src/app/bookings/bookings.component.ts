import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo, gql } from "apollo-angular";
import {Observable} from 'rxjs';

const searchBooking = gql`
query getBooking {
  getBooking{
    hotel_id
    booking_date
    booking_start
    booking_end
    user_id
    }
  }`;

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent implements OnInit {

  bookings: any[];
  loading = true;

  constructor(private router: Router,private apollo: Apollo) { }

  getBooking(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:searchBooking,
    }).valueChanges;
  }

  ngOnInit(): void {

    this.getBooking().subscribe((data) => {
      this.bookings = data.data.getBooking;
      console.log(this.bookings)
      console.log(data)
    })
  }

}
