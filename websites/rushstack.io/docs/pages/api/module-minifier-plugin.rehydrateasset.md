---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/module-minifier-plugin](./module-minifier-plugin.md) &gt; [rehydrateAsset](./module-minifier-plugin.rehydrateasset.md)

## rehydrateAsset() function

Rehydrates an asset with minified modules.

<b>Signature:</b>

```typescript
export declare function rehydrateAsset(asset: IAssetInfo, moduleMap: IModuleMap, banner: string): Source;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  asset | [IAssetInfo](./module-minifier-plugin.iassetinfo.md) | The asset |
|  moduleMap | [IModuleMap](./module-minifier-plugin.imodulemap.md) | The minified modules |
|  banner | string | A banner to inject for license information |

<b>Returns:</b>

Source

