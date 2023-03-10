import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { ToggleFullScreenDirective } from './theme/shared/components/full-screen/toggle-full-screen';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListeComponent } from './pages/reparation/liste/liste.component';
import { RecuModalComponent } from './demo/pages/reparation/recu/popup/FormPopupComponent';
import { EncoursModalComponent } from './demo/pages/reparation/encours/popup/FormPopupComponent';
import { TermineModalComponent } from './demo/pages/reparation/termine/popup/FormPopupComponent';
import { DataService } from './_services/data.service';



@NgModule({
    declarations: [
        AppComponent,
        GuestComponent,
        AdminComponent,
        ConfigurationComponent,
        NavBarComponent,
        NavigationComponent,
        NavLeftComponent,
        NavRightComponent,
        NavContentComponent,
        NavLogoComponent,
        NavCollapseComponent,
        NavGroupComponent,
        NavItemComponent,
        NavSearchComponent,
        ToggleFullScreenDirective,
        ListeComponent,
        RecuModalComponent,
        EncoursModalComponent,
        TermineModalComponent
      


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    NgxDropzoneModule,
    NgxPaginationModule,
    
 
    ],
  providers: [NavigationItem],
  bootstrap: [AppComponent],
})
export class AppModule {}
