import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['.toCapitalize{text-transform: capitalize}']
})
export class FormGroupComponent implements OnInit {

  private idCampo = '';

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const input:HTMLInputElement = this.elemento.nativeElement.querySelector('input');
    const label:HTMLElement = this.elemento.nativeElement.querySelector('label');
    this.idCampo = input.name;
    label.classList.add('toCapitalize');
  }


}
