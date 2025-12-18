import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';

@Component({
  selector: 'app-nueva-categoria',
  imports: [FormsModule, RouterLink],
  templateUrl: './nueva-categoria.html',
  styleUrl: './nueva-categoria.scss'
})
export class NuevaCategoria {
  categoria: ICategorias = {
    idCategory: 0,
    name: ''
  };

  constructor(private mihttp: SFuncionalidades, private router: Router) { }



  postCategoria() {
    this.mihttp.postCategory(this.categoria).subscribe({
      next: data => {
        console.log("Categoria insertada: ", data);
        alert('Categoria creada con éxito!');
        this.router.navigate(['/categorias']);
      },
      error: err => console.log(err)
    });

  }

}
