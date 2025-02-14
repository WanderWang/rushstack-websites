---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [RushConfiguration](./rush-lib.rushconfiguration.md) &gt; [getImplicitlyPreferredVersions](./rush-lib.rushconfiguration.getimplicitlypreferredversions.md)

## RushConfiguration.getImplicitlyPreferredVersions() method

Returns a map of all direct dependencies that only have a single semantic version specifier.

<b>Signature:</b>

```typescript
getImplicitlyPreferredVersions(variant?: string | undefined): Map<string, string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  variant | string \| undefined | The name of the current variant in use by the active command. |

<b>Returns:</b>

Map&lt;string, string&gt;

A map of dependency name -- &gt; version specifier for implicitly preferred versions.

