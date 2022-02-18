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

  constructor(private http: HttpClient) {

    // console.log("Servicio de Info Pagina Listo");


    //LEER EL ARCHIVO JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( resp  => {


        this.cargada = true,
        this.info = resp,
        console.log(resp);

      });


    //  this.myArrayOf$ = of( this.info);
    //  this.myArrayOf$.subscribe( resp => {

    //   this.cargada= true,
    //   this.info= resp,
    //   console.log(resp);


    //  })





  }
}






