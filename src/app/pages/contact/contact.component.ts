import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  createFormGroup() {
    return new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl('')


    })
  }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {

    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();

  }

  onSaveForm() {

    // const newContact = {
    //   name: 'Martin',
    //   email: 'tinchoa02@gamil.com',
    //   phone: '2616483343',
    //   message: 'Hola wenas'
    // }

    this.dbData.saveMessage(this.contactForm.value);
    alert('Mensaje enviado!')
  } 

}
