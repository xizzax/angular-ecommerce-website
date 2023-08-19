import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css']
})
export class ToggleBtnComponent {
  @Input() isToggled!: boolean;
}
