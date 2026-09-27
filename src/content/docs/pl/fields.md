---
title: Pola
description: Obsługiwane typy pól i ich parametry.
locale: pl
order: 2
---

# Pola

Junco obsługuje następujące typy pól.

## Pola podstawowe

### Boolean

Wartość prawda lub fałsz, wyświetlana w edytorze jako przełącznik. Używaj jej
dla ustawień, które można włączyć albo wyłączyć.

### String

Dowolny tekst: nazwy, etykiety, adresy URL i inne wartości tekstowe.

| Pole         | Typ     | Opis                                                    |
| ------------ | ------- | ------------------------------------------------------- |
| `Min length` | integer | Najmniejsza liczba znaków, którą może zawierać wartość. |
| `Max length` | integer | Największa liczba znaków, którą może zawierać wartość.  |
| `Pattern`    | string  | Wyrażenie regularne, któremu musi odpowiadać tekst.     |

### Integer

Liczba całkowita bez części ułamkowej. Nadaje się do liczników, pozycji i innych
wartości bez miejsc po przecinku.

| Pole         | Typ     | Opis                           |
| ------------ | ------- | ------------------------------ |
| `Min length` | integer | Najmniejsza dozwolona wartość. |
| `Max length` | integer | Największa dozwolona wartość.  |

### Number

Liczba, która może zawierać część ułamkową. Używaj jej dla pomiarów, cen,
procentów i podobnych wartości.

| Pole         | Typ     | Opis                           |
| ------------ | ------- | ------------------------------ |
| `Min length` | integer | Najmniejsza dozwolona wartość. |
| `Max length` | integer | Największa dozwolona wartość.  |

### Enum

Wartość wybierana z wcześniej zdefiniowanej listy. Użyj enum, gdy użytkownik
powinien wybrać znaną opcję zamiast wpisywać dowolny tekst.

| Pole      | Typ              | Opis                                    |
| --------- | ---------------- | --------------------------------------- |
| `Options` | array of strings | Wartości dostępne do wyboru w edytorze. |

### File

Odwołanie do pliku. Używaj tego pola, gdy wartość ma wskazywać plik wybierany z
systemu plików.

### Image

Odwołanie do pliku obrazu. Nadaje się do pól, które przechowują ścieżkę do
obrazu i pokazują w edytorze elementy sterowania obrazem.

## Pola złożone

### Object

Obiekt łączy ustalony zestaw nazwanych właściwości w jedną wartość. Każda
właściwość ma własny schemat, dlatego obiekt sprawdza się dla powiązanych
ustawień, takich jak połączenie z serwerem lub profil użytkownika. Używaj go,
gdy struktura danych jest znana z góry; jeśli liczba wpisów się zmienia, wybierz
tablicę.

| Pole            | Typ    | Opis                                                                                                                        |
| --------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `Display field` | string | Nazwa właściwości używanej jako etykieta obiektu w edytorze. Wybierz krótką, rozpoznawalną wartość, np. `name` lub `title`. |

### Array

Uporządkowana lista wartości. Do każdego wpisu stosowany jest ten sam schemat,
dlatego tablice są przydatne dla tagów, zadań, użytkowników i innych
powtarzalnych danych. Elementami mogą być proste wartości albo obiekty;
minimalny i maksymalny limit określają liczbę wpisów, które można dodać.

| Pole        | Typ     | Opis                                   |
| ----------- | ------- | -------------------------------------- |
| `Min items` | integer | Minimalna liczba elementów w tablicy.  |
| `Max items` | integer | Maksymalna liczba elementów w tablicy. |

## Any Of

Używaj `anyOf`, gdy pole może mieć jedną z kilku prawidłowych struktur. Każda
alternatywa jest pełnym schematem pola, a wartość musi pasować do co najmniej
jednej z nich. Na przykład kontakt może być ciągiem z adresem e-mail albo
obiektem z danymi telefonu. Staraj się, aby alternatywy wyraźnie się różniły,
i nadaj im zrozumiałe nazwy, aby było jasne, którą opcję wybrać.
