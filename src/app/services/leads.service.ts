import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";

const { apiUrl } = environment;
@Injectable({
  providedIn: "root",
})
export class LeadsService {
  constructor(private http: HttpClient) {}

  getLeads() {
    return this.http.get(`${apiUrl}/api/leads?location_string=India
    `);
  }

  postLeadsData(data){
    return this.http.post(`${apiUrl}/api/leads/`, data);
  }

  deleteLead(id){
    return this.http.delete(`${apiUrl}/api/leads/${id}/ `)
  }

  updateLeadsCommunication(id,data){
    return this.http.put(`${apiUrl}/api/mark_lead/${id}`, data);
  }
}
