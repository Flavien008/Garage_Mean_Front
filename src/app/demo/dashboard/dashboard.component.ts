import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

declare const AmCharts: any;

import '../../../assets/charts/amchart/amcharts.js';
import '../../../assets/charts/amchart/gauge.js';
import '../../../assets/charts/amchart/serial.js';
import '../../../assets/charts/amchart/light.js';
import '../../../assets/charts/amchart/pie.min.js';
import '../../../assets/charts/amchart/ammap.min.js';
import '../../../assets/charts/amchart/usaLow.js';
import '../../../assets/charts/amchart/radar.js';
import '../../../assets/charts/amchart/worldLow.js';
import '../../../../node_modules/morris.js/morris.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { MorrisJsModule } from 'angular-morris-js';
import { catchError, of, tap } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule,MorrisJsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './crt-morris.component.scss',
  '../../../../node_modules/morris.js/morris.css'],
})
export default class DashboardComponent implements OnInit {
    lineSmoothMorrisOption: any;
    lineSmoothMorrisData: any;
    date = new Date();
    currentMonth: string;
    startDate: Date;
    endDate: Date;
    token : string ;
    ben : any = 0;
    journalier : any = 0;

  constructor(private http: HttpClient) {}



  async ngOnInit() {
        const year = this.date.getFullYear();
        const mm = this.date.getMonth();
        const month = ('0' + (this.date.getMonth() + 1)).slice(-2);
        this.currentMonth = `${year}-${month}`;
        this.startDate = new Date(year, mm, 1);
        this.endDate = new Date(year, mm + 1, 0);
        console.log(this.currentMonth);
        this.benefice(this.date, this.date).then(response => {
            this.ben = response;
        });
        this.benefice(this.date, this.date).then(response => {
            this.journalier = response;
        });
    
        this.lineSmoothMorrisData = [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75, b: 65 },
        { y: '2008', a: 50, b: 40 },
        { y: '2009', a: 75, b: 65 },
        { y: '2010', a: 50, b: 40 },
        { y: '2011', a: 75, b: 65 },
        { y: '2012', a: 100, b: 90 },
        ];

        this.lineSmoothMorrisOption = {
        xkey: 'y',
        redraw: true,
        resize: true,
        ykeys: ['a', 'b'],
        hideHover: 'auto',
        responsive: true,
        labels: ['Entrer', 'Sortie'],
        lineColors: ['#1de9b6', '#A389D4'],
        };
    }

    daily(date:any){
        this.benefice(date, date).then(response => {
            this.journalier = response;
            console.log('dailu'+this.journalier);
            
        });
        
    }

    changeBen(d1:any,d2:any) {
        this.benefice(d1, d2).then(response => {
            this.ben = response;
        });
    }
    
     
    async benefice(d1: any, d2: any) {
        const data = { debut: d1, fin: d2 };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };
    
        return this.http.post(`${environment.baseUrl}/benefice`, data, httpOptions)
            .pipe(
                tap((response) => console.log(response)),
                catchError((error) => {
                    console.log(error);
                    return of(error);
                })
            ).toPromise();
    }
    
  
}
