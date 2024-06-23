import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent {
  @Input() albumList: {id: number; leader: string; title:string; year: number;}[] = [];
}
