# Gestión y actualización de ramas individuales

La idea es trabajar en cada rama por separado y después integrar los cambios en una rama intermedia llamada `integration`. Esta rama reunirá los apuntes de todos los lenguajes y frameworks antes de actualizar `main`.

De esta manera, se puede comprobar que todos los cambios estén correctos sin comprometer directamente la rama principal.

## 1. Crear una nueva rama

Cuando se quiera agregar un nuevo lenguaje o framework al repositorio, se debe crear una rama independiente para mantener sus apuntes separados.

Por ejemplo, para crear una rama de React:

Primero, cambiar a `integration` y actualizarla:

```bash
git switch integration
git pull origin integration
```

Crear la nueva rama:

```bash
git switch -c react
```

Eliminar las carpetas de las demás tecnologías que no correspondan a React. Por ejemplo:

```bash
git rm -r Express Javascript Python
```

Si ya existen otras tecnologías, como `Next.js`, también deben eliminarse de esta rama.

Si la carpeta de React todavía no existe, créala y agrega un archivo inicial, por ejemplo `README.md`, para que Git pueda registrarla.

Después, guardar los cambios y subir la nueva rama:

```bash
git add .
git commit -m "Crear rama de apuntes de React"
git push -u origin react
```

**Nota:** Para crear otra rama, como `nextjs`, se repite el procedimiento desde `integration`, cambiando el nombre de la rama y conservando únicamente la carpeta correspondiente.

Ejemplo:

```bash
git switch integration
git pull origin integration
git switch -c nextjs
```

Eliminar las carpetas de las demás tecnologías:

```bash
git rm -r Express Javascript Python React
```

Crear la carpeta `Next.js` si todavía no existe y agregar un archivo inicial.

Finalmente:

```bash
git add .
git commit -m "Crear rama de apuntes de Next.js"
git push -u origin nextjs
```

## 2. Actualizar Python

Primero, realiza tus cambios en la rama `python`:

```bash
git switch python
git add .
git commit -m "Agregar nuevos apuntes de Python"
git push origin python
```

## 3. Actualizar JavaScript

Realiza tus cambios en la rama `javascript`:

```bash
git switch javascript
git add .
git commit -m "Agregar nuevos apuntes de JavaScript"
git push origin javascript
```

## 4. Actualizar Express

Realiza tus cambios en la rama `express`:

```bash
git switch express
git add .
git commit -m "Agregar nuevos apuntes de Express"
git push origin express
```

## 5. Actualizar React

Realiza tus cambios en la rama `react`:

```bash
git switch react
git add .
git commit -m "Agregar nuevos apuntes de React"
git push origin react
```

## 6. Actualizar Next.js

Realiza tus cambios en la rama `nextjs`:

```bash
git switch nextjs
git add .
git commit -m "Agregar nuevos apuntes de Next.js"
git push origin nextjs
```

## 7. Integrar las ramas en integration

Una vez que hayas actualizado las ramas individuales, cambia a `integration`:

```bash
git switch integration
git pull origin integration
```

Ahora copia únicamente las carpetas correspondientes desde cada rama:

```bash
git restore --source=python -- Python
git restore --source=javascript -- Javascript
git restore --source=express -- Express
git restore --source=react -- React
git restore --source=nextjs -- Next.js
```

Agrega los cambios, crea el commit y súbelos a GitHub:

```bash
git add .
git commit -m "Integrar apuntes de todas las tecnologías"
git push origin integration
```

**Importante:** Se utiliza `git restore` en lugar de `git merge` para evitar incorporar las eliminaciones de carpetas que existen en las ramas individuales.

Cuando se agreguen nuevas tecnologías, también se debe agregar su correspondiente comando `git restore` en este apartado.

## 8. Comprobar la integración

Antes de actualizar `main`, verifica que estén presentes todas las carpetas:

```bash
git ls-tree --name-only HEAD
```

La estructura esperada es:

```text
Express
Javascript
Next.js
Python
React
README.md
```

También puedes revisar los cambios que se integrarán:

```bash
git diff main..integration
```

Y consultar el historial de las ramas:

```bash
git log --oneline --graph --all
```

## 9. Actualizar main

Una vez que hayas comprobado que todo funciona correctamente, integra `integration` en `main`:

```bash
git switch main
git pull origin main
git merge integration
git push origin main
```

De esta manera, `main` recibirá los cambios previamente revisados en `integration`.

## 10. Estructura final del repositorio

| Rama | Contenido | Función |
|---|---|---|
| `main` | Todas las carpetas | Versión principal y estable |
| `integration` | Todas las carpetas | Integración y comprobación de cambios |
| `python` | Python | Desarrollo de apuntes de Python |
| `javascript` | Javascript | Desarrollo de apuntes de JavaScript |
| `express` | Express | Desarrollo de apuntes de Express |
| `react` | React | Desarrollo de apuntes de React |
| `nextjs` | Next.js | Desarrollo de apuntes de Next.js |

## 11. Consideraciones importantes

- No utilizar `git merge` directamente desde las ramas individuales hacia `main` o `integration`, ya que podrían incorporarse eliminaciones de otras carpetas.
- `git restore --source=...` copia el contenido de la carpeta indicada desde la rama de origen hacia la rama actual.
- Para crear nuevas ramas, utilizar `integration` como punto de partida, de manera que se tenga acceso a la estructura general del repositorio.
- Al crear una nueva rama, eliminar las carpetas de las tecnologías que no correspondan a ella.
- Si la carpeta de una nueva tecnología todavía no existe, crearla y agregar al menos un archivo para que Git pueda registrarla.
- Si no existen cambios, Git mostrará `nothing to commit, working tree clean`. Es normal.
- Si tienes cambios pendientes, guárdalos antes de cambiar de rama.
- Los comandos utilizan los nombres exactos de las carpetas, respetando mayúsculas y minúsculas.
- Se recomienda mantener `main` protegida para evitar modificaciones accidentales.
- Si encuentras errores durante la integración, puedes corregirlos en `integration` antes de llevar los cambios a `main`.
- Cuando agregues una nueva tecnología, recuerda incluirla en la estructura del repositorio y en el apartado de integración.

**De esta manera, cada lenguaje o framework tendrá su propio historial de trabajo, `integration` funcionará como entorno de integración y `main` conservará la versión estable y completa de todos tus apuntes.**