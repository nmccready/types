# @znemz/types

## ModifiedType

```ts
interface OriginalType {
  a: string;
  b: boolean;
  c: number;
}

type ModifiedType = Modify<
  OriginalType,
  {
    a: number;
    b: number;
  }
>;

// ModifiedType = { a: number; b: number; c: number; }
```

## cast

Syntax sugar to force a type casting to unknown and then to desired type.

```ts
  type A;
  type B;

  const b:B = ....
  const bIsNowA = cast<A>(b);
```

### External modules

- ["index"](modules/_index_.md)
