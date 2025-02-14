---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [PnpmOptionsConfiguration](./rush-lib.pnpmoptionsconfiguration.md) &gt; [strictPeerDependencies](./rush-lib.pnpmoptionsconfiguration.strictpeerdependencies.md)

## PnpmOptionsConfiguration.strictPeerDependencies property

If true, then Rush will add the "--strict-peer-dependencies" option when invoking PNPM.

<b>Signature:</b>

```typescript
readonly strictPeerDependencies: boolean;
```

## Remarks

This causes "rush install" to fail if there are unsatisfied peer dependencies, which is an invalid state that can cause build failures or incompatible dependency versions. (For historical reasons, JavaScript package managers generally do not treat this invalid state as an error.)

The default value is false. (For now.)

