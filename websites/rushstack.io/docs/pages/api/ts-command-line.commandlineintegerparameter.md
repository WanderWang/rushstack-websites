---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineIntegerParameter](./ts-command-line.commandlineintegerparameter.md)

## CommandLineIntegerParameter class

The data type returned by [CommandLineParameterProvider.defineIntegerParameter()](./ts-command-line.commandlineparameterprovider.defineintegerparameter.md) .

<b>Signature:</b>

```typescript
export declare class CommandLineIntegerParameter extends CommandLineParameterWithArgument 
```
<b>Extends:</b> [CommandLineParameterWithArgument](./ts-command-line.commandlineparameterwithargument.md)

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `CommandLineIntegerParameter` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defaultValue](./ts-command-line.commandlineintegerparameter.defaultvalue.md) |  | number \| undefined | The default value which will be used if the parameter is omitted from the command line. |
|  [kind](./ts-command-line.commandlineintegerparameter.kind.md) |  | [CommandLineParameterKind](./ts-command-line.commandlineparameterkind.md) | Indicates the type of parameter. |
|  [value](./ts-command-line.commandlineintegerparameter.value.md) |  | number \| undefined | Returns the argument value for an integer parameter that was parsed from the command line. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [appendToArgList(argList)](./ts-command-line.commandlineintegerparameter.appendtoarglist.md) |  | Append the parsed values to the provided string array. |
