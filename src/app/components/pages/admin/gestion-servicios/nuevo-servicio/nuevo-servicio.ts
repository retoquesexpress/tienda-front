import { Component, OnInit } from '@angular/core';
import { IServicios } from '../../../../../datos/Models/i-servicios';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-servicio',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './nuevo-servicio.html',
  styleUrl: './nuevo-servicio.scss'
})
export class NuevoServicio implements OnInit {
  servicio: IServicios = {
    idService: 0,
    name: '',
    description: '',
    price: 0,
    pictureUrl: '',
    category: { idCategory: 0, name: '' }
  };

  categorias: ICategorias[] = [];
  selectedCategoryId: number = 0;

  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(private mihttp: SFuncionalidades, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
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

  postServicio() {
    if (!this.selectedCategoryId || this.selectedCategoryId === 0) {
      this.mostrarAlerta('Por favor, selecciona una categoría', 'error');
      return;
    }

    // Find and assign the selected category
    const selectedCategory = this.categorias.find(cat => Number(cat.idCategory) === Number(this.selectedCategoryId));
    if (selectedCategory) {
      this.servicio.category = selectedCategory;
    } else {
      this.mostrarAlerta('La categoría seleccionada no es válida', 'error');
      return;
    }

    this.mihttp.postService(this.servicio).subscribe({
      next: data => {
        console.log("Articulo insertado: ", data);
        this.mostrarAlerta('Servicio creado con éxito!');
        setTimeout(() => {
          this.router.navigate(['/servicios']);
        }, 2000);
      },
      error: err => {
        console.log(err);
        this.mostrarAlerta('Error al crear el servicio', 'error');
      }
    });

  }

}
