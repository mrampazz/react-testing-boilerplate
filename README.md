## react-testing-boilerplate
### Cosa testare
- _Component MUST render_
  - component must render without errors
- _Test the output_
  - check if it renders the correct thing
- _Test functions that change state_
- _Test the events_
  - test se i componenti interattivi (input, button) con le direttive onClick, onChange, etc.
  - testare che la funzione corretta viene chiamata
  - testare che venga chiamata con gli argomenti corretti
- _Test edge cases_
  - quando si lavora con gli array specialmente
    - cosa succede se togliamo un elemento da un array vuoto e non controlliamo?
    - il test dovrebbe dirci che c'e' un problema

### Cosa non testare
- _non fare snapshots_
- _metodi lifecycle_

### Come testare

Per scegliere cosa testare partire sempre dal semplice al complesso.

### No outsiders

Unit test non devono testare l'interazione con il mondo esterno, quindi non dobbiamo accedere al file system per testare una funzione che prende un file. Stessa cosa se avessimo un server. Se abbiamo bisogno di dati per testare una funzione li mockiamo cosi' da non impegnare risorse inutili al filesystem/server.

### Esempio

Prendiamo un componente react con un button e una text area, bisogna testare:

- cosa vede l'utente
- interazione utente

Quindi:

- Se c'è un cambiamento visivo dopo un click -> testarlo
- Se c'è un valore che ritorna dopo il click -> testarlo
- Se viene chiamata una funzione dopo il click bisogna testare che l'output corretto venga passato alla funzione corretta

### Riferimenti WIP

```
https://daveceddia.com/what-to-test-in-react-app/

https://daveceddia.com/getting-started-with-tdd-in-react/

https://stackoverflow.com/questions/48180499/testing-onchange-function-in-jest

https://stackoverflow.com/questions/47728227/trying-to-test-onchange-function-of-react-component-form

https://blog.logrocket.com/testing-react-applications-in-2019/

https://medium.com/@aghh1504/6-testing-react-components-using-jest-and-enzyme-b85db96fa1e3

(Questo prossimo è molto importante)
https://itnext.io/how-to-properly-test-react-components-9f090969cb6f

https://testing-library.com/

https://testing-library.com/docs/react-testing-library/cheatsheet

https://react-testing-examples.com/

https://blog.logrocket.com/tdd-with-react-test-renderer/

https://medium.com/better-programming/how-to-do-the-basics-in-react-testing-library-c52cdb3a7726

https://www.leighhalliday.com/firing-events-react-testing-library

https://css-tricks.com/testing-react-hooks-with-enzyme-and-react-testing-library/

https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing

https://thomlom.dev/test-react-testing-library/

https://dev.to/itnext/how-you-can-use-react-testing-library-to-test-component-surface-49pm

https://softchris.github.io/books/react/react-testing-library/

https://www.freecodecamp.org/news/the-right-way-to-test-react-components-548a4736ab22/

```
