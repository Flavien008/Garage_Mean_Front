import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, mergeMap } from 'rxjs';
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
        <br>
        <tr>
            <td> <b>Total</b> </td>
            <td>{{total}}</td>
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
  etat = {
    "etat" : "en cours"
  }

  total : number = 0;
 
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
        this.total = 0;
        if(this.listedetails!=null){
            for(var i = 0 ; i < this.listedetails.length; i++ ){
                this.total += Number(this.listedetails[i].prix);
            }
        }
      });

    }

    affecter(id : string){
        var token : string;
        
        if(localStorage.getItem('user')!=null){
        token = JSON.parse(localStorage.getItem('user')).token;
        console.log(token)
        }

        let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
        });
            var req1 = this.http.post(`${environment.baseUrl}/reparation/prix`,{"id" : this.id_reparation,"prix": this.total},{ headers: headers });
            var req2 = this.http.post(`${environment.baseUrl}/updateetat/${id}`,this.etat,{ headers: headers });
            //exec multiple req
            forkJoin([req1,req2]).subscribe(results => {
                console.log('manoloo prix');
            })
            this.router.navigate(['/reparation/encours']);
        this.activeModal.close();
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

            this.error=false;
            this.http.post(`${environment.baseUrl}/reparation/details`, data, { headers: headers }) 
            .subscribe(response => {
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
