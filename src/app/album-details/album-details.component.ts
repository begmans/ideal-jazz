import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [ UpperCasePipe ],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
  leader: string = 'Ahmad Jamal';
  title: string = 'At the Pershing';
  year: string = '1958';
  description: string = 'On l\'a souvent remarqué dans ses enregistrements : Ahmad Jamal est autant un pianiste qu\'un leader en trio, \
  genre où il excelle. Sa particularité était d\'ếtre économe et "passeur", aménageant de larges espaces de silence, \
  ou les interventions des autres musiciens. Depuis sur ces derniers enregistrements, \
  on l\'a connu plus prolixe et moins effacé... At the Pershing, enregsitré en public, \
  est révélateur du Jamal première période. Il entretient un dialogue intelligent avec ses complices \
  (le batteur Vernell Fournier et le contrebassiste Israel Crosby). Ce disque remporta \
  à sa sortie, un très large succès public. On comprend pourquoi.';
  cover = {
    src: '', 
    alt: 'Live at the Pershing cover'
  };
  type: string = 'hardbop'; 
  label: string =  'Chess MCD 09108';
  distributor: string = 'Universal';

  essential:boolean = false;
}
