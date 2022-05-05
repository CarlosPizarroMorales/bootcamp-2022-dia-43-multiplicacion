## Desafio "Multiplicación"

![captura presentacion][0]

|Bootcamp 2022 Modulo 4|Fundamentos de programación en Javascript|
|----|-----|
|**Unidad 1**|Introducción al lenguaje Javascript|
|**Día Bootcamp**|43|
|**Día Modulo**|6/15|


El desafío "Multiplicación" abarca los temas tratados en la lectura sobre ES6, funciones y ciclos. Consiste en un pequeño código que busca generar tablas de multiplicación y factoriales a partir de un número entregado por el usuario. 

|N°|Estado|Requisito|
|:-------:|:------:|:------:|
|1|OK|Función para solicitar y validar n°1-20. Mostrar mensaje si no es en rango|
|2|OK|Usar características de ES6 como fat arrow y let|
|3|OK|Generar y mostrar por consola resultados|
|4|OK|Aplicar for loop anidado para generar factorial|


## IMPLEMENTACIÓN

- La interfaz es muy sencilla; sigo aplicando el uso de `box-shadow`, la propiedad `clamp` para definir rangos responsivos en tamaños de elementos y el uso del modelo flex para la organización visual.
- La validación he decidido hacerla a través de la presentación explícita del rango disponible para utilizar como entrada en el atributo `placeholder` del input numérico. Se podía hacer con validaciones de HTML pero el ejercicio solicitaba una función para validar. 
- Se utiliza la característica de los formularios de mantener un objeto parecido a un arreglo para todos los elementos activos de este. Esto me permite acceder a los valores de los input's sin tener que crear nuevos selectores ni usar sintaxis larga:  
  - `const value = e.target[0].value;`
- Se ha creado un patrón `regex` para validar el ingreso de un número y luego un operador ternario para validar finalmente el valor. En conjunto evitan cualquier caracter que no sea dígito (evitando los n°s negativos) y validan que el valor sea menor a 21 y distinto de 0.

```javascript
const value = (e.target[0].value);

(/^\d{1,2}$/.test(value) && Number(value) < 21 && Number(value) !== 0)
  ? calculaPinta(Number(value))
  : console.log(`${value} es un valor inválido.`);
```

- Como una característica de usabilidad, se ha evitado generar ventanas tipo `alert` para avisar que el valor ingresado es incorrecto. Aunque hay un mensaje por consola para cumplir con el punto, el mensaje explícito del `input placeholder="..."` más la nula reacción de la interfaz a valores incorrectos, se ha considerado suficiente para dar a entender el uso de la página.

![screenshot0][1]
![screenshot1][2]

## NOTAS PERSONALES:

- He comenzado a practicar el escribir mi código CSS de tal manera que quede agrupado según ámbitos y en un orden específico para que leer una regla de principio a fin, entregue una buena idea de lo que pasa con el elemento, por ejemplo: 
  
```css
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  min-height: 25rem;
  padding: 1rem;
  text-align: center;
  
  background: rgba(0, 187, 25, 0.3);
  color: rgba(80, 0, 230, 0.9);
  border: 8px groove rgba(80, 0, 230, 0.9);
  border-radius: 20px;
```

- Primero, todos los elementos relativos al posicionamiento del elemento. Luego, tamaño y espacios internos y externos, para luego pasar a los aspectos propiamente estilísticos separando si hay muchas reglas, fuentes de colores generales, que quedan al final.

- Patrón regex para valores positivos hasta 99: `/^\d{1,2}$/` 
- Patrón regex para valores entre -99 y 99: `/^-?\d{1,2}$/`


[0]:./assets/utils/screenshot-presentacion.png
[1]:./assets/utils/screenshot0.png
[2]:./assets/utils/screenshot1.png