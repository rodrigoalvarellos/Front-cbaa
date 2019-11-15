import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FormValidationService } from '../../../services/forms-validations.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cba-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  // File Upload configs
  URL: string = 'path_to_api';
  uploader: FileUploader;
  hasDropZoneOver: boolean;  
  response: string;
  previewPath: any;

  userForm: FormGroup;

  constructor(private fb: FormBuilder, public form$: FormValidationService, private sanitizer: DomSanitizer) {
    this.createFileUpload();
  }

  ngOnInit() {
    this.crearUserForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  crearUserForm() {

    this.userForm = this.fb.group({
      nombre: new FormControl('Rodrigo', [Validators.required]),
      apellido: new FormControl('Alvarellos', [Validators.required]),
      descripcion: new FormControl('Una descripcion'),
      foto: new FormControl('url'),
    });

  }

  submitUserForm() {
    // TODO - Implementar
  }

  createFileUpload() {

    this.uploader = new FileUploader({
      url: this.URL,
      allowedMimeType: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
      maxFileSize: 5 * 1024 * 1024,
      queueLimit: 1,
      disableMultipart: true,
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date(),
          });
        });
      },

    });

    this.hasDropZoneOver = false;
    this.response = '';
    this.uploader.response.pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => this.response = res);

    this.uploader.onAfterAddingFile = (fileItem) => {
      this.previewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    };

  }

  fileOverDropZone(e: any): void {
    this.hasDropZoneOver = e;
  }



}
