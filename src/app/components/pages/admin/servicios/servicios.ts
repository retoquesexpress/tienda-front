import { Component, OnInit } from '@angular/core';
import { IServicios } from '../../../ui/Models/i-servicios';
import { SFuncionalidades } from '../../../ui/Services/s-funcionalidades';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios implements OnInit{
  servicios!: IServicios[];


  
  constructor(private mihttp: SFuncionalidades) {}

  ngOnInit(){
    this.mihttp.getAllServices().subscribe({
      next: (data) => {
        this.servicios = data,
      console.log("Datos Recibidos: ",data)
    },
      error: (error) => console.error(error)
    });

  }
}
