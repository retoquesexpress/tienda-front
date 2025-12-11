import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHeader } from '../../ui/c-header/c-header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tienda-front');
}
