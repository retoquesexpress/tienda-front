import { Component } from '@angular/core';
import { IServicios } from '../../../../datos/Models/i-servicios';
import { SFuncionalidades } from '../../../../datos/Services/s-funcionalidades';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-servicio',
  imports: [FormsModule, RouterLink],
  templateUrl: './nuevo-servicio.html',
  styleUrl: './nuevo-servicio.scss'
})
export class NuevoServicio {
  servicio: IServicios = { 
    id: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    pictureUrl: '' };

  constructor(private mihttp: SFuncionalidades, private router: Router) {}



  postServicio() {
    this.mihttp.postService(this.servicio).subscribe({
      next: data => {
        console.log("Articulo insertado: " , data);
        alert('Servicio creado con éxito!');
        this.router.navigate(['/servicios']);
      },
      error: err => console.log(err)
    });
    
  }

}
