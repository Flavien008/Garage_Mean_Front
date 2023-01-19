import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparationRoutingModule } from './liste/liste-reparation-routing.module';
import { RecuRoutingModule } from './recu/recu-routing.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, ReparationRoutingModule,RecuRoutingModule], 
})
export class ReparationModule {}
