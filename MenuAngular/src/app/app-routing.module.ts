import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'dettaglio/:id', component: DettaglioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
