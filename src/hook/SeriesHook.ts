import { Hook } from "./Hook";
import { Callback } from "./type";
import { concatMap, from, toArray } from "rxjs";

export class SeriesHook extends Hook {
  private callbacks: Callback[] = [];

  public call(arg?: any, callback?: Callback): void {
    from(this.callbacks)
      .pipe(
        concatMap(async (cb) => cb(arg)),
        toArray(),
      )
      .subscribe(callback);
  }

  public tap(_name: string, callback: Callback): void {
    this.callbacks.push(callback);
  }
}
