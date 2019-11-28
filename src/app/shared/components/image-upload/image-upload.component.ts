import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cba-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  @ViewChild('inputFile', { static: false }) inputFile: ElementRef;
  @Output() previewURL = new EventEmitter<any>();
  @Output() fileSelected = new EventEmitter<File>();

  file: File;
  isHovering: boolean;
  previewPath: any;

  constructor( private sanitizer: DomSanitizer ) { }

  ngOnInit() {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  getFile(event: FileList) {

    this.file = event.item(0);
    // Client-side validation example
    if (this.file.type.split('/')[0] !== 'image') {
      // TODO - Enviar por toastr
      console.error('Formato de imagen no valido :( ');
      return;
    }

    this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(this.file)));
    this.previewURL.emit(this.previewPath);
    this.fileSelected.emit(this.file);
    this.inputFile.nativeElement.value = '';
  }

}
