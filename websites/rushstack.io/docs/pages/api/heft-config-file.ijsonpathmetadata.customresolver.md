---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/heft-config-file](./heft-config-file.md) &gt; [IJsonPathMetadata](./heft-config-file.ijsonpathmetadata.md) &gt; [customResolver](./heft-config-file.ijsonpathmetadata.customresolver.md)

## IJsonPathMetadata.customResolver property

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

If `IJsonPathMetadata.pathResolutionMethod` is set to `PathResolutionMethod.custom` , this property be used to resolve the path.

<b>Signature:</b>

```typescript
customResolver?: (configurationFilePath: string, propertyName: string, propertyValue: string) => string;
```
