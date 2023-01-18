import { ObjectService } from './../../../../../_services/objectService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-form-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Saisie nouvelle réparation</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <form>
            <div class="form-group">
                <label for="name">Date depot</label>
                <br>
                    <input type="date" class="form-control" id="name" #date>
            </div>
                <div class="form-group">
                <label for="name">Designation</label>
                <br>
                    <input type="text" class="form-control" id="designation" #designation>
            </div>
        </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="submitForm(date.value,designation.value)">Valider</button>       
    </div>
  `
})

export class FormModalComponent implements OnInit {
    @Input() id_voiture: any;
    loading = false;
    error = false;


    constructor(public activeModal: NgbActiveModal,private dataService: DataService) { }

    ngOnInit() {
    }

    submitForm(date:string,designation:any) {
            var data = {
                "tablename":"reparation",
                "idvoiture": this.id_voiture,
                "designation": designation,
                "date_depot": date
            }
            console.log(data);
            var token : string;
            if(localStorage.getItem('user')!=null){
            token = JSON.parse(localStorage.getItem('user')).token;
        console.log(data)
        let headers = new HttpHeaders({
            'Authorization': 'Bearer ' + token
        });
    
        if(data.designation!=''&&data.date_depot!=''){
            this.error=false;
            this.dataService.addData(`${environment.baseUrl}/object`,data, {headers: headers })
            this.loading = false;
            this.dataService.fetchData(`${environment.baseUrl}/reparation/${this.id_voiture}`,{headers})
            }
            else{
                this.error=true;
                this.loading = false;
            }
        }
            this.activeModal.close();
    }
}
