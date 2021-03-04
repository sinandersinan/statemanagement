import {Injectable} from '@angular/core';
import {MyState} from './shared/myState';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: MyState = {
    counter: 0,
    anotherProperty: 'foobar'
  };

  state$: BehaviorSubject<MyState> = new BehaviorSubject<MyState>(this.state);

  dispatch(message: string): void {
    this.state = this.calculateState(this.state, message);
    this.state$.next(this.state);
  }

  calculateState(state: MyState, message: string): MyState {
    switch (message) {
      case 'INCREMENT': {
        return {
          ...state,
          counter: state.counter + 1
        };
      }
      case 'DECREMENT': {
        return {
          ...state,
          counter: state.counter - 1
        };
      }
      case 'RESET': {
        return {
          ...state,
          counter: 0
        };
      }
      default:
        return state;
    }
  }
}
