import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { FormModalComponent } from "./pop-up/FormPopupComponent";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalCompoment } from './pop-up/DetailsPopupCompoment';


@Component({
    selector: 'app-tbl-bootstrap',
    standalone: true,
    templateUrl: './fiche-voiture.component.html',
    styleUrls: ['./fiche-voiture.component.scss'],
    imports: [CommonModule, SharedModule]
})
export default class FicheVoitureCompoment implements OnInit{
    idVoiture : string ; 

    constructor (private route: ActivatedRoute,private modalService: NgbModal){}
    ngOnInit(): void {
        this.idVoiture = this.route.snapshot.params['id'];
    }

    openModal() {
      this.modalService.open(FormModalComponent);
    }

    openDetails() {
        this.modalService.open(DetailsModalCompoment);
      }
}
