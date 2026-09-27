---
title: Quick start
description: Basic app description
locale: en
order: 1
---

# Junco app

## Supported files

JSON/Yaml at this point

## Opening and saving files

Open a file with **File -> Open File**. After making changes, save it with
**File -> Save File** or the `Ctrl+S` keyboard shortcut.

New file could be created with **File -> New**

## File schemas

Junco needs a schema to work with a file. The schema defines the field types
and properties shown in the editor.

You can try to create one automatically: in the missing-schema message, click
**Generate schema**. Review the generated schema and edit it manually if
needed.

Schema is saved at the same path with name **`name_of_the_file`.schema.json**.

## Limitations

Root type of file should be object (it's needed to store meta information in **`__meta__`** field)

## Editing a schema

To switch between file and schema editing, click **Edit schema** at the top of
the main panel. Schema editing is also available from **Edit → Schema → Edit
schema** in the menu.

Schema is valid **jsonschema**, not full features of jsonschema are supported

## Interface

The application has three panels:

- **Tree view** — a field tree for quickly navigating the file.
- **Main panel** — edit the file contents or its schema here.
- **Validation view** — view validation errors here.
