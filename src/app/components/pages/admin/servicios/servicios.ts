import { Component, OnInit } from '@angular/core';
import { IServicios } from '../../../ui/Models/i-servicios';
import { SFuncionalidades } from '../../../ui/Services/s-funcionalidades';
import { RouterLink } from "@angular/router";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink, CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {
  servicios$!: Observable<IServicios[]>;
  
  constructor(private mihttp: SFuncionalidades) {}

  ngOnInit(){
  this.servicios$ = this.mihttp.getAllServices();
   }
}
