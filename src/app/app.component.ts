import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AlbumListComponent } from './album-list/album-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AlbumListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string =  'ideal-jazz';
}
