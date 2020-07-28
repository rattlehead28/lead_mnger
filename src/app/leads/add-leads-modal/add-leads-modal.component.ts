import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { LeadsService } from "src/app/services/leads.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-add-leads-modal",
  templateUrl: "./add-leads-modal.component.html",
  styleUrls: ["./add-leads-modal.component.scss"],
})
export class AddLeadsModalComponent implements OnInit {
  @Input("displayModal") displayModal: boolean;
  @Output() closeModalEvent = new EventEmitter();
  title: string;
  leadsData: FormGroup;
  constructor(
    private fb: FormBuilder,
    private leadsService: LeadsService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.leadsData = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.required],
      mobile: ["", Validators.required],
      location_type: ["", Validators.required],
      location_string: ["", Validators.required],
    });
  }

  //emitting event to parent component
  closeModal() {
    this.leadsData.reset();
    this.closeModalEvent.next();
  }

  postData() {
    this.spinner.show();
    this.leadsService.postLeadsData(this.leadsData.value).subscribe(
      (res) => {
        this.spinner.hide();
        this.displayCustomMessage("success", "Lead added successfully");
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
