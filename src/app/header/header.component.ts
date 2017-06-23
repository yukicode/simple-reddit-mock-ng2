import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Simple Reddit</a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {
}
