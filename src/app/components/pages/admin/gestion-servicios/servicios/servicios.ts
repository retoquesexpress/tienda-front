import { Component, OnInit } from '@angular/core';
import { IServicios } from '../../../../../datos/Models/i-servicios';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios implements OnInit {
  servicios: IServicios[] = [];
  serviciosOriginales: IServicios[] = [];

  categorias: ICategorias[] = [];
  categoriaSeleccionada: string = 'Todas';

  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  constructor(private mihttp: SFuncionalidades) { }

  ngOnInit() {
    this.cargarServicios();
    this.cargarCategorias();
  }

  mostrarAlerta(mensaje: string, tipo: 'success' | 'error' = 'success') {
    this.alertMessage = mensaje;
    this.alertType = tipo;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  cargarServicios() {
    this.mihttp.getAllServices().subscribe({
      next: (data) => {
        this.serviciosOriginales = data;
        this.servicios = data;
      },
      error: (err) => console.error('Error al cargar los servicios:', err)
    });
  }

  cargarCategorias() {
    this.mihttp.getAllCategories().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (err) => console.error('Error al cargar categorías', err)
    });
  }

  onCambioFiltro() {
    if (this.categoriaSeleccionada === 'Todas') {
      this.servicios = this.serviciosOriginales;
    } else {
      const idBuscado = Number(this.categoriaSeleccionada);
      this.servicios = this.serviciosOriginales.filter(servicio => servicio.category.idCategory === idBuscado);
    }
  }

  funcionEliminar(id: number) {
    this.mihttp.deleteService(id).subscribe({
      next: () => {
        this.mostrarAlerta('Servicio eliminado correctamente');
        this.cargarServicios();
        this.categoriaSeleccionada = 'Todas';
      },
      error: (err) => {
        console.error(err);
        this.mostrarAlerta('Error al eliminar el servicio', 'error');
      }
    });
  }
}