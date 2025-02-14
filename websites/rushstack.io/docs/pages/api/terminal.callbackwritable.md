---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/terminal](./terminal.md) &gt; [CallbackWritable](./terminal.callbackwritable.md)

## CallbackWritable class

This class enables very basic [TerminalWritable.onWriteChunk()](./terminal.terminalwritable.onwritechunk.md) operations to be implemented as a callback function, avoiding the need to define a subclass of `TerminalWritable` .

<b>Signature:</b>

```typescript
export declare class CallbackWritable extends TerminalWritable 
```
<b>Extends:</b> [TerminalWritable](./terminal.terminalwritable.md)

## Remarks

`CallbackWritable` is provided as a convenience for very simple situations. For most cases, it is generally preferable to create a proper subclass.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(options)](./terminal.callbackwritable._constructor_.md) |  | Constructs a new instance of the <code>CallbackWritable</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [onWriteChunk(chunk)](./terminal.callbackwritable.onwritechunk.md) |  |  |

