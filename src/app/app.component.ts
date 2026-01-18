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
  bulbizarreSnap!: FaceSnap;
  carapuceSnap!: FaceSnap;
  salamecheSnap!: FaceSnap;

  ngOnInit(): void {
    this.bulbizarreSnap = new FaceSnap(
      'Bulbizarre',
      'Pokémon plante',
      '/snaps/bulbizarre.png',
      new Date(),
      1,
    );

    this.carapuceSnap = new FaceSnap(
      'Carapuce',
      'Pokémon eau',
      '/snaps/carapuce.png',
      new Date(),
      2,
    );

    this.salamecheSnap = new FaceSnap(
      'Salamèche',
      'Pokémon feu',
      '/snaps/salameche.png',
      new Date(),
      3,
    );
  }
}
