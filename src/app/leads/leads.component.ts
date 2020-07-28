import { Component, OnInit } from "@angular/core";
import { LeadsService } from "../services/leads.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";

interface ILeadInfo {
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  location_type: string;
  location_string: string;
  communication: string;
}

@Component({
  selector: "app-leads",
  templateUrl: "./leads.component.html",
  styleUrls: ["./leads.component.scss"],
})
export class LeadsComponent implements OnInit {
  leadsData: [ILeadInfo];
  //-----modals related variables----
  isAddLeadModalOpen: boolean = false;
  isUpdateModalOpen: boolean = false;
  leadCommunication: string;
  leadId: string;
  //---------------------------------
  constructor(
    private leadsService: LeadsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getLeadsData();
  }

  getLeadsData() {
    this.leadsService.getLeads().subscribe(
      (res: [ILeadInfo]) => {
        this.leadsData = res;
      },
      (err) => {
        this.displayCustomMessage("error", "Some error occurred");
      }
    );
  }

  openLeadsComunicationModal(lead) {
    const { id, communication } = lead;
    // data updated in child component
    this.isUpdateModalOpen = true;
    this.leadCommunication = communication;
    this.leadId = id;
  }

  // function called when either of the modals in child components is closed
  modalClosed() {
    this.isAddLeadModalOpen = false;
    this.isUpdateModalOpen = false;
    this.getLeadsData();
  }

  deleteLead(id) {
    this.confirmationService.confirm({
      accept: () => {
        this.spinner.show();
        this.leadsService.deleteLead(id).subscribe(
          (res) => {
            this.spinner.hide();
            this.displayCustomMessage("info", "Record Deleted");
            this.getLeadsData();
          },
          (err) => {
            this.spinner.hide();
            this.displayCustomMessage("error", "Some error occurred");
          }
        );
      },
    });
  }

  displayCustomMessage(type, message) {
    this.messageService.add({
      severity: type,
      summary: message,
    });
  }
}
