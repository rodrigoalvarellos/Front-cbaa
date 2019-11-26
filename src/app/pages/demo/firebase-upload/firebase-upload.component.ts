import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cba-firebase-upload',
  templateUrl: './firebase-upload.component.html',
  styleUrls: ['./firebase-upload.component.scss'],
})
export class FirebaseUploadComponent implements OnInit {

  preview: any;
  updateImage: any;

  constructor() { }

  ngOnInit() {

  }

  verPreviewURL(event: any) {
    console.log(event);
    this.preview = event;
  }

  verUploadedURL(event: any) {
    console.log(event);
    this.updateImage = event;
  }

  reset() {
    this.preview = null;
  }

}
