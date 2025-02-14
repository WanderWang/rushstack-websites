---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [ChangeManager](./rush-lib.changemanager.md) &gt; [createEmptyChangeFiles](./rush-lib.changemanager.createemptychangefiles.md)

## ChangeManager.createEmptyChangeFiles() method

Creates a change file that has a 'none' type.

<b>Signature:</b>

```typescript
static createEmptyChangeFiles(rushConfiguration: RushConfiguration, projectName: string, emailAddress: string): string | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  rushConfiguration | [RushConfiguration](./rush-lib.rushconfiguration.md) | The rush configuration we are working with |
|  projectName | string | The name of the project for which to create a change file |
|  emailAddress | string | The email address which should be associated with this change |

<b>Returns:</b>

string \| undefined

the path to the file that was created, or undefined if no file was written

