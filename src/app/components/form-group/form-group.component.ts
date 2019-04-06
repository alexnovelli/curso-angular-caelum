import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  private idCampo = '';

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const input:HTMLInputElement = this.elemento.nativeElement.querySelector('input');
    this.idCampo = input.name;
  }


}
