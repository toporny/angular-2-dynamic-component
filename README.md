### Zadanie:
Stworzenie aplikacji obliczającej pole i obwód trzech figur:
koło, kwadrat, prostokąt.
Powinna być przygotowana w sposób umożlwiający dalszy rozwój,
poprzez dodanie kolejnych typów obliczeń oraz figur.
Technologia: Preferowany Angular 2+

Widok 1:
- Radio button z wyborem obliczeń (pole / obwód),
- Lista combo z wyborem figury.

Widok 2 (po wyborze figury):
- Formularz z polami potrzebnymi do obliczeń (np. promień / długość boków), pole zawierające wynik obliczeń.

### Rozwiązanie:
Jeden główny "app.component", który ładuje stosowne komponenty
w zależności od konieczności (calculate-circle, calculate-rectangle, calculate-square),
Każdy komponent ma formularz specyficzny dla danej figury oraz robi inne obliczenia.
Inne komponenty mogą być dodane potem.


### Jak aplikacja spełnia warunek o dalszym łatwym rozwoju?
1. Każda figura geometryczna ma swój osobny komponent, który jest ładowany dynamicznie
2. W komponencie są funkcje obliczające cechy (obwód, pole, inne mogą być dodane) oraz kod rysujący daną figurę na ekranie
3. Każdy nowy komponent musi implementować klasę abstrakcyjną Calculations (z pliku "icalculations.type.ts" który pełni rolę interfejsu) w którym są zdefiniowane nazwy metod które każdy komponent musi obsłużyć - na tym etapie są to: getArea(), getCircumference()
4. W pliku "icalculations.type.ts" są zdefiniowane także zawartości pól radiobutton i select
