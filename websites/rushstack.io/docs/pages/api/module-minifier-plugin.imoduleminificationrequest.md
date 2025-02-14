---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/module-minifier-plugin](./module-minifier-plugin.md) &gt; [IModuleMinificationRequest](./module-minifier-plugin.imoduleminificationrequest.md)

## IModuleMinificationRequest interface

Request to the minifier

<b>Signature:</b>

```typescript
export interface IModuleMinificationRequest 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [code](./module-minifier-plugin.imoduleminificationrequest.code.md) | string | The raw code fragment |
|  [externals](./module-minifier-plugin.imoduleminificationrequest.externals.md) | string\[\] \| undefined | Reserved variable names, e.g. \_\_WEBPACK\_EXTERNAL\_MODULE\_1\_\_ |
|  [hash](./module-minifier-plugin.imoduleminificationrequest.hash.md) | string | Identity of the request. Will be included in the response. |
|  [nameForMap](./module-minifier-plugin.imoduleminificationrequest.nameformap.md) | string \| undefined | File name to show for the source code in the source map |

