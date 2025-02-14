---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [IPackageJsonLookupParameters](./node-core-library.ipackagejsonlookupparameters.md) &gt; [loadExtraFields](./node-core-library.ipackagejsonlookupparameters.loadextrafields.md)

## IPackageJsonLookupParameters.loadExtraFields property

Certain package.json fields such as "contributors" can be very large, and may significantly increase the memory footprint for the PackageJsonLookup cache. By default, PackageJsonLookup only loads a subset of standard commonly used fields names. Set loadExtraFields=true to always return all fields.

<b>Signature:</b>

```typescript
loadExtraFields?: boolean;
```
