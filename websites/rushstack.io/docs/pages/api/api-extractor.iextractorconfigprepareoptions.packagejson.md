---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IExtractorConfigPrepareOptions](./api-extractor.iextractorconfigprepareoptions.md) &gt; [packageJson](./api-extractor.iextractorconfigprepareoptions.packagejson.md)

## IExtractorConfigPrepareOptions.packageJson property

The parsed package.json file for the working package, or undefined if API Extractor was invoked without a package.json file.

<b>Signature:</b>

```typescript
packageJson?: INodePackageJson | undefined;
```

## Remarks

If omitted, then the `<unscopedPackageName>` and `<packageName>` tokens will have default values.

