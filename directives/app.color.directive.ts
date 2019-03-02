import {
  Directive,
  Input,
  ElementRef,
  Renderer,
  HostListener
} from "@angular/core";
// the directive will be used as attribnute and property binding
// so selector is used in [] (syntax for PropertyBinding)
@Directive({
  selector: "[setcolor]"
})
export class ColorDirective {
  // ctor for DOM integartion (it will be used in DOM tree)
  constructor(private ele: ElementRef, private renderer: Renderer) {}

  // member to accept data from DOM container element of the directive
  // the member 'setcolor' is mapped wtih the selector
  @Input("setcolor") setcolor: string;

  // the logic method
  private applyColor(color: string): void {
    this.renderer.setElementStyle(
      this.ele.nativeElement,
      "backgroundColor",
      color
    );
  }
  // event hosting
  @HostListener("mouseenter")
  onMouseEnter() {
    this.applyColor(this.setcolor || "magenta");
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.applyColor(null);
  }
}
