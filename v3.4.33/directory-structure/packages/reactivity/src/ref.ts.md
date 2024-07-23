# `ref.ts`

## `trackRefValue()`

When a reactive reference is accessed, this function ensures that the currently
active effect (e.g, a component render function) is registered as a dependency
of the `ref`. This way, any change to the `ref` will trigger the re-execution 
of the active effect.

```ts
export function trackRefValue(ref: RefBase<any>) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref)
    trackEffect(
      activeEffect,
      ref.dep ||
        (ref.dep = createDep(
          () => (ref.dep = undefined),
          ref instanceof ComputedRefImpl ? ref : undefined,
        )),
      __DEV__
        ? {
            target: ref,
            type: TrackOpTypes.GET,
            key: 'value',
          }
        : void 0,
    )
  }
}
```

- [`toRaw()` function](./reactive.ts#toRaw)
- [`createDep()` function](./dep.ts#createDep)

### `void 0`

This expression is used as a safer `undefined`. [Read more](https://stackoverflow.com/questions/5716976/javascript-undefined-vs-void-0)


## `isRef()`

```typescript
export function isRef<T>(r: Ref<T> | unknown): r is Ref<T>
export function isRef(r: any): r is Ref {
  return !!(r && r.__v_isRef === true)
}
```

### `r is Ref`

`r is Ref` is a type predicate [Read more](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).