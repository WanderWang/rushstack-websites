---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineFlagParameter](./ts-command-line.commandlineflagparameter.md) &gt; [appendToArgList](./ts-command-line.commandlineflagparameter.appendtoarglist.md)

## CommandLineFlagParameter.appendToArgList() method

Append the parsed values to the provided string array.

<b>Signature:</b>

```typescript
/** @override */
appendToArgList(argList: string[]): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  argList | string\[\] | the parsed strings will be appended to this string array |

<b>Returns:</b>

void

## Remarks

Sometimes a command line parameter is not used directly, but instead gets passed through to another tool that will use it. For example if our parameter comes in as "--max-count 3", then we might want to call `child_process.spawn()` and append \["--max-count", "3"\] to the args array for that tool. appendToArgList() appends zero or more strings to the provided array, based on the input command-line that we parsed.

If the parameter was omitted from our command-line and has no default value, then nothing will be appended. If the short name was used, the long name will be appended instead.

