import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-amount',
  templateUrl: './tip-amount.component.html',
  styleUrls: ['./tip-amount.component.css']
})
export class TipAmountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tipAmount = 20;

}
