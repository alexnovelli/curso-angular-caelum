import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {

  @Input() emailConteudo: Email;
  @Output() remover = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem(){
    this.remover.emit({emailId: this.emailConteudo.id});
  }

}
