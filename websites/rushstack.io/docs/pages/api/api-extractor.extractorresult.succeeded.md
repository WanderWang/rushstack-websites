---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [ExtractorResult](./api-extractor.extractorresult.md) &gt; [succeeded](./api-extractor.extractorresult.succeeded.md)

## ExtractorResult.succeeded property

Whether the invocation of API Extractor was successful. For example, if `succeeded` is false, then the build task would normally return a nonzero process exit code, indicating that the operation failed.

<b>Signature:</b>

```typescript
readonly succeeded: boolean;
```

## Remarks

Normally the operation "succeeds" if `errorCount` and `warningCount` are both zero. However if [IExtractorInvokeOptions.localBuild](./api-extractor.iextractorinvokeoptions.localbuild.md) is `true` , then the operation "succeeds" if `errorCount` is zero (i.e. warnings are ignored).

