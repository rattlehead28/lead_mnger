//-------Modules--------------
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
//-----------------------------

//--------Components------------
import { AppComponent } from "./app.component";
import { LeadsComponent } from "./leads/leads.component";
import { AddLeadsModalComponent } from "./leads/add-leads-modal/add-leads-modal.component";
import { LeadsCommunicationModalComponent } from "./leads/leads-communication-modal/leads-communication-modal.component";
//------------------------------

//-------NgPrime Modules/Services---------
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
//-------------------------------

import { NgxSpinnerService } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    AddLeadsModalComponent,
    LeadsCommunicationModalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    //NgPrime Modules
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [
    NgxSpinnerService,
    // NgPrime Services
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
