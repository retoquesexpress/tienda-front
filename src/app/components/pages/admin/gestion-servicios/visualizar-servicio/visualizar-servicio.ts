import { Component } from '@angular/core';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { IServicios } from '../../../../../datos/Models/i-servicios';
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
        next: data => {
          this.servicio = {
            ...data,
            pictureUrl: this.getFullPictureUrl(data)
          };
        },
        error: err => console.log(err)
      }));
  }

  private getFullPictureUrl(service: any): string {
    if (!service || !service.pictureUrl) return '';

    const pictureUrl = service.pictureUrl;
    if (pictureUrl.startsWith('assets/') || pictureUrl.startsWith('http') || pictureUrl.startsWith('/assets/')) {
      return pictureUrl;
    }

    let folder = '';
    const catId = service.category?.idCategory || (typeof service.idCategory === 'number' ? service.idCategory : null);

    if (catId === 1) folder = 'unas';
    else if (catId === 2) folder = 'maquillaje';
    else if (catId === 3) folder = 'peluqueria';

    return folder ? `/assets/${folder}/${pictureUrl}` : `/assets/${pictureUrl}`;
  }

}
