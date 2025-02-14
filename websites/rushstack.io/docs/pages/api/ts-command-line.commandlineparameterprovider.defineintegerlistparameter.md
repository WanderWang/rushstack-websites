---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineParameterProvider](./ts-command-line.commandlineparameterprovider.md) &gt; [defineIntegerListParameter](./ts-command-line.commandlineparameterprovider.defineintegerlistparameter.md)

## CommandLineParameterProvider.defineIntegerListParameter() method

Defines a command-line parameter whose argument is an integer. The parameter can be specified multiple times to build a list.

<b>Signature:</b>

```typescript
defineIntegerListParameter(definition: ICommandLineIntegerListDefinition): CommandLineIntegerListParameter;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  definition | [ICommandLineIntegerListDefinition](./ts-command-line.icommandlineintegerlistdefinition.md) |  |

<b>Returns:</b>

[CommandLineIntegerListParameter](./ts-command-line.commandlineintegerlistparameter.md)

## Remarks

Example usage of an integer list parameter:

```
example-tool --avoid 4 --avoid 13
```

