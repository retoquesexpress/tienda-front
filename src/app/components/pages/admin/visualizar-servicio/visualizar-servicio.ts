import { Component, OnInit } from '@angular/core';
import { SFuncionalidades } from '../../../ui/Services/s-funcionalidades';
import { IServicios } from '../../../ui/Models/i-servicios';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizar-servicio',
  imports: [CommonModule,RouterLink],
  templateUrl: './visualizar-servicio.html',
  styleUrl: './visualizar-servicio.scss'
})
export class VisualizarServicio implements OnInit{
  servicio$!: Observable<IServicios>;

    constructor(private mihttp: SFuncionalidades,private route: ActivatedRoute) {}

      ngOnInit(){
          this.servicio$ = this.route.params.pipe(
          switchMap(params => this.mihttp.getServiceById(params["id"]))
        );
      }

}
