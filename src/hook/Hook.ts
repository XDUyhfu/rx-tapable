import { Callback } from "./type";

export abstract class Hook {
  abstract tap(name: string, callback: Callback): void;
  abstract call(...args: any[]): void;
}
