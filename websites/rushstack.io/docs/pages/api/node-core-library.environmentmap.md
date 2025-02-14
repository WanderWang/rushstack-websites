---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [EnvironmentMap](./node-core-library.environmentmap.md)

## EnvironmentMap class

A map data structure that stores process environment variables. On Windows operating system, the variable names are case-insensitive.

<b>Signature:</b>

```typescript
export declare class EnvironmentMap 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(environmentObject)](./node-core-library.environmentmap._constructor_.md) |  | Constructs a new instance of the <code>EnvironmentMap</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [caseSensitive](./node-core-library.environmentmap.casesensitive.md) |  | boolean | Whether the environment variable names are case-sensitive. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [clear()](./node-core-library.environmentmap.clear.md) |  | Clears all entries, resulting in an empty map. |
|  [entries()](./node-core-library.environmentmap.entries.md) |  | Returns the map entries. |
|  [get(name)](./node-core-library.environmentmap.get.md) |  | Returns the value of the specified variable, or <code>undefined</code> if the map does not contain that name. |
|  [mergeFrom(environmentMap)](./node-core-library.environmentmap.mergefrom.md) |  | Adds each entry from <code>environmentMap</code> to this map. |
|  [mergeFromObject(environmentObject)](./node-core-library.environmentmap.mergefromobject.md) |  | Merges entries from a plain JavaScript object, such as would be used with the <code>process.env</code> API. |
|  [names()](./node-core-library.environmentmap.names.md) |  | Returns the map keys, which are environment variable names. |
|  [set(name, value)](./node-core-library.environmentmap.set.md) |  | Assigns the variable to the specified value. A previous value will be overwritten. |
|  [toObject()](./node-core-library.environmentmap.toobject.md) |  | Returns the keys as a plain JavaScript object similar to the object returned by the <code>process.env</code> API. |
|  [unset(name)](./node-core-library.environmentmap.unset.md) |  | Removes the key from the map, if present. |

