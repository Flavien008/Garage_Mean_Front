import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [CommonModule, SharedModule,NgxDropzoneModule],
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],


})
export default class AjoutComponent {
  files: File[] = [];

  base64textString: String="";

  ngOnInit() {
    console.log('Initialisation du composant');
  }

	onSelect(event) {
		console.log(event);
    console.log("atoooooo");
		this.files.push(...event.addedFiles);
	}

  onFileChange(event) {
    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
}
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.base64textString = reader.result;
    console.log(this.base64textString);
  }

	onRemove(event) {
		console.log(event);
    console.log("atoooooo rayyy");
		this.files.splice(this.files.indexOf(event), 1);
	}
}
