import { Component } from "@angular/core";
import { CatalogoService } from "../services/catalogo.service";
import { ActivatedRoute } from "@angular/router";
import { ArticoloTech } from "../model/ArticoloTech";

@Component({
  selector: "app-dettaglio",
  templateUrl: "./dettaglio.component.html",
  styleUrls: ["./dettaglio.component.scss"],
})
export class DettaglioComponent {
  idArticolo!: number;
  articolo!: ArticoloTech;
  constructor(
    private service: CatalogoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (e: any) => {
        this.idArticolo = +e.params.id;
        console.log(e.params.id);
        this.articolo = this.service.listaArticoliService.find(
          (e) => e.id === this.idArticolo
        )!;
      },
    });
  }
}
