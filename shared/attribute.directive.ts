import { Directive, Renderer, OnInit, ElementRef, HostListener} from '@angular/core';


@Directive({
    selector:'[myDirective]'
})
export class AttributeDirective implements OnInit {
    // Inject Renderer and Element Reference
    constructor(private renderer: Renderer, private elRef: ElementRef ) { }

    ngOnInit() {
        //this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }

    // Reacting to elements through @HostListener
    @HostListener('mouseenter')  onmouseover(eventData: Event) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    }

      @HostListener('mouseleave')  onmouseleave(eventData: Event) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    }



}