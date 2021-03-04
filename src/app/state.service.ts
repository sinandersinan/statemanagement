import {Injectable} from '@angular/core';
import {MyState} from './shared/myState';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: MyState = {
    counter: 0,
    anotherProperty: 'foobar'
  };

  incrementCounter(): void {
    this.state.counter++;
  }

  constructor() {
  }
}
