import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ShimmerService } from "../services/shimmer.service";

@Component({
  selector: "app-shimmer",
  templateUrl: "./shimmer.component.html",
  styleUrls: ["./shimmer.component.scss"],
})
export class ShimmerComponent implements OnInit {
  @ViewChild("shimmerElement", { static: false }) shimmerElement: ElementRef;

  constructor(
    private shimmerService: ShimmerService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.shimmerElement.nativeElement.children);
    this.shimmerService.showShimmer.subscribe((val) => {
        this.renderer[val ? 'addClass' : 'removeClass'](this.shimmerElement.nativeElement, "animate");
        this.renderer[val ? 'setStyle' : 'removeStyle'](this.shimmerElement.nativeElement.children[0],"z-index","-1")
        this.renderer[val ? 'setStyle' : 'removeStyle'](this.shimmerElement.nativeElement.children[0],"position","relative")
    });
  }
}
