---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [IJsonFileStringifyOptions](./node-core-library.ijsonfilestringifyoptions.md)

## IJsonFileStringifyOptions interface

Options for JsonFile.stringify()

<b>Signature:</b>

```typescript
export interface IJsonFileStringifyOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [headerComment?](./node-core-library.ijsonfilestringifyoptions.headercomment.md) | string | <i>(Optional)</i> If specified, this header will be prepended to the start of the file. The header must consist of lines prefixed by "//" characters. |
|  [ignoreUndefinedValues?](./node-core-library.ijsonfilestringifyoptions.ignoreundefinedvalues.md) | boolean | <i>(Optional)</i> If true, conforms to the standard behavior of JSON.stringify() when a property has the value <code>undefined</code>. Specifically, the key will be dropped from the emitted object. |
|  [newlineConversion?](./node-core-library.ijsonfilestringifyoptions.newlineconversion.md) | [NewlineKind](./node-core-library.newlinekind.md) | <i>(Optional)</i> If provided, the specified newline type will be used instead of the default <code>\r\n</code>. |
|  [prettyFormatting?](./node-core-library.ijsonfilestringifyoptions.prettyformatting.md) | boolean | <i>(Optional)</i> If true, then the "jju" library will be used to improve the text formatting. Note that this is slightly slower than the native JSON.stringify() implementation. |

