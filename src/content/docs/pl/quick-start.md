---
title: Szybki start
description: "Zacznij pracę z Junco: otwieraj pliki, konfiguruj schematy i poznaj interfejs."
locale: pl
order: 1
---

# Junco

## Obsługiwane pliki

Obecnie obsługiwane są JSON i YAML.

## Otwieranie i zapisywanie plików

Otwórz plik przez **Plik → Otwórz plik**. Po wprowadzeniu zmian zapisz go przez
**Plik → Zapisz plik** lub skrótem klawiszowym `Ctrl+S`.

Nowy plik można utworzyć przez **Plik → Nowy**.

## Schematy plików

Junco potrzebuje schematu, aby pracować z plikiem. Schemat określa typy pól i
właściwości wyświetlane w edytorze.

Możesz spróbować utworzyć schemat automatycznie: w komunikacie o braku schematu
kliknij **Utwórz schemat**. Sprawdź wygenerowany schemat i w razie potrzeby
edytuj go ręcznie.

Schemat jest zapisywany obok pliku pod nazwą **`nazwa_pliku`.schema.json**.

## Ograniczenia

Głównym typem pliku musi być obiekt: jest to potrzebne do przechowywania
metadanych w polu **`__meta__`**.

## Edytowanie schematu

Aby przełączyć się między edycją pliku a schematu, kliknij **Edytuj schemat** u
góry głównego panelu. Edytowanie schematu jest także dostępne z menu
**Edycja → Schemat → Edytuj schemat**.

Schemat jest zgodny z JSON Schema, ale nie wszystkie możliwości standardu są
obsługiwane.

## Interfejs

Aplikacja ma trzy panele:

- **Drzewo** — drzewo pól do szybkiego poruszania się po pliku.
- **Główny panel** — tutaj edytujesz zawartość pliku lub jego schemat.
- **Panel walidacji** — tutaj wyświetlane są błędy walidacji.
