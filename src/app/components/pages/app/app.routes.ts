import { Routes } from '@angular/router';
import { Inicio } from '../user/inicio/inicio';
import { Servicios } from '../admin/servicios/servicios';
import { VisualizarServicio } from '../admin/visualizar-servicio/visualizar-servicio';
import { NuevoServicio } from '../admin/nuevo-servicio/nuevo-servicio';
import { EliminarServicio } from '../admin/eliminar-servicio/eliminar-servicio';
import { ModificarServicio } from '../admin/modificar-servicio/modificar-servicio';

export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'Aservicios', component: Servicios},
    {path: 'nuevo', component: NuevoServicio},
    {path: 'visualizar', component: VisualizarServicio},
    {path: 'eliminar', component: EliminarServicio},
    {path: 'modificar', component: ModificarServicio},  
];
