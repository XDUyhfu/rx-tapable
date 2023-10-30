import { Hook } from "./Hook";
import { Callback } from "./type";
import { catchError, EMPTY, from, mergeMap, toArray } from "rxjs";

export class ParallelHook extends Hook {
  private callbacks: Callback[] = [];

  constructor(private concurrent: number = Infinity) {
    super();
  }

  public call(arg?: any, callback?: Callback): void {
    from(this.callbacks)
      .pipe(
        mergeMap(async (cb) => cb(arg), this.concurrent),
        toArray(),
        catchError(() => EMPTY),
      )
      .subscribe(callback);
  }

  public tap(_name: string, callback: Callback): void {
    this.callbacks.push(callback);
  }
}
