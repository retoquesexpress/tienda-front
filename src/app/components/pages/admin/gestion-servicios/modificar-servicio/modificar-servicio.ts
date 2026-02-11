import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IServicios } from '../../../../../datos/Models/i-servicios';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar-servicio',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './modificar-servicio.html',
  styleUrl: './modificar-servicio.scss'
})
export class ModificarServicio implements OnInit {
  servicio!: IServicios;
  categorias: ICategorias[] = [];
  selectedCategoryId: number = 0;

  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(private mihttp: SFuncionalidades, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
    this.route.params.subscribe(params => {
      this.mihttp.getServiceById(params['id']).subscribe({
        next: data => {
          this.servicio = data;
          this.selectedCategoryId = data.category.idCategory;
        },
        error: err => console.log(err)
      });
    });
  }

  loadCategories() {
    this.mihttp.getAllCategories().subscribe({
      next: data => {
        this.categorias = data;
        console.log("Categorías cargadas: ", data);
      },
      error: err => {
        console.log("Error al cargar categorías: ", err);
        this.mostrarAlerta('Error al cargar las categorías', 'error');
      }
    });
  }

  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' = 'success') {
    this.alertMessage = mensaje;
    this.alertType = tipo;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  putServicio() {
    if (!this.selectedCategoryId || this.selectedCategoryId === 0) {
      this.mostrarAlerta('Por favor, selecciona una categoría', 'error');
      return;
    }

    const selectedCategory = this.categorias.find(cat => Number(cat.idCategory) === Number(this.selectedCategoryId));
    if (selectedCategory) {
      this.servicio.category = selectedCategory;
    } else {
      this.mostrarAlerta('La categoría seleccionada no es válida', 'error');
      return;
    }

    this.mihttp.updateService(this.servicio).subscribe({
      next: data => {
        console.log("Actualizado: " + data);
        this.mostrarAlerta('Servicio actualizado con éxito!');
        setTimeout(() => {
          this.router.navigate(['/servicios']);
        }, 2000);
      },
      error: err => {
        console.log(err);
        this.mostrarAlerta('Error al actualizar el servicio', 'error');
      }
    })
  }
}
