import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private rootElement;

  constructor(private element: ElementRef) {
    this.rootElement = $(this.element.nativeElement);
   }

  ngOnInit() {
    const btn =  this.rootElement.find('button');
    btn.kendoButton();
    btn.click(function (){
      kendo.alert('It\'s Work, Message from kendo-ui');
    });
  }

  disableButton() {
    const bt = new kendo.ui.Button(this.rootElement.find('button'));
    bt.enable(false);
  }
}
