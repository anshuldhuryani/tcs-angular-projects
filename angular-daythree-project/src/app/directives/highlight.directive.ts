import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {

    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'navy';
        el.nativeElement.style.color = 'white';
        el.nativeElement.style.fontSize = "28px";
    }

}