import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';

@Component({
  selector: 'app-visualizar-categoria',
  imports: [CommonModule, RouterLink],
  templateUrl: './visualizar-categoria.html',
  styleUrl: './visualizar-categoria.scss'
})
export class VisualizarCategoria {
  categoria!: ICategorias;

  constructor(private mihttp: SFuncionalidades, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.mihttp.getCategoryById(params["id"]).subscribe({
        next: data => this.categoria = data,
        error: err => console.log(err)
      }));
  }

}
