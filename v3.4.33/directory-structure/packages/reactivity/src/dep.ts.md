# `dep.ts`

Module to manage and track dependencies and their associated computations within Vue reactive system.

```typescript
type Dep = Map<ReactiveEffect, number> & {
  cleanup: () => void
  computed?: ComputedRefImpl<any>
}
```

## `createDep`

```typescript
const createDep: (cleanup: () => void, computed?: ComputedRefImpl<any>) => Dep
```

