import { Injectable } from '@angular/core';
import { ArticoloTech } from '../model/ArticoloTech';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  constructor() {}
  listaArticoliService!: ArticoloTech[];
}
