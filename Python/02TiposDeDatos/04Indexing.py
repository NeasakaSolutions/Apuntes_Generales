# Listas:
lista_tareas = ["Tarea 1", "Tarea 2", "Tarea 3"]

# Diccionarios:
diccionario = {
    "tarea1": "COMPLETADA",
    "tarea2": "INCOMPLETA",
    "tarea3": "PENDIENTE"
}

# Para acceder a los elementos de las listas de forma individual se utiliza el indexing
# [ 0, 1, 2]

# Impresion de resultados:
print(f'Impresion del primer resultado de la lista: {lista_tareas[0]}')
print(f'Impresion del ultimo resultado de la lista: {lista_tareas[-1]}')

# Tambien se pueden acceder a valores dentro de los valores:
print(f'Segundo caracter del segundo valor de la lista es: {lista_tareas[1][1]}')
# Separados:
print("-" * 50)

print(f"Estado de la tarea 1: {diccionario['tarea1']}")
