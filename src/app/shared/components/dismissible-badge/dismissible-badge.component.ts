import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dismissible-badge',
  templateUrl: './dismissible-badge.component.html',
  styleUrls: ['./dismissible-badge.component.scss']
})
export class DismissibleBadgeComponent implements OnInit {
  @Input() content: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  onDismiss() {
    this.el.nativeElement.remove();
  }
}
