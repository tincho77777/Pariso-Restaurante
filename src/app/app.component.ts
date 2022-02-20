import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { MenuService } from './services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor( public infoPaginaService: InfoPaginaService,
               public menuService: MenuService){

  }
}
