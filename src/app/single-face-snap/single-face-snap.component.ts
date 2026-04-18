import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  constructor(
    private readonly faceSnapService: FaceSnapsService,
    private readonly route: ActivatedRoute,
  ) {}

  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unsnap!';
  }

  unSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
  }

  private prepareInterface(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap(): void {
    const faceSnapId: string = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
