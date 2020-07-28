import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LeadsComponent } from "./leads/leads.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/leads",
    pathMatch: "full",
  },
  {
    path: "leads",
    component: LeadsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
