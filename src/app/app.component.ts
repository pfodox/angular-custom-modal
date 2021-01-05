import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showFirstModal = false;
  showSecondModal = false;

  openFirstModal() {
    this.showFirstModal = true;
  }

  closeFirstModal() {
    this.showFirstModal = false;
  }

  openSecondModal() {
    this.showSecondModal = true;
  }

  closeSecondModal() {
    this.showSecondModal = false;
  }
}
