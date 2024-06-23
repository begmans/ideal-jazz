import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { details } from '../data/details';
import { AlbumDetail } from '../types';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent {
  albumList: {id: number; leader: string; title: string; year: number;}[] = details.map((item: AlbumDetail) => { return {id: item.id, leader: item.leader, title: item.title, year: item.year}});  
}
