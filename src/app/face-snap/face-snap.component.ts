import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  buttonText!: string;
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}
