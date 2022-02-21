import { Component, OnInit } from '@angular/core';
import { BookingDbService } from 'src/app/services/booking-db.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      date: new FormControl(''),
      personas: new FormControl('')
    })
  }

  bookingForm: FormGroup;

  constructor( private bookData: BookingDbService) {

    this.bookingForm = this.createFormGroup();

   }

  ngOnInit(): void {
  }

  onResetForm(){

    this.bookingForm.reset();

  }
  
  onSaveForm(){
  
    this.bookData.saveBooking( this.bookingForm.value );

    alert('Nos contactaremos con usted para confirmar su reserva!')

  }

}
