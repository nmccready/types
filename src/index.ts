/*
Shameless copy
https://stackoverflow.com/questions/41285211/overriding-interface-property-type-defined-in-typescript-d-ts-file#answer-55032655

ALL credit goes to Qwerty

Example:

interface OriginalType {
  a: string;
  b: boolean;
  c: number;
}

type ModifiedType  = Modify<OriginalType , {
  a: number;
  b: number;
}>

-- ModifiedType = { a: number; b: number; c: number; }
*/
export type Modify<T, R> = Omit<T, keyof R> & R;

export const cast = <T>(_: any) => (_ as unknown) as T;
