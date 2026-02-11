import { Component } from '@angular/core';
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
  categorias!: ICategorias[];
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(private mihttp: SFuncionalidades) { }

  ngOnInit() {
    this.cargarCategorias();
    console.log('Categorías cargadas: ', this.categorias);

  }

  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' = 'success') {
    this.alertMessage = mensaje;
    this.alertType = tipo;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  funcionEliminar(id: number) {
    this.mihttp.deleteCategory(id).subscribe({
      next: data => {
        this.mostrarAlerta('Categoría eliminada con éxito');
        this.cargarCategorias();
      },
      error: err => {
        this.mostrarAlerta('Error al eliminar la categoría', 'error');
      }
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
