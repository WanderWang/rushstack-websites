---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [LockStepVersionPolicy](./rush-lib.lockstepversionpolicy.md) &gt; [ensure](./rush-lib.lockstepversionpolicy.ensure.md)

## LockStepVersionPolicy.ensure() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Returns an updated package json that satisfies the version policy.

<b>Signature:</b>

```typescript
ensure(project: IPackageJson, force?: boolean): IPackageJson | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  project | [IPackageJson](./node-core-library.ipackagejson.md) | input package json |
|  force | boolean | force update even when the project version is higher than the policy version. |

<b>Returns:</b>

[IPackageJson](./node-core-library.ipackagejson.md) \| undefined

