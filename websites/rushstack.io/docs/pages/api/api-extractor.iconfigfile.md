---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [IConfigFile](./api-extractor.iconfigfile.md)

## IConfigFile interface

Configuration options for the API Extractor tool. These options can be constructed programmatically or loaded from the api-extractor.json config file using the [ExtractorConfig](./api-extractor.extractorconfig.md) class.

<b>Signature:</b>

```typescript
export interface IConfigFile 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [apiReport?](./api-extractor.iconfigfile.apireport.md) | [IConfigApiReport](./api-extractor.iconfigapireport.md) | <i>(Optional)</i> Configures how the API report files (\*.api.md) will be generated. |
|  [bundledPackages?](./api-extractor.iconfigfile.bundledpackages.md) | string\[\] | <i>(Optional)</i> A list of NPM package names whose exports should be treated as part of this package. |
|  [compiler?](./api-extractor.iconfigfile.compiler.md) | [IConfigCompiler](./api-extractor.iconfigcompiler.md) | <i>(Optional)</i> Determines how the TypeScript compiler engine will be invoked by API Extractor. |
|  [docModel?](./api-extractor.iconfigfile.docmodel.md) | [IConfigDocModel](./api-extractor.iconfigdocmodel.md) | <i>(Optional)</i> Configures how the doc model file (\*.api.json) will be generated. |
|  [dtsRollup?](./api-extractor.iconfigfile.dtsrollup.md) | [IConfigDtsRollup](./api-extractor.iconfigdtsrollup.md) | <b><i>(BETA)</i></b> <i>(Optional)</i> Configures how the .d.ts rollup file will be generated. |
|  [extends?](./api-extractor.iconfigfile.extends.md) | string | <i>(Optional)</i> Optionally specifies another JSON config file that this file extends from. This provides a way for standard settings to be shared across multiple projects. |
|  [mainEntryPointFilePath](./api-extractor.iconfigfile.mainentrypointfilepath.md) | string | Specifies the .d.ts file to be used as the starting point for analysis. API Extractor analyzes the symbols exported by this module. |
|  [messages?](./api-extractor.iconfigfile.messages.md) | [IExtractorMessagesConfig](./api-extractor.iextractormessagesconfig.md) | <i>(Optional)</i> Configures how API Extractor reports error and warning messages produced during analysis. |
|  [newlineKind?](./api-extractor.iconfigfile.newlinekind.md) | 'crlf' \| 'lf' \| 'os' | <i>(Optional)</i> Specifies what type of newlines API Extractor should use when writing output files. |
|  [projectFolder?](./api-extractor.iconfigfile.projectfolder.md) | string | <i>(Optional)</i> Determines the <code>&lt;projectFolder&gt;</code> token that can be used with other config file settings. The project folder typically contains the tsconfig.json and package.json config files, but the path is user-defined. |
|  [testMode?](./api-extractor.iconfigfile.testmode.md) | boolean | <i>(Optional)</i> Set to true when invoking API Extractor's test harness. |
|  [tsdocMetadata?](./api-extractor.iconfigfile.tsdocmetadata.md) | [IConfigTsdocMetadata](./api-extractor.iconfigtsdocmetadata.md) | <b><i>(BETA)</i></b> <i>(Optional)</i> Configures how the tsdoc-metadata.json file will be generated. |

