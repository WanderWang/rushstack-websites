---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [MapExtensions](./node-core-library.mapextensions.md) &gt; [mergeFromMap](./node-core-library.mapextensions.mergefrommap.md)

## MapExtensions.mergeFromMap() method

Adds all the (key, value) pairs from the source map into the target map.

<b>Signature:</b>

```typescript
static mergeFromMap<K, V>(targetMap: Map<K, V>, sourceMap: ReadonlyMap<K, V>): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  targetMap | Map&lt;K, V&gt; | The map that entries will be added to |
|  sourceMap | ReadonlyMap&lt;K, V&gt; | The map containing the entries to be added |

<b>Returns:</b>

void

## Remarks

This function modifies targetMap. Any existing keys will be overwritten.

