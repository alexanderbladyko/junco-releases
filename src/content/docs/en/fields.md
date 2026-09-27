---
title: Fields
description: Information about supported fields
locale: en
order: 2
---

# Fields

Junco supports the following field types.

## Basic fields

### Boolean

A true-or-false value, shown as a switch in the editor.

### String

Free-form text. Use a string for names, labels, URLs, and other textual values.

| Field        | Type    | Description                                              |
| ------------ | ------- | -------------------------------------------------------- |
| `Min length` | integer | The smallest number of characters the value may contain. |
| `Max length` | integer | The largest number of characters the value may contain.  |
| `Pattern`    | string  | A regular expression that the text must match.           |

### Integer

A whole number without a fractional part. Use it for counts, positions, and
other values that cannot contain decimals.

| Field        | Type    | Description                |
| ------------ | ------- | -------------------------- |
| `Min length` | integer | The lowest allowed value.  |
| `Max length` | integer | The highest allowed value. |

### Number

A numeric value that can include a fractional part. Use it for measurements,
prices, percentages, and similar values.

| Field        | Type    | Description                |
| ------------ | ------- | -------------------------- |
| `Min length` | integer | The lowest allowed value.  |
| `Max length` | integer | The highest allowed value. |

### Enum

A value chosen from a predefined list. Use an enum when users should select a
known option instead of entering arbitrary text.

| Field     | Type             | Description                                   |
| --------- | ---------------- | --------------------------------------------- |
| `Options` | array of strings | Values available for selection in the editor. |

### File

A reference to a file. Use this field when a value should point to a file that
can be selected from the filesystem.

### Image

A reference to an image file. It is intended for fields that store an image
path and display image-specific controls in the editor.

## Complex fields

### Object

An object groups a fixed set of named properties into one value. Each property
has its own field schema.

| Field           | Type   | Description                                                    |
| --------------- | ------ | -------------------------------------------------------------- |
| `Display field` | string | Name of a property to use as the object's label in the editor. |

### Array

An ordered list of values. Every entry uses the same item schema, making arrays
suited to repeatable data.

| Field       | Type    | Description                                           |
| ----------- | ------- | ----------------------------------------------------- |
| `Min items` | integer | The minimum number of entries the array must contain. |
| `Max items` | integer | The maximum number of entries the array may contain.  |

## Any Of

Use `anyOf` when a field may have one of several valid shapes. Each alternative
is a complete field schema, and the value needs to match at least one of them.
Keep alternatives clearly distinct and give them meaningful
titles so people can tell which option to choose.

Meta is saved as a number to select correct variant
