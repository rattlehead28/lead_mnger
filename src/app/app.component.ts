import { Component, HostListener, Renderer2, ViewChild, ElementRef } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router, Event, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "lead-mngr";
  showLoader = true;
  @ViewChild('loaderRef',{static:false}) loaderRef: ElementRef;
  @HostListener("window:resize", ["$event"])
  addClassOnResize(evt) {
    this.handleClass();
  }

  constructor(private renderer: Renderer2, private router: Router) {
    console.log(environment.apiUrl);
  }

  ngOnInit() {
    console.log(window)
    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log('start')
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          console.log('end')
      }

  });


    this.handleClass();
  }

  ngAfterViewInit(){
    if(window.innerWidth){
      this.renderer.setStyle(this.loaderRef.nativeElement,'visibility','hidden');
    }
    
  }

  handleClass() {
    const windowSize = window.innerWidth;
    console.log(windowSize);
    if (windowSize <= 900) {
      this.renderer.addClass(document.body, "isPlatformMobile");
    } else {
      this.renderer.removeClass(document.body, "isPlatformMobile");
    }
  }
}
