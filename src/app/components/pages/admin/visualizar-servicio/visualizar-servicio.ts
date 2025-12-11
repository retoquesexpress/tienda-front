import { Component } from '@angular/core';
import { SFuncionalidades } from '../../../../datos/Services/s-funcionalidades';
import { IServicios } from '../../../../datos/Models/i-servicios';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizar-servicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './visualizar-servicio.html',
  styleUrl: './visualizar-servicio.scss'
})
export class VisualizarServicio {
  servicio!: IServicios;

  constructor(private mihttp: SFuncionalidades, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.mihttp.getServiceById(params["id"]).subscribe({
        next: data => this.servicio = data,
        error: err => console.log(err)
      }));
  }

}
