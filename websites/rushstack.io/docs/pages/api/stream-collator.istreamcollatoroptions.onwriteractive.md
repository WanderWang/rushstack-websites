---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/stream-collator](./stream-collator.md) &gt; [IStreamCollatorOptions](./stream-collator.istreamcollatoroptions.md) &gt; [onWriterActive](./stream-collator.istreamcollatoroptions.onwriteractive.md)

## IStreamCollatorOptions.onWriterActive property

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

An event handler that is called when a [CollatedWriter](./stream-collator.collatedwriter.md) becomes output, before any of its chunks have been written to the destination.

<b>Signature:</b>

```typescript
onWriterActive?: (writer: CollatedWriter) => void;
```

## Remarks

Each `CollatedWriter` object will become active exactly once before the `StreamCollator` completes.

