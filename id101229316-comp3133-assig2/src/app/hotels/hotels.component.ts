import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo, gql } from "apollo-angular";
import {Observable} from 'rxjs';

const searchHotels = gql`
query getHotel {
  getHotel{
hotel_id
hotel_name
street
city
price
email
}
}
`;

const getHotelByName = gql`
query ($hotel_name:String){
  getHotelByName(hotel_name:$hotel_name){
 	 hotel_name
    hotel_name
    street
    city
    postal_code
    price
    email
    user_id
  }
}`;

const getHotelByCity = gql`
query ($city:String){
  getHotelByCity(city:$city){
 	 hotel_name
    hotel_name
    street
    city
    postal_code
    price
    email
    user_id
  }
}`;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: any[];
  loading = true;
  constructor(private router: Router,private apollo: Apollo) { }

  getHotelByName(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:getHotelByName,
    }).valueChanges;
  }


  getHotelByCity(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:getHotelByCity,
    }).valueChanges;
  }

  getHotels(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query:searchHotels,
    }).valueChanges;
  }

  ngOnInit(): void {

    this.getHotels().subscribe((data) => {
      this.hotels = data.data.getHotel;
      console.log(this.hotels)
      console.log(data)
    })
  }

}
