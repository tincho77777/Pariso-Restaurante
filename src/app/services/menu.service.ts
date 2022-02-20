import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  cargando = true;
  menu: any[] = [];

  constructor( private http : HttpClient) { 

this.cargarMenu();

  }


  private cargarMenu(){

    //LEER EL ARCHIVO JSON
    this.http.get('https://pariso-restaurante-default-rtdb.firebaseio.com/menu.json')
    .subscribe( ( resp: any ) => {

    this.menu = resp;
    console.log(resp);
    this.cargando= false;
    

     });


  }
}
