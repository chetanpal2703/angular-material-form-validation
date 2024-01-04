import { Directive ,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    console.log("initial value",initialValue);
    console.log(initialValue.replace(/[^0-9]*/g, ''),"here");
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    console.log(this.el.nativeElement.value ,"after input")
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
