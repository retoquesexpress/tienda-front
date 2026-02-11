import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nueva-categoria',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './nueva-categoria.html',
  styleUrl: './nueva-categoria.scss'
})
export class NuevaCategoria {
  categoria: ICategorias = {
    idCategory: 0,
    name: ''
  };
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(private mihttp: SFuncionalidades, private router: Router) { }



  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' = 'success') {
    this.alertMessage = mensaje;
    this.alertType = tipo;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  postCategoria() {
    this.mihttp.postCategory(this.categoria).subscribe({
      next: data => {
        console.log("Categoria insertada: ", data);
        this.mostrarAlerta('Categoría creada con éxito!');
        setTimeout(() => {
          this.router.navigate(['/categorias']);
        }, 2000);
      },
      error: err => {
        console.log(err);
        this.mostrarAlerta('Error al crear la categoría', 'error');
      }
    });

  }

}
