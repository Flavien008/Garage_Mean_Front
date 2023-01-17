import { ObjectService } from './../../../../../_services/objectService';
import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

    constructor(public activeModal: NgbActiveModal,private obj_serv : ObjectService) { }

    ngOnInit() {
    }

    submitForm(date:string,designation:any) {
        // console.log(date + designation);
        var data = {
            "tablename":"reparation",
            "idvoiture": this.id_voiture,
            "designation": designation,
            "date_depot": date
        }
        this.obj_serv.sendPostRequest(data,'object');
        // this.activeModal.close();
    }
}
