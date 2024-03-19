import { Component, ViewChild } from "@angular/core";
import { ArticoloTech } from "./model/ArticoloTech";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { CatalogoService } from "./services/catalogo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "MenuAngular";

  listaArticoli: ArticoloTech[];
  constructor(private service: CatalogoService) {
    this.listaArticoli = [
      {
        id: 1,
        nome: "iPhone 13 Pro",
        prezzo: 1200,
        descrizione: "Smartphone di ultima generazione con chip A15 Bionic.",
        descrizioneTotale:
          "Smartphone di ultima generazione con chip A15 Bionic. Dispone di una memoria di 6GB RAM + 128GB, uno schermo con notch da 6.1 pollici con una risoluzione di 1170 x 2532 punti e una fotocamera principale quadrupla con una risoluzione di 12+12+12 MP[^1^][8].",
        immagine:
          "https://th.bing.com/th/id/OIP.VArz6s5jlJZH1CAs-1bbXgHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 2,
        nome: "Samsung Galaxy S22",
        prezzo: 1100,
        descrizione: "Smartphone Android con display Dynamic AMOLED 2X.",
        descrizioneTotale:
          "Smartphone Android con display Dynamic AMOLED 2X. Il Samsung Galaxy S22 dispone di un processore di 2.8GHz Octa-core che consente di eseguire giochi e applicazioni pesanti. Ha un display Amoled da 6,1 pollici con risoluzione FHD+ (1080 x 2340 pixel) e una frequenza di aggiornamento di 120Hz[^2^][16].",
        immagine:
          "https://th.bing.com/th/id/OIP.LlIomJrZExq2CbfNWd4s4QHaE8?w=318&h=180&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 3,
        nome: "MacBook Pro M1",
        prezzo: 2300,
        descrizione: "Laptop potente con il chip Apple M1 Pro/Max.",
        descrizioneTotale:
          "Laptop potente con il chip Apple M1 Pro/Max. Il MacBook Pro 2021 da 16 pollici con CPU M1 Pro offre prestazioni incredibili ed un livello di efficienza impeccabile. Il processore è il successore del modello M1, ora con 10 core di CPU al posto di 8; otto per le prestazioni e due per l'efficienza[^3^][15].",
        immagine:
          "https://th.bing.com/th/id/OIP.dK_0S95zh9G_2G3DD_rvHgHaFj?w=197&h=180&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 4,
        nome: "Sony WH-1000XM4",
        prezzo: 350,
        descrizione:
          "Cuffie over-ear con cancellazione del rumore di livello industriale.",
        descrizioneTotale:
          "Cuffie over-ear con cancellazione del rumore di livello industriale. Le cuffie Sony WH-1000XM4 offrono un suono di alta qualità con una risposta in frequenza di 4 Hz-40.000 Hz. Sono dotate di un sensore tattile per il controllo del volume e offrono una durata della batteria di massimo 30 ore[^4^][2].",
        immagine:
          "https://th.bing.com/th/id/OIP.HIlCYzx8fZ9zONwfXG5m0QHaFj?w=182&h=180&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 5,
        nome: "Canon EOS R6",
        prezzo: 2500,
        descrizione: "Fotocamera mirrorless full-frame da 20.1 megapixel.",
        descrizioneTotale:
          'Fotocamera mirrorless full-frame da 20.1 megapixel. La Canon EOS R6 è una fotocamera mirrorless full frame che consente ai fotografi "ibridi" di affinare la loro arte. Offre una risposta in frequenza di 40 fps, Dual Pixel CMOS AF II, e uno stabilizzatore d\'immagine integrato a 8 stop[^5^][24].',
        immagine:
          "https://th.bing.com/th/id/OIP.DfbgeYkxQeaUjMvvlkeFYgHaFj?w=264&h=198&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 6,
        nome: "Apple Watch Series 7",
        prezzo: 400,
        descrizione: "Smartwatch con display Retina sempre attivo.",
        descrizioneTotale:
          "Smartwatch con display Retina sempre attivo. L'Apple Watch Series 7 offre funzioni come GPS, GLONASS, Galileo, QZSS e BeiDou, una bussola, un altimetro always-on, e un chip S7 con processore dual-core a 64 bit. Ha una batteria ricaricabile integrata agli ioni di litio con un'autonomia fino a 18 ore[^6^][26].",
        immagine:
          "https://th.bing.com/th/id/OIP.6TGmMjfjxX4x2sCr-42k2gHaIl?w=160&h=186&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 7,
        nome: "Amazon Echo Dot (4a generazione)",
        prezzo: 50,
        descrizione: "Altoparlante intelligente con Alexa.",
        descrizioneTotale:
          "Altoparlante intelligente con Alexa. L'Echo Dot (4ª generazione) è un altoparlante intelligente con comandi vocali Alexa, con un design nuovo ed elegante che si adatta alla perfezione a qualsiasi angolo della casa. Offre una voce nitida e bassi bilanciati per un suono completo che puoi goderti ovunque nella tua casa[^7^][30].",
        immagine:
          "https://th.bing.com/th/id/OIP.ths9_eBWNMn6TUOxFT7ASAHaEK?w=277&h=180&c=7&r=0&o=5&pid=1.7",
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
