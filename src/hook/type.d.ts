import { ObservableInput } from "rxjs";

export type PlainResult =
  | Record<string, any>
  | number
  | string
  | boolean
  | undefined
  | null;

export type RxResult = ObservableInput<any>;
export type ReturnResult = PlainResult | RxResult | void;
export type Callback = (arg: any) => ReturnResult;
