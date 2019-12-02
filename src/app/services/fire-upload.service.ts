import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root',
})
export class FireUploadService {

  task: AngularFireUploadTask; // Main task
  percentage: Observable<number>; // Progress monitoring
  snapshot: Observable<any>;
  downloadURL: Observable<string>; // Download URL
  uploadURL = new EventEmitter<any>();

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private toastr$: ToastrService) { }


  startUpload(folder: string, file: File) {

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    const path = `${folder}/${new Date().getTime()}_${file.name}`; // The storage path // TODO - implementar el filenaming

    // const customMetadata = { app: 'My AngularFire-powered PWA!' };  // Totally optional metadata // TODO - hacer algo con esta metadata
    // this.task = this.storage.upload(path, file, { customMetadata });

    this.task = this.storage.upload(path, file); // The main task - Aca arranca la subida del archivo.

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // this.db.collection(folder).add({ path, size: snap.totalBytes }); // Update firestore on completion
          this.toastr$.showToast('success', 'Listo!', 'La imagen ha sido subida correctamente');
        }
      }),
    );

    // The file's download URL
    this.snapshot.pipe(
      finalize(
        () => {
          this.downloadURL = this.storage.ref(path).getDownloadURL();
          this.downloadURL.subscribe( url => this.uploadURL.emit(url));
        },
      ),
    )
    .subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  deleteFile(link: string): Promise<any> {
    return this.storage.storage.refFromURL(link).delete();
      // .then( () => this.toastr$.showToast('warning', 'Imagen eliminada', 'La imagen ha sido eliminada correctamente'))
      // .catch( err => this.toastr$.showToast('danger', 'Error', err.message));
  }

}
