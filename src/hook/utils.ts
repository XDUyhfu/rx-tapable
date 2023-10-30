import { isObservable, ObservableInput, of } from "rxjs";
import { PlainResult, ReturnResult } from "./type";

export const isPlainObject = (value: any) =>
  Object.prototype.toString.call(value) === "[object Object]" &&
  value?.constructor === Object;
const isFunction = (value: any) =>
  Object.prototype.toString.call(value) === "[object Function]";
const isObject = (value: any) =>
  Object.prototype.toString.call(value) === "[object Object]" &&
  !isObservable(value);
export const isPlainResult = (result: ReturnResult): result is PlainResult =>
  ["number", "boolean", "string", "undefined"].includes(typeof result) ||
  isPlainObject(result) ||
  Array.isArray(result) ||
  result === null;
const isNotObservable = (value: any) =>
  isPlainResult(value) || isObject(value) || isFunction(value);
export const transformResultToObservable = (
  result: ReturnResult,
): ObservableInput<any> =>
  isNotObservable(result) ? of(result) : (result as ObservableInput<any>);
