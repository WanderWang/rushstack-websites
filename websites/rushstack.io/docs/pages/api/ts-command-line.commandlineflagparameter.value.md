---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineFlagParameter](./ts-command-line.commandlineflagparameter.md) &gt; [value](./ts-command-line.commandlineflagparameter.value.md)

## CommandLineFlagParameter.value property

Returns a boolean indicating whether the parameter was included in the command line.

<b>Signature:</b>

```typescript
get value(): boolean;
```

## Remarks

The return value will be false if the command-line has not been parsed yet, or if the flag was not used.

