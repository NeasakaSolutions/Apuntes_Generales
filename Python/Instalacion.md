## Descarga de Python:

Se usara la version 3.12.10 de pyhton para el desarrollo deproyectos con django rest framework.

- Ingresar al siguiente link:
```bash
https://www.python.org/downloads/release/pymanager-263/
```

- Descargar el (MSIX)

- En caso de que abra la terminal, ir a la seccion de "Alias de ejecucion de aplicaciones"

- Activar:
```bash
Python (default)
Python install manager
```

- En otra terminal ejecutar:
```bash
py install 3.12.10
```

- Comprobar que se instalo:
```bash
py -3.12 --version
```

- Para generar la variable de entorno, ejecutar en powershell:
```powershell
py -3.12 -c "import sys; print(sys.prefix)"
```

- La ruta que genera sera la que ingreses como variable de entorno

# Extras:

- Crear entorno virtual:
```bash
py -3.12 -m venv venv
```

- Activar el entorno virtual:
```bash
.\venv\Scripts\Activate.ps1
```