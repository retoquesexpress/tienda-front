import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ICategorias } from '../../../../../datos/Models/i-categorias';
import { SFuncionalidades } from '../../../../../datos/Services/s-funcionalidades';

@Component({
  selector: 'app-modificar-categoria',
  imports: [FormsModule,RouterLink],
  templateUrl: './modificar-categoria.html',
  styleUrl: './modificar-categoria.scss'
})
export class ModificarCategoria {
  categoria!: ICategorias;

    constructor(private mihttp: SFuncionalidades,private route: ActivatedRoute, private router: Router) {}

      ngOnInit(){
        this.route.params.subscribe(
        params => this.mihttp.getCategoryById(params["id"]).subscribe({
        next: data => this.categoria = data, 
        error: err => console.log(err)
        }));
        console.log(this.categoria);
    }
      putCategoria(){
      this.mihttp.updateCategory(this.categoria).subscribe({
      next: data =>{ console.log("Actualizado: " + data);
        this.router.navigate(['/categorias']);
      },
      error: err => console.log(err)
    })
  }
}
