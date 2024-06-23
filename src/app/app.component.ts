import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { details } from './data/details';
import { AlbumListComponent } from './album-list/album-list.component';

type AlbumCover = {
  "src": string;
  "alt": string;
};

type AlbumDetail =
  { "id": number;  
    "leader": string;
    "title": string;
    "year": number;
    "description": string;
    "cover": AlbumCover;
    "type": string;
    "label": string;
    "distributor": string;
    "essential": boolean;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AlbumListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string =  'ideal-jazz';
  albumList: {id: number; leader: string; title: string; year: number;}[] = details.map((item: AlbumDetail) => { return {id: item.id, leader: item.leader, title: item.title, year: item.year}});
  
}
