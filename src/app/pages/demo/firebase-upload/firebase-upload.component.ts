import { Component, OnInit } from '@angular/core';
import { FireUploadService } from '../../../services/fire-upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cba-firebase-upload',
  templateUrl: './firebase-upload.component.html',
  styleUrls: ['./firebase-upload.component.scss'],
})
export class FirebaseUploadComponent implements OnInit {

  preview: any;
  updateImage: any;
  file: File;
  uploadedURL: string;

  constructor( public fireUpload: FireUploadService ) { }

  ngOnInit() {
    this.fireUpload.uploadURL.subscribe( url => this.verUploadedURL(url) );
  }

  verPreviewURL(event: any) {
    // console.log(event);
    this.preview = event;
  }

  verUploadedURL(url: any) {
    this.uploadedURL = url;
    // console.log(this.uploadedURL);
  }

  reset() {
    this.preview = null;
    this.file = null;
  }

  catchFile(file: File) {
    this.file = file;
    // console.log(this.file);
  }

  uploadToFire() {
    // console.log('Uploadiando');
    this.fireUpload.startUpload('cool', this.file);
  }

}
