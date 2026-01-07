import { Routes } from '@angular/router';
import { Inicio } from '../inicio/inicio';
import { Servicios } from '../admin/gestion-servicios/servicios/servicios';
import { VisualizarServicio } from '../admin/gestion-servicios/visualizar-servicio/visualizar-servicio';
import { NuevoServicio } from '../admin/gestion-servicios/nuevo-servicio/nuevo-servicio';
import { ModificarServicio } from '../admin/gestion-servicios/modificar-servicio/modificar-servicio';
import { Login } from '../login/login';
import { loginGuard } from '../../../datos/Guards/login-guard';
import { NuevaCategoria } from '../admin/gestion-categorias/nueva-categoria/nueva-categoria';
import { Categorias } from '../admin/gestion-categorias/categorias/categorias';
import { ModificarCategoria } from '../admin/gestion-categorias/modificar-categoria/modificar-categoria';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'servicios', component: Servicios, canActivate: [loginGuard]},
    {path: 'nuevo', component: NuevoServicio, canActivate: [loginGuard]},
    {path: 'visualizar/:id', component: VisualizarServicio, canActivate: [loginGuard]},
    {path: 'modificar/:id', component: ModificarServicio, canActivate: [loginGuard]},
    {path: 'categorias', component: Categorias, canActivate: [loginGuard]},
    {path: 'modificar-categoria/:id', component: ModificarCategoria, canActivate: [loginGuard]},
    {path: 'nueva-categoria', component: NuevaCategoria, canActivate: [loginGuard]},
    {path: 'inicio', component: Inicio, canActivate: [loginGuard]},


];
