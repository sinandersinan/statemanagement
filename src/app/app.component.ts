import { Component } from '@angular/core';
import {StateService} from './state.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'statemanagement';

  counter$;

  constructor(public service: StateService) {
    this.counter$ = this.service.state$.pipe(
      map(state => state.counter)
    );
  }
}
