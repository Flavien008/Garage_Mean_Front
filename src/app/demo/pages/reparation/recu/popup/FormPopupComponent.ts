import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

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
                    <input type="text" class="form-control" id="designation" #designation>
            </div>
                <div class="form-group">
                <label for="name">Prix</label>
                <br>
                    <input type="number" class="form-control" id="prix" #prix>
            </div>
        </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="submitForm(designation.value,prix.value)">Ajouter</button>       
    </div>
    <div class="table-responsive">
    <div class="table-responsive">
    <table class="table table-hover">
    <thead>
        <tr>
            <th>Designation</th>
            <th>Prix</th>
            
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let liste of listedetails">
            <td>{{ liste.designation }}</td>
            <td>{{ liste.prix }}</td>
            
        </tr>

    </tbody>
    </table>
</div>
  </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)= "affecter(reparation._id)" >Valider</button>       
    </div>
  `
})

export class RecuModalComponent implements OnInit {
  listedetails : any;
  reparation : any;
  form: any;
 
  @Input() id_reparation: any;
    loading = false;
    error = false;


    constructor(public activeModal: NgbActiveModal,private http: HttpClient) { }

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
      // this.router.navigate(['/voiture/list']);
      this.activeModal.close();
    });
  }
  
  submitForm(designation:string,prix:any) {
    var token : string;
    if(localStorage.getItem('user')!=null){
    token = JSON.parse(localStorage.getItem('user')).token;
let headers = new HttpHeaders({
    'Authorization': 'Bearer ' + token
});
var data = {
  "id_reparation":this.id_reparation,
  "designation": designation,
  "prix": prix,
  "avancement" : 0
}

if(designation!=''&&prix!=''){
  var etat = {
    "etat" : "en cours"
  }
    this.error=false;
    this.http.post(`${environment.baseUrl}/reparation/details`, data, { headers: headers }) 
      .subscribe(response => {
        console.log(response);
        this.loading = false;
        this.fetchData(token);
      });
    }
    else{
        this.error=true;
        this.loading = false;
    }
}
}
}
