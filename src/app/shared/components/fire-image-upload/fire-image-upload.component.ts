import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { finalize, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cba-fire-image-upload',
  templateUrl: './fire-image-upload.component.html',
  styleUrls: ['./fire-image-upload.component.scss']
})
export class FireImageUploadComponent implements OnInit {

  @ViewChild('inputFile', { static: false })
  inputFile: ElementRef;

  @Input() path: 'perfil' | 'otros' = 'perfil';
  @Output() previewURL = new EventEmitter<any>();
  @Output() uploadURL = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();

  file: File;
  isHovering: boolean;  // State for dropzone CSS toggling
  previewPath: any;

  task: AngularFireUploadTask; // Main task
  percentage: Observable<number>; // Progress monitoring
  snapshot: Observable<any>;
  downloadURL: Observable<string>; // Download URL


  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.uploadURL.subscribe( resp => console.log(resp));
  }

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
  }

  resetFile() {
    this.inputFile.nativeElement.value = '';
    this.file = null;
    this.previewPath = '';
    this.reset.emit();
  }

  startUpload(file: File) {

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    // TODO - implementar el filenaming
    const path = `${this.path}/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    // TODO - hacer algo con esta metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task - Aca arranca la subida del archivo.
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          this.db.collection(this.path).add({ path, size: snap.totalBytes }); // Update firestore on completion
        }
      }),
    );

    // The file's download URL
    this.snapshot.pipe(
      finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL()
        .pipe(tap((url) => this.uploadURL.emit(url)))),
    ).subscribe();

  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }



}
