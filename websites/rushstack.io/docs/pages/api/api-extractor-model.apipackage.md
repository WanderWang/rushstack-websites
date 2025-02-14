---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiPackage](./api-extractor-model.apipackage.md)

## ApiPackage class

Represents an NPM package containing API declarations.

<b>Signature:</b>

```typescript
export declare class ApiPackage extends ApiPackage_base 
```
<b>Extends:</b> ApiPackage\_base

## Remarks

This is part of the [ApiModel](./api-extractor-model.apimodel.md) hierarchy of classes, which are serializable representations of API declarations.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(options)](./api-extractor-model.apipackage._constructor_.md) |  | Constructs a new instance of the <code>ApiPackage</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [containerKey](./api-extractor-model.apipackage.containerkey.md) |  | string |  |
|  [entryPoints](./api-extractor-model.apipackage.entrypoints.md) |  | ReadonlyArray&lt;[ApiEntryPoint](./api-extractor-model.apientrypoint.md) &gt; |  |
|  [kind](./api-extractor-model.apipackage.kind.md) |  | [ApiItemKind](./api-extractor-model.apiitemkind.md) |  |
|  [tsdocConfiguration](./api-extractor-model.apipackage.tsdocconfiguration.md) |  | TSDocConfiguration | The TSDoc configuration that was used when analyzing the API for this package. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [addMember(member)](./api-extractor-model.apipackage.addmember.md) |  |  |
|  [buildCanonicalReference()](./api-extractor-model.apipackage.buildcanonicalreference.md) |  | <b><i>(BETA)</i></b> |
|  [findEntryPointsByPath(importPath)](./api-extractor-model.apipackage.findentrypointsbypath.md) |  |  |
|  [loadFromJsonFile(apiJsonFilename)](./api-extractor-model.apipackage.loadfromjsonfile.md) | <code>static</code> |  |
|  [saveToJsonFile(apiJsonFilename, options)](./api-extractor-model.apipackage.savetojsonfile.md) |  |  |

