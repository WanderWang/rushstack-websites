---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/module-minifier-plugin](./module-minifier-plugin.md) &gt; [IWorkerPoolMinifierOptions](./module-minifier-plugin.iworkerpoolminifieroptions.md)

## IWorkerPoolMinifierOptions interface

Options for configuring the WorkerPoolMinifier

<b>Signature:</b>

```typescript
export interface IWorkerPoolMinifierOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [maxThreads?](./module-minifier-plugin.iworkerpoolminifieroptions.maxthreads.md) | number | <i>(Optional)</i> Maximum number of worker threads to use. Will never use more than there are modules to process. Defaults to os.cpus().length |
|  [terserOptions?](./module-minifier-plugin.iworkerpoolminifieroptions.terseroptions.md) | MinifyOptions | <i>(Optional)</i> The options to forward to Terser. <code>output.comments</code> is currently not configurable and will always extract license comments to a separate file. |
|  [verbose?](./module-minifier-plugin.iworkerpoolminifieroptions.verbose.md) | boolean | <i>(Optional)</i> If true, log to the console about the minification results. |

