---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiEntryPoint](./api-extractor-model.apientrypoint.md) &gt; [importPath](./api-extractor-model.apientrypoint.importpath.md)

## ApiEntryPoint.importPath property

The module path for this entry point, relative to the parent `ApiPackage` . In the current implementation, this is always the empty string, indicating the default entry point.

<b>Signature:</b>

```typescript
get importPath(): string;
```

## Remarks

API Extractor does not currently support analysis of multiple entry points. If that feature is implemented in the future, then the `ApiEntryPoint.importPath` will be used to distinguish different entry points, for example: `controls/Button` in `import { Button } from "example-package/controls/Button";` .

The `ApiEntryPoint.name` property stores the same value as `ApiEntryPoint.importPath` .

