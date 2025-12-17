import { Component} from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { ICategorias } from '../../../../../datos/Models/i-categorias';

@Component({
  selector: 'app-categorias',
  imports: [RouterLink, CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss'
})
export class Categorias {
  categorias!:ICategorias[];
  
  constructor(private mihttp: SFuncionalidades) {}

  ngOnInit(){
    this.cargarCategorias();
        console.log('Categorías cargadas: ', this.categorias);

   }

   funcionEliminar(id:string){
    this.mihttp.deleteCategory(id).subscribe( data=> {
    console.log('Categoría eliminada: ', data);
    console.log("actuaizar");
    this.cargarCategorias();
    console.log("fin actuaizar");
    });    
  }

  cargarCategorias() {
      this.mihttp.getAllCategories().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorías cargadas: ', this.categorias);
        
      },
      error: (err) => {
        console.error('Error al cargar las categorías:', err);
      },
    });
    
  }
}
