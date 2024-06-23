import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { details } from '../data/details';
import { AlbumDetail } from '../types';



const  emptyAlbumDetails =  { "id": -1, 
  "leader": "",
  "title": "",
  "year": 0,
  "description": "",
  "cover": {
    "src": "",
    "alt": ""
  },
  "type": "",
  "label": "",
  "distributor": "",
  "essential": true
}

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [ UpperCasePipe ],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
  album: AlbumDetail = emptyAlbumDetails;

  @Input()
  set id(albumId: string) {
    this.album = details.find((item) => item.id === parseInt(albumId)) || emptyAlbumDetails;
  }

}
