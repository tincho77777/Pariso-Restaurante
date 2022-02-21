import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MessageI } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor( private afs: AngularFirestore) { 

this.contactCollection= afs.collection<MessageI>('contacts');

  }

saveMessage( newContact: MessageI): void{

  this.contactCollection.add(newContact);
}

}
