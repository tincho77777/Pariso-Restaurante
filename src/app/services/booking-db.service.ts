import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BookI } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingDbService {

  private bookingCollection: AngularFirestoreCollection<BookI>;

  constructor( private aFs: AngularFirestore) { 

    this.bookingCollection = aFs.collection<BookI>('booking');



  }

  saveBooking( newBooking: BookI): void {

    this.bookingCollection.add(newBooking);

  }
}
