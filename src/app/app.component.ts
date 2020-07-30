import { Component, HostListener, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'lead-mngr';
  @HostListener('window:resize',['$event'])
  addClassOnResize(evt){
  this.handleClass();
  }

  constructor(private renderer: Renderer2) {
    console.log(environment.apiUrl);
  }

  ngOnInit(){
   this.handleClass();
  }

  handleClass(){
    const windowSize = window.innerWidth;
    console.log(windowSize)
    if(windowSize<=900){
      this.renderer.addClass(document.body, 'isPlatformMobile');
    }
    else{
      this.renderer.removeClass(document.body, 'isPlatformMobile');
    }
  }
}
