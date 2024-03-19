import { Component, ViewChild } from '@angular/core';
import { ArticoloTech } from './model/ArticoloTech';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogoService } from './services/catalogo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MenuAngular';

  listaArticoli: ArticoloTech[];
  constructor(private service: CatalogoService) {
    this.listaArticoli = [
      {
        id: 1,
        nome: 'iPhone 13 Pro',
        prezzo: 1200,
        descrizione: 'Smartphone di ultima generazione con chip A15 Bionic.',
        immagine:
          'https://th.bing.com/th/id/OIP.VArz6s5jlJZH1CAs-1bbXgHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 2,
        nome: 'Samsung Galaxy S22',
        prezzo: 1100,
        descrizione: 'Smartphone Android con display Dynamic AMOLED 2X.',
        immagine:
          'https://th.bing.com/th/id/OIP.LlIomJrZExq2CbfNWd4s4QHaE8?w=318&h=180&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 3,
        nome: 'MacBook Pro M1',
        prezzo: 2300,
        descrizione: 'Laptop potente con il chip Apple M1 Pro/Max.',
        immagine:
          'https://th.bing.com/th/id/OIP.dK_0S95zh9G_2G3DD_rvHgHaFj?w=197&h=180&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 4,
        nome: 'Sony WH-1000XM4',
        prezzo: 350,
        descrizione:
          'Cuffie over-ear con cancellazione del rumore di livello industriale.',
        immagine:
          'https://th.bing.com/th/id/OIP.HIlCYzx8fZ9zONwfXG5m0QHaFj?w=182&h=180&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 5,
        nome: 'Canon EOS R6',
        prezzo: 2500,
        descrizione: 'Fotocamera mirrorless full-frame da 20.1 megapixel.',
        immagine:
          'https://th.bing.com/th/id/OIP.DfbgeYkxQeaUjMvvlkeFYgHaFj?w=264&h=198&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 6,
        nome: 'Apple Watch Series 7',
        prezzo: 400,
        descrizione: 'Smartwatch con display Retina sempre attivo.',
        immagine:
          'https://th.bing.com/th/id/OIP.6TGmMjfjxX4x2sCr-42k2gHaIl?w=160&h=186&c=7&r=0&o=5&pid=1.7',
      },
      {
        id: 7,
        nome: 'Amazon Echo Dot (4a generazione)',
        prezzo: 50,
        descrizione: 'Altoparlante intelligente con Alexa.',
        immagine:
          'https://th.bing.com/th/id/OIP.ths9_eBWNMn6TUOxFT7ASAHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7',
      },
    ];
  }

  // @ViewChild(CatalogoComponent) catalogoComponent!: CatalogoComponent;

  // ngAfterViewInit() {
  //   this.catalogoComponent.listaArticoliTech = this.listaArticoli;
  // }
  ngOnInit() {
    this.service.listaArticoliService = this.listaArticoli;
  }
}
