import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0

  @Output() newValue = new EventEmitter()

  addOrSubtract(prop: boolean) {
    prop ? this.value++ : this.value--

    this.newValue.emit({newValue: this.value})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
