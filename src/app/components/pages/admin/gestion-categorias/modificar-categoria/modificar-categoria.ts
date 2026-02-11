import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar-categoria',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './modificar-categoria.html',
  styleUrl: './modificar-categoria.scss'
})
export class ModificarCategoria {
  categoria!: ICategorias;
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(private mihttp: SFuncionalidades, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.mihttp.getCategoryById(params["id"]).subscribe({
        next: data => this.categoria = data,
        error: err => console.log(err)
      }));
    console.log(this.categoria);
  }
  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' = 'success') {
    this.alertMessage = mensaje;
    this.alertType = tipo;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  putCategoria() {
    this.mihttp.updateCategory(this.categoria).subscribe({
      next: data => {
        console.log("Actualizado: " + data);
        this.mostrarAlerta('Categoría actualizada con éxito!');
        setTimeout(() => {
          this.router.navigate(['/categorias']);
        }, 2000);
      },
      error: err => {
        console.log(err);
        this.mostrarAlerta('Error al actualizar la categoría', 'error');
      }
    })
  }
}
