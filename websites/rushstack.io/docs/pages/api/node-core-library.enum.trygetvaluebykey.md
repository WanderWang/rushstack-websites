---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [Enum](./node-core-library.enum.md) &gt; [tryGetValueByKey](./node-core-library.enum.trygetvaluebykey.md)

## Enum.tryGetValueByKey() method

Returns an enum value, given its key. Returns `undefined` if no matching key is found.

<b>Signature:</b>

```typescript
static tryGetValueByKey<TEnumValue>(enumObject: {
        [key: string]: TEnumValue | string;
        [key: number]: TEnumValue | string;
    }, key: string): TEnumValue | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  enumObject | { \[key: string\]: TEnumValue \| string; \[key: number\]: TEnumValue \| string; } |  |
|  key | string |  |

<b>Returns:</b>

TEnumValue \| undefined

## Example

Example usage:

```ts
enum Colors {
  Red = 1
}

// Prints "1"
console.log(Enum.tryGetValueByKey(Colors, "Red"));

// Prints "undefined"
console.log(Enum.tryGetValueByKey(Colors, "Black"));
```

