import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';

@Component({
  selector: 'app-form-desktop',
  templateUrl: './form-desktop.component.html',
  styleUrls: ['./form-desktop.component.scss']
})
export class FormDesktopComponent implements OnInit {

  @Output() desktopToEmit = new EventEmitter<Desktop>();
  desktopTemp = new Desktop();

  constructor() { }

  ngOnInit(): void {

  }

  setDesktop(entity): void {
    this.desktopTemp = JSON.parse(JSON.stringify(entity));
  }

  sendDesktopToParent() {
    this.desktopToEmit.emit(this.desktopTemp);
}

}
