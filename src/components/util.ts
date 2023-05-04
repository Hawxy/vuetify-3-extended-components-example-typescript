/* Credits to Bill Gouveros for the original version https://stackoverflow.com/a/74738344/2224306 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentOptionsBase, DefineComponent } from 'vue';

type DefineComponentReturnType = DefineComponent<any, any, any, any, any, any, any, any, any, any>

type PropOptionsToPropTypes<Props, Defaults> = Partial<Defaults> & Omit<Props, keyof Defaults>;

export type Props<T extends DefineComponentReturnType> =
  T extends ComponentOptionsBase<
    infer P,
    infer _B,
    infer _D,
    infer _C,
    infer _M,
    infer _Mixin,
    infer _Extends,
    any,
    any,
    infer Defaults
  >
  ? PropOptionsToPropTypes<P, Defaults>
  : never;

export type Except<T, K extends keyof T> = Omit<T, K>;
