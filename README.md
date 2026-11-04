# Actualizar ramas de manera individual

La idea es trabajar en cada rama por separado y después actualizar únicamente su carpeta correspondiente en `main`, sin fusionar las ramas completas.

## 1. Actualizar Python en main

Primero, realiza tus cambios en la rama `python`:

```bash
git switch python
git add .
git commit -m "Agregar nuevos apuntes de Python"
git push origin python
```

Después, integra los cambios en `main`:

```bash
git switch main
git restore --source=python -- Python
git add Python
git commit -m "Actualizar apuntes de Python"
git push origin main
```

## 2. Actualizar JavaScript en main

Realiza tus cambios en la rama `javascript`:

```bash
git switch javascript
git add .
git commit -m "Agregar nuevos apuntes de JavaScript"
git push origin javascript
```

Después, actualiza `main`:

```bash
git switch main
git restore --source=javascript -- Javascript
git add Javascript
git commit -m "Actualizar apuntes de JavaScript"
git push origin main
```

## 3. Actualizar Express en main

Realiza tus cambios en la rama `express`:

```bash
git switch express
git add .
git commit -m "Agregar nuevos apuntes de Express"
git push origin express
```

Después, actualiza `main`:

```bash
git switch main
git restore --source=express -- Express
git add Express
git commit -m "Actualizar apuntes de Express"
git push origin main
```

## 4. Estructura final del repositorio

| Rama | Contenido |
|---|---|
| `main` | Todas las carpetas |
| `python` | Python |
| `javascript` | JavaScript |
| `express` | Express |

## 5. Consideraciones importantes

- No utilizar `git merge` para integrar las ramas individuales en `main`, porque podrías incorporar eliminaciones de otras carpetas.
- `git restore --source=...` copia el contenido de la carpeta indicada desde la rama de origen hacia la rama actual.
- Si no existen cambios, Git mostrará `nothing to commit, working tree clean`. Es normal.
- Si tienes cambios pendientes en `main`, guárdalos antes de cambiar de rama.
- Los comandos utilizan los nombres exactos de las carpetas, respetando mayúsculas y minúsculas.

**De esta manera, cada lenguaje o framework tendrá su propio historial de trabajo y `main` funcionará como la recopilación general de todos tus apuntes.**