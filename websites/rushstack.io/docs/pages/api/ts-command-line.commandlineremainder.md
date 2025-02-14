---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineRemainder](./ts-command-line.commandlineremainder.md)

## CommandLineRemainder class

The data type returned by [CommandLineParameterProvider.defineCommandLineRemainder()](./ts-command-line.commandlineparameterprovider.definecommandlineremainder.md) .

<b>Signature:</b>

```typescript
export declare class CommandLineRemainder 
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `CommandLineRemainder` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [description](./ts-command-line.commandlineremainder.description.md) |  | string | Documentation for the parameter that will be shown when invoking the tool with "--help" |
|  [values](./ts-command-line.commandlineremainder.values.md) |  | ReadonlyArray&lt;string&gt; | Returns any remaining command line arguments after the recognized portion that was parsed from the command line. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [appendToArgList(argList)](./ts-command-line.commandlineremainder.appendtoarglist.md) |  | Append the parsed values to the provided string array. |

