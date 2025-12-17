import { Component} from '@angular/core';
import { IServicios } from '../../../../../datos/Models/i-servicios';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink, CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {
  servicios!:IServicios[];
  
  constructor(private mihttp: SFuncionalidades) {}

  ngOnInit(){
    this.cargarServicios();
   }

   funcionEliminar(id:string){
    this.mihttp.deleteService(id).subscribe( data=> {
    console.log('Servicio eliminado: ', data);
    console.log("actuaizar");
    this.cargarServicios();
    console.log("fin actuaizar");
    });    
  }

  cargarServicios() {
      this.mihttp.getAllServices().subscribe({
      next: (data) => {
        this.servicios = data;
      },
      error: (err) => {
        console.error('Error al cargar los servicios:', err);
      },
    });
  }
}
