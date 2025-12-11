import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SFuncionalidades } from '../../../../datos/Services/s-funcionalidades';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IServicios } from '../../../../datos/Models/i-servicios';

@Component({
  selector: 'app-modificar-servicio',
  imports: [FormsModule,RouterLink],
  templateUrl: './modificar-servicio.html',
  styleUrl: './modificar-servicio.scss'
})
export class ModificarServicio {
  servicio!: IServicios;

    constructor(private mihttp: SFuncionalidades,private route: ActivatedRoute, private router: Router) {}

      ngOnInit(){
        this.route.params.subscribe(
        params => this.mihttp.getServiceById(params["id"]).subscribe({
        next: data => this.servicio = data, 
        error: err => console.log(err)
    })
  )

      }
      putServicio(){
      this.mihttp.updateService(this.servicio).subscribe({
      next: data =>{ console.log("Actuializado: " + data);
        this.router.navigate(['/servicios']);
      },
      error: err => console.log(err)
    })
  }
}
