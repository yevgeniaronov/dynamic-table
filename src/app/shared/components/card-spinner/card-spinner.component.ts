import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-spinner',
  templateUrl: './card-spinner.component.html',
  styleUrls: ['./card-spinner.component.scss']
})
export class CardSpinnerComponent implements OnInit {
  @Input() isLoading: boolean;
  constructor() {}

  ngOnInit() {}
}
