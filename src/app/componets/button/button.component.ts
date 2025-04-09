import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; //we added commonModule so we can use ngStyle in the button element


@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit();
  }
}
