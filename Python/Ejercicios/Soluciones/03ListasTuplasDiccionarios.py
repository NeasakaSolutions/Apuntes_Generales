# Creación del Menú
platos = ["Paella", "Risotto", "Sushi", "Tacos", "Pizza"]
precios = (15, 12, 20, 10, 8)

# Slicing para obtener los platos del segundo al cuarto
platos_seleccionados = platos[1:4]

# Crear el diccionario menú sin usar zip
menu = {
    platos[0]: precios[0],
    platos[1]: precios[1],
    platos[2]: precios[2],
    platos[3]: precios[3],
    platos[4]: precios[4]
}

# Exploración del Menú (sin usar for)
print("Bienvenidos a nuestro menú especial:\n")

print(f"- {platos[0]}: {precios[0]} euros")
print(f"- {platos[1]}: {precios[1]} euros")
print(f"- {platos[2]}: {precios[2]} euros")
print(f"- {platos[3]}: {precios[3]} euros")
print(f"- {platos[4]}: {precios[4]} euros")

# Indexing para obtener el tercer plato
tercer_plato = platos[2]
tercer_precio = precios[2]
print(f"\nEl tercer plato es {tercer_plato} y su precio es {tercer_precio}.")

# Stride para obtener platos en posiciones pares
platos_pares = platos[::2]
print(f"\nLos platos pares son: {platos_pares}")