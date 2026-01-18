import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  toggleSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }

    this.userHasSnapped = !this.userHasSnapped;
  }

  snap(): void {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unsnap!';
  }

  unSnap(): void {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
  }
}
