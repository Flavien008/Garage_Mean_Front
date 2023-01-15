import { Component, OnInit } from '@angular/core';
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
          <label for="name">Designation</label>
          <br>
          <br>

          <input type="text" class="form-control" id="name" #name name="name">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="submitForm(name.value)">Valider</button>
    </div>
  `
})
export class FormModalComponent implements OnInit {
  name: string;
  email: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  submitForm(name) {
    console.log(name);
    this.activeModal.close();
  }
}
