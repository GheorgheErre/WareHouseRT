import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';

@Component({
  selector: 'app-form-desktop',
  templateUrl: './form-desktop.component.html',
  styleUrls: ['./form-desktop.component.scss']
})
export class FormDesktopComponent implements OnInit {

  @Input() desktop : Desktop;
  @Output() desktopToEmit = new EventEmitter<Desktop>();

  constructor() { }

  ngOnInit(): void {
  }

  sendDesktopToParent() {
    this.desktopToEmit.emit(this.desktop);
}

}
