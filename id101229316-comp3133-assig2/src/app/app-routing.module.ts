import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SignupComponent } from './signup/signup.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'hotels', component: HotelsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'bookings', component: BookingsComponent},
  { path: 'add-booking', component: AddBookingComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

