import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  // private myArrayOf$: Observable<InfoPagina>;

  // menu: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    // this.cargarMenu();

    // console.log("Servicio de Info Pagina Listo");

    //  this.myArrayOf$ = of( this.info);
    //  this.myArrayOf$.subscribe( resp => {

    //   this.cargada= true,
    //   this.info= resp,
    //   console.log(resp);


    //  })

  }

  private cargarInfo(){

     //LEER EL ARCHIVO JSON
     this.http.get('assets/data/data-pagina.json')
     .subscribe( resp  => {

       this.cargada = true;
       this.info = resp;

     });

  }

  // private cargarMenu(){

    //LEER EL ARCHIVO JSON
    // this.http.get('https://pariso-restaurante-default-rtdb.firebaseio.com/menu.json')
    // .subscribe( ( resp: any  ) => {

    //   this.menu = resp;
    //   console.log(resp);

    // });

  }



