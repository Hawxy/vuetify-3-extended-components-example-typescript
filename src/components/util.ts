/* eslint-disable @typescript-eslint/no-explicit-any */

/* Based on https://stackoverflow.com/a/74738344/2224306 */

import type { ComponentOptionsBase, DefineComponent, EmitsOptions } from 'vue';

type DefineComponentReturnType =
  | DefineComponent<any, any, any, any, any, any, any, any, any, any>
  | DefineComponent<any, any, any, any, any, any, any, any, any>;

type ExtractOptions<Props = any, Emits extends EmitsOptions = any, Defaults = any> = ComponentOptionsBase<
  Props,
  any,
  any,
  any,
  any,
  any,
  any,
  Emits,
  any,
  Defaults
>;

type PropOptionsToPropTypes<Props, Defaults> = Partial<Defaults> & Omit<Props, keyof Defaults>;

export type Props<T extends DefineComponentReturnType> = T extends ExtractOptions<infer P, any, infer D>
  ? PropOptionsToPropTypes<P, D>
  : never;

export type Except<T, K extends keyof T> = Omit<T, K>;
