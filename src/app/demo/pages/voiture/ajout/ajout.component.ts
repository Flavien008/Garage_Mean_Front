import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [CommonModule, SharedModule,NgxDropzoneModule],
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],


})
export default class AjoutComponent {
  constructor(private http: HttpClient) {}
  files: File[] = [];

  base64textString: string="";

  formData = {
    id_utilisateur: '',
    type: '',
    modele: '',
    matriculation: '',
    img: ''
  };

  ngOnInit() {
    console.log('Initialisation du composant');
  }

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

  onFileChange(event) {
    const files = event.addedFiles;
    console.log("miov a eto");
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
    this.formData.img= this.base64textString;
    console.log(this.base64textString);
  }

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  onSubmit() {
    var token : string;
    var iduser : string;
    if(localStorage.getItem('user')!=null){
        token = JSON.parse(localStorage.getItem('user')).token;
        iduser = JSON.parse(localStorage.getItem('user')).userId;
        this.formData.id_utilisateur=iduser;
    }
    console.log(this.formData)
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    this.http.post(`${environment.baseUrl}/voitures`, this.formData, { headers: headers }) 
      .subscribe(response => {
        console.log(response);
      });
  }
}
