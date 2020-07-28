import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LeadsService } from "src/app/services/leads.service";
import { MessageService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-leads-communication-modal",
  templateUrl: "./leads-communication-modal.component.html",
  styleUrls: ["./leads-communication-modal.component.scss"],
})
export class LeadsCommunicationModalComponent implements OnInit {
  @Input("displayModal") displayModal: boolean;
  @Input("leadId") leadId;
  @Input("communication") communication;
  @Output() closeModalEvent = new EventEmitter();
  constructor(
    private leadsService: LeadsService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {}

  //emitting event to parent component
  closeModal() {
    this.closeModalEvent.next();
  }

  postData() {
    this.spinner.show();
    this.leadsService
      .updateLeadsCommunication(this.leadId, { communication: this.communication })
      .subscribe(
        (res) => {
          this.spinner.hide();
          this.displayCustomMessage(
            "success",
            "Communication updated successfully"
          );
          this.closeModal();
        },
        (err) => {
          this.spinner.hide();
          this.displayCustomMessage("error", "Some error occurred");
        }
      );
  }

  displayCustomMessage(type, message) {
    this.messageService.add({
      severity: type,
      summary: message,
    });
  }
}
