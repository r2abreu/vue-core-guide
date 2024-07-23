# `reactive.ts`

### `toRaw()`

The `toRaw` function retrieves the original, non-reactive version of a reactive
Proxy created with the `reactive`, `shallowReactive` or `shallowReadonly` 
functions. 

It can be used to temporarily read a value without triggering any reactive side
effects.

```typescript
export function toRaw<T>(observed: T): T {
  const raw = observed && (observed as Target)[ReactiveFlags.RAW]
  return raw ? toRaw(raw) : observed
}
```

[ReactiveFlags enum](./constants.ts#reactiveflags)