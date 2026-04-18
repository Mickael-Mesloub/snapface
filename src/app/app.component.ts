import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  bulbizarreSnap!: FaceSnap;
  carapuceSnap!: FaceSnap;
  salamecheSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Bulbizarre',
        'Pokémon plante',
        '/snaps/bulbizarre.png',
        new Date(),
        209,
      ),

      new FaceSnap(
        'Carapuce',
        'Pokémon eau',
        '/snaps/carapuce.png',
        new Date(),
        144,
      ),

      new FaceSnap(
        'Salamèche',
        'Pokémon feu',
        '/snaps/salameche.png',
        new Date(),
        57,
      ),
    ];

    this.faceSnaps[0].setLocation('Pokéball de gauche');
    this.faceSnaps[1].setLocation('Pokéball du milieu');
    this.faceSnaps[2].setLocation('Pokéball de droite');
  }
}
