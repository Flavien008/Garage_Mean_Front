import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-basic-elements',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbDropdownModule, ColorPickerModule],
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss'],
})
export default class BasicElementsComponent implements OnInit{
    voitures : any ;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        var token : string;
        var iduser : string;
        if(localStorage.getItem('user')!=null){
            token = JSON.parse(localStorage.getItem('user')).token;
            iduser = JSON.parse(localStorage.getItem('user')).userId;

        }
        this.fetchData(iduser,token);
    }
    
    fetchData(id:string,token: string) {
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
    });
    this.http.get(`${environment.baseUrl}/utilisateur/${id}`, {headers}).subscribe(data => {
        this.voitures = data;
    });
    }
      
}
