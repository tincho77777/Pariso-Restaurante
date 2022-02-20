import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( public infoService: InfoPaginaService,
               public menuService: MenuService ) { }

  ngOnInit(): void {
  }

}
