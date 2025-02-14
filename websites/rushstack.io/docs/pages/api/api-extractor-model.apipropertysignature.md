---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiPropertySignature](./api-extractor-model.apipropertysignature.md)

## ApiPropertySignature class

Represents a TypeScript property declaration that belongs to an `ApiInterface` .

<b>Signature:</b>

```typescript
export declare class ApiPropertySignature extends ApiPropertyItem 
```
<b>Extends:</b> [ApiPropertyItem](./api-extractor-model.apipropertyitem.md)

## Remarks

This is part of the [ApiModel](./api-extractor-model.apimodel.md) hierarchy of classes, which are serializable representations of API declarations.

`ApiPropertySignature` represents a TypeScript declaration such as the `width` and `height` members in this example:

```ts
export interface IWidget {
  readonly width: number;
  height: number;
}
```
Compare with [ApiProperty](./api-extractor-model.apiproperty.md) , which represents a property belonging to a class. For example, a class property can be `static` but an interface property cannot.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(options)](./api-extractor-model.apipropertysignature._constructor_.md) |  | Constructs a new instance of the <code>ApiPropertySignature</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [containerKey](./api-extractor-model.apipropertysignature.containerkey.md) |  | string |  |
|  [kind](./api-extractor-model.apipropertysignature.kind.md) |  | [ApiItemKind](./api-extractor-model.apiitemkind.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [buildCanonicalReference()](./api-extractor-model.apipropertysignature.buildcanonicalreference.md) |  | <b><i>(BETA)</i></b> |
|  [getContainerKey(name)](./api-extractor-model.apipropertysignature.getcontainerkey.md) | <code>static</code> |  |

