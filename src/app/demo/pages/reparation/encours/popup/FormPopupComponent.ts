import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-modal',
  template: `
  <div class="modal-header">
  <h4 class="modal-title">Modification avancement</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

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
    <tr *ngFor="let liste of listedetails">
        <td>{{ liste.designation }}</td>
        <td>{{ liste.prix }}</td>
        <td> <input
                type="range"
                class="form-control-range d-block"
                [(ngModel)]="currentValue"
                min="0" max="100" value="10"
              /></td>
        
    </tr>

</tbody>
</table>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)= "affecter(reparation._id)" >Valider</button>       
</div>
  `
})

export class EncoursModalComponent implements OnInit {
  listedetails : any;
  reparation : any;
  form = {
    etat : "terminé"
  };
  currentValue ;

  getValue() {
    console.log(this.currentValue);
  }
 
  @Input() id_reparation: any;
    loading = false;
    error = false;


    constructor(public activeModal: NgbActiveModal,private http: HttpClient,private router: Router) { }

    ngOnInit() {
      var token : string;
      console.log(this.id_reparation);
      if(localStorage.getItem('user')!=null){
        token = JSON.parse(localStorage.getItem('user')).token;
    }
    this.fetchData(token);
    }
    fetchData(token: string) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      this.http.get(`${environment.baseUrl}/reparationbyid/${this.id_reparation}`, {headers}).subscribe(data => {
        this.reparation = data;
        this.listedetails = this.reparation.details;
        console.log(this.listedetails);
      });

  }
  affecter(id : string){
    console.log(id);
    var token : string;
    
    if(localStorage.getItem('user')!=null){
      token = JSON.parse(localStorage.getItem('user')).token;
      console.log(token)
  }

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    console.log("atyyy ehh "+id)
    this.http.post(`${environment.baseUrl}/updateetat/${id}`,this.form,{ headers: headers })
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['/reparation/termine']);
      this.activeModal.close();
    });
  }

  test(data : string){
      console.log(data);
  }
  

}