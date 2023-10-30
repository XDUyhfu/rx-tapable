import { Hook } from "./Hook.ts";
import { Callback } from "./type";
import { defer, from, last, mergeScan } from "rxjs";
import { transformResultToObservable } from "./utils";

export class WaterfallHook extends Hook {
  private callbacks: Callback[] = [];
  public call(arg?: any, callback?: Callback): void {
    from(this.callbacks)
      .pipe(
        mergeScan(
          (acc, cb) => {
            return defer(() => transformResultToObservable(cb(acc)));
          },
          arg,
          1,
        ),
        last(),
      )
      .subscribe(callback);
  }

  public tap(_name: string, callback: Callback): void {
    this.callbacks.push(callback);
  }
}
