# `constants.ts`

## ReactiveFlags

Used to define special properties or flags that the reactivity system attaches 
to reactive objects.

```typescript
export enum ReactiveFlags {
  SKIP = '__v_skip',
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly',
  IS_SHALLOW = '__v_isShallow',
  RAW = '__v_raw',
}
```

### SKIP `__v_skip`

### IS_REACTIVE `__v_isReactive`

### IS_READONLY  `__v_isReadOnly`

### IS_SHALLOW `__v_isShallow`

### RAW `__v_raw`


