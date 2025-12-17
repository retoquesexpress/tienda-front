import { Routes } from '@angular/router';
import { Inicio } from '../inicio/inicio';
import { Servicios } from '../admin/servicios/servicios';
import { VisualizarServicio } from '../admin/visualizar-servicio/visualizar-servicio';
import { NuevoServicio } from '../admin/nuevo-servicio/nuevo-servicio';
import { ModificarServicio } from '../admin/modificar-servicio/modificar-servicio';
import { Categorias } from '../admin/gestion-categorias/categorias/categorias';
import { ModificarCategoria } from '../admin/gestion-categorias/modificar-categoria/modificar-categoria';
import { VisualizarCategoria } from '../admin/gestion-categorias/visualizar-categoria/visualizar-categoria';
import { NuevaCategoria } from '../admin/gestion-categorias/nueva-categoria/nueva-categoria';

export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'servicios', component: Servicios},
    {path: 'nuevo', component: NuevoServicio},
    {path: 'visualizar/:id', component: VisualizarServicio},
    {path: 'modificar/:id', component: ModificarServicio},  
    {path: 'categorias', component: Categorias},
    {path: 'modificar-categoria/:id', component: ModificarCategoria},
    {path: 'visualizar-categoria/:id', component: VisualizarCategoria},
    {path: 'nueva-categoria', component: NuevaCategoria},
    {path: '**', redirectTo: ''}

    
];
