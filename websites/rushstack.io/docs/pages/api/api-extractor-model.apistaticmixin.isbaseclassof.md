---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiStaticMixin](./api-extractor-model.apistaticmixin.md) &gt; [isBaseClassOf](./api-extractor-model.apistaticmixin.isbaseclassof.md)

## ApiStaticMixin.isBaseClassOf() function

A type guard that tests whether the specified `ApiItem` subclass extends the `ApiStaticMixin` mixin.

<b>Signature:</b>

```typescript
function isBaseClassOf(apiItem: ApiItem): apiItem is ApiStaticMixin;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  apiItem | [ApiItem](./api-extractor-model.apiitem.md) |  |

<b>Returns:</b>

apiItem is [ApiStaticMixin](./api-extractor-model.apistaticmixin.md)

## Remarks

The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of the mixin function produces a different subclass. (This could be mitigated by `Symbol.hasInstance` , however the TypeScript type system cannot invoke a runtime test.)

