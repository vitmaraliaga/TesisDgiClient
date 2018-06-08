import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListProcesoPageComponent } from './containers';
import { SeguimientosComponent } from './seguimientos.component';

/** Rutas que se manejan en este módulo
 * /seguimientos
 * /seguimientos/42
 */
const routes: Routes = [
  {
    path: '',
    component: SeguimientosComponent,
    children: [ // rutas hijas, se verán dentro del router-oulet componente contenedor
      {
        path: '',
        component: ListProcesoPageComponent, // tiene sus cosas y ... un router-oulet para sus hijos
      },
      {
        path: ':proceso_id',
        loadChildren: '../tesis-procesos/tesis-procesos.module#TesisProcesosModule',
      }
    ],
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)], // configuración para un módulo hijo
  exports: [RouterModule], // se importará en su módulo funcional asociado
  providers: []
})
export class SeguimientosRoutingModule { }
