import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { FormModalComponent } from "./pop-up/FormPopupComponent";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalCompoment } from './pop-up/DetailsPopupCompoment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
    selector: 'app-tbl-bootstrap',
    standalone: true,
    templateUrl: './fiche-voiture.component.html',
    styleUrls: ['./fiche-voiture.component.scss'],
    imports: [CommonModule, SharedModule,NgxPaginationModule]
})
export default class FicheVoitureCompoment implements OnInit{
    idVoiture : string ; 
    reparations : any ;
    p : any ;

    constructor (private route: ActivatedRoute,private modalService: NgbModal,private http: HttpClient){}
    ngOnInit(): void {
        this.idVoiture = this.route.snapshot.params['id'];
        var token : string;
        if(localStorage.getItem('user')!=null){
            token = JSON.parse(localStorage.getItem('user')).token;
        }
        this.fetchData(this.idVoiture,token);
    }

    fetchData(idVoiture:string,token: string) {
      const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + token
      });
      this.http.get(`${environment.baseUrl}/reparation/${idVoiture}`, {headers}).subscribe(data => {
        console.log(data);
          this.reparations = data;
      });
      }

    openModal() {
      this.modalService.open(FormModalComponent);
    }

    openDetails() {
        this.modalService.open(DetailsModalCompoment);
      }
}
