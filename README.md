# Actualizar ramas de manera individual

La idea es trabajar en cada rama por separado y después integrar los cambios en una rama intermedia llamada `integration`. Esta rama reunirá los apuntes de todos los lenguajes y frameworks antes de actualizar `main`.

De esta manera, se puede comprobar que todos los cambios estén correctos sin comprometer directamente la rama principal.

## 1. Actualizar Python

Primero, realiza tus cambios en la rama `python`:

```bash
git switch python
git add .
git commit -m "Agregar nuevos apuntes de Python"
git push origin python
```

## 2. Actualizar JavaScript

Realiza tus cambios en la rama `javascript`:

```bash
git switch javascript
git add .
git commit -m "Agregar nuevos apuntes de JavaScript"
git push origin javascript
```

## 3. Actualizar Express

Realiza tus cambios en la rama `express`:

```bash
git switch express
git add .
git commit -m "Agregar nuevos apuntes de Express"
git push origin express
```

## 4. Integrar las ramas en integration

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
```

Agrega los cambios, crea el commit y súbelos a GitHub:

```bash
git add .
git commit -m "Integrar apuntes de Python, JavaScript y Express"
git push origin integration
```

**Importante:** Se utiliza `git restore` en lugar de `git merge` para evitar incorporar las eliminaciones de carpetas que existen en las ramas individuales.

## 5. Comprobar la integración

Antes de actualizar `main`, verifica que estén presentes todas las carpetas:

```bash
git ls-tree --name-only HEAD
```

La estructura esperada es:

```text
Express
Javascript
Python
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

## 6. Actualizar main

Una vez que hayas comprobado que todo funciona correctamente, integra `integration` en `main`:

```bash
git switch main
git pull origin main
git merge integration
git push origin main
```

De esta manera, `main` recibirá los cambios previamente revisados en `integration`.

## 7. Estructura final del repositorio

| Rama | Contenido | Función |
|---|---|---|
| `main` | Todas las carpetas | Versión principal y estable |
| `integration` | Todas las carpetas | Integración y comprobación de cambios |
| `python` | Python | Desarrollo de apuntes de Python |
| `javascript` | Javascript | Desarrollo de apuntes de JavaScript |
| `express` | Express | Desarrollo de apuntes de Express |

## 8. Consideraciones importantes

- No utilizar `git merge` directamente desde las ramas individuales hacia `main` o `integration`, ya que podrían incorporarse eliminaciones de otras carpetas.
- `git restore --source=...` copia el contenido de la carpeta indicada desde la rama de origen hacia la rama actual.
- Si no existen cambios, Git mostrará `nothing to commit, working tree clean`. Es normal.
- Si tienes cambios pendientes, guárdalos antes de cambiar de rama.
- Los comandos utilizan los nombres exactos de las carpetas, respetando mayúsculas y minúsculas.
- Se recomienda mantener `main` protegida para evitar modificaciones accidentales.
- Si encuentras errores durante la integración, puedes corregirlos en `integration` antes de llevar los cambios a `main`.

**De esta manera, cada lenguaje o framework tendrá su propio historial de trabajo, `integration` funcionará como entorno de integración y `main` conservará la versión estable y completa de todos tus apuntes.**