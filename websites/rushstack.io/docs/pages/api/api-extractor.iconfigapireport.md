---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IConfigApiReport](./api-extractor.iconfigapireport.md)

## IConfigApiReport interface

Configures how the API report files (\*.api.md) will be generated.

<b>Signature:</b>

```typescript
export interface IConfigApiReport 
```

## Remarks

This is part of the [IConfigFile](./api-extractor.iconfigfile.md) structure.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [enabled](./api-extractor.iconfigapireport.enabled.md) | boolean | Whether to generate an API report. |
|  [reportFileName?](./api-extractor.iconfigapireport.reportfilename.md) | string | <i>(Optional)</i> The filename for the API report files. It will be combined with <code>reportFolder</code> or <code>reportTempFolder</code> to produce a full output filename. |
|  [reportFolder?](./api-extractor.iconfigapireport.reportfolder.md) | string | <i>(Optional)</i> Specifies the folder where the API report file is written. The file name portion is determined by the <code>reportFileName</code> setting. |
|  [reportTempFolder?](./api-extractor.iconfigapireport.reporttempfolder.md) | string | <i>(Optional)</i> Specifies the folder where the temporary report file is written. The file name portion is determined by the <code>reportFileName</code> setting. |

