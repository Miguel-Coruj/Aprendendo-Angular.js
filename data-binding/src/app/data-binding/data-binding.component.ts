import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://miguel-coruj.github.io'
  urlImg: string = 'http://lorempixel.com/400/200/nature/'

  valueInput: string = ''

  isMouseOver: boolean = false

  name: string = 'abc'

  person: any = {
    name: 'Irineu',
    age: '20',
  }

  titleTest: string = 'Titulo de teste'
  
  buttonClicked() {
    alert(`Você disse ${this.valueInput}`)
  }

  onKeyUp(event: KeyboardEvent) {
    this.valueInput = (<HTMLInputElement>event.target).value
  }

  OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onNewValue(event: any) {
    console.log(event.newValue)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
