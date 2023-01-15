import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [CommonModule, SharedModule],
  styleUrls: ['./details.css'],
  template: `
    <div class="modal-header">
        <h4 class="modal-title">Details réparation</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <div class="row">
        <div class="col-xl-12">
                  <div class="table-responsive">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Designation</th>
                            <th>Prix</th>
                            <th>Avancement</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Graissage</td>
                            <td>1 000 Ar</td>
                            <td> 30 % <ngb-progressbar type="text-primary" height="7px" [value]="100"></ngb-progressbar></td>
                        </tr>
                        <tr>
                            <td>Graissage</td>
                            <td>1 000 Ar</td>
                            <td> 30 % <ngb-progressbar type="text-primary" height="7px" [value]="100"></ngb-progressbar></td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
        </div>
        </div>

    </div>
  
  `
})
export class DetailsModalCompoment implements OnInit {
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
