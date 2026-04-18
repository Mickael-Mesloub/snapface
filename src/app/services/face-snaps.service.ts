import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private readonly faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'bulbizarre',
      'type plante',
      '/snaps/bulbizarre.png',
      new Date(),
      209,
    ).withLocation('Pokéball de gauche'),

    new FaceSnap(
      'carapuce',
      'type eau',
      '/snaps/carapuce.png',
      new Date(),
      144,
    ).withLocation('Pokéball du milieu'),

    new FaceSnap(
      'salamèche',
      'type feu',
      '/snaps/salameche.png',
      new Date(),
      57,
    ).withLocation('Pokéball de droite'),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
}
