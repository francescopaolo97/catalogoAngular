import { Component } from '@angular/core';
import { ArticoloTech } from '../model/ArticoloTech';
import { Router } from '@angular/router';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent {
  listaArticoliTech!: ArticoloTech[];
  constructor(private route: Router, private service: CatalogoService) {}

  ngOnInit() {
    this.listaArticoliTech = this.service.listaArticoliService;
  }

  vaiAlDettaglio(id: number) {
    this.route.navigate([`/dettaglio/${id}`]);
  }
}
