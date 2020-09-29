# Ejercicios

**Ejercicio 1:** Consultar en el catálogo de alguna tienda de informática el precio de un ordenador tipo servidor y calcular su coste de amortización a cuatro y siete años. [Consultar este artículo en Infoautónomos sobre el tema](https://www.infoautonomos.com/consultas-a-la-comunidad/988/).

Tras leer el artículo no tengo mucha idea de cómo proceder la verdad. He encontrado una [tabla de amortizaciones](https://www.agenciatributaria.es/AEAT.internet/Inicio/_Segmentos_/Empresas_y_profesionales/Empresas/Impuesto_sobre_Sociedades/Periodos_impositivos_a_partir_de_1_1_2015/Base_imponible/Amortizacion/Tabla_de_coeficientes_de_amortizacion_lineal_.shtml) donde sale lo del 25% de amortización para ordenadores.

[Aquí](https://www.pccomponentes.com/servidores) hay servidores para mirar precios.

**Ejercicio 2:** Usando las tablas de precios de servicios de alojamiento en Internet “clásicos”, es decir, que ofrezcan Virtual Private Servers o servidores físicos, y de proveedores de servicios en la nube, comparar el coste durante un año de un ordenador con un procesador estándar (escogerlo de forma que sea el mismo tipo de procesador en los dos vendedores) y con el resto de las características similares (tamaño de disco duro equivalente a transferencia de disco duro) en el caso de que la infraestructura comprada se usa solo el 1% o el 10% del tiempo.


- Empresas usadas:
    - VPS: [ovhcloud](https://www.ovhcloud.com/es-es/vps/)
    - Cloud Provider: [Digital Ocean](https://www.digitalocean.com/)
- Hardware comparado:

    |         | Digital Ocean | OVH Cloud |
    |---------|---------------|-----------|
    | vCPU    | 1             | 1         |
    | Memoria | 1             | 2         |
    | SSD     | 25            | 40        |

El precio en OVH CLoud es de 5,57€ mensuales con compromiso a 12 meses, luego 66,84€. En Digital Ocean el precio sale a unos 0,006€ la hora, luego el coste anual sería de unos 53.568€.

El coste OVH es el mismo si se usa el 1% o el 10% del tiempo ya que se compra con compromiso de 12 meses. En el caso de Digital Ocean tenemos que calcular el 1% y el 10% de horas de un año: 89 y 892 respectivamente. Luego el coste sería 0.534€ y 5.35€ respectivamente.

Luego evidentemente el uso de recursos virtuales es mucho más rentable que el de VPS.

**Ejercicio 3:** En general, cualquier ordenador con menos de 5 o 6 años tendrá estos flags. ¿Qué modelo de procesador es? ¿Qué aparece como salida de esa orden? Si usas una máquina virtual, ¿qué resultado da? ¿Y en una Raspberry Pi o, si tienes acceso, el procesador del móvil?

![](img/wsl.png)

Linux virtualizado sobre Windows 10 (usando WSL2). Mi ordenador con Windows no tiene la virtualización hardware activada.

![](img/linux.jpg)

Linux nativo en un Thinkpad donde sí está activada.

![](img/movil.jpg)

En mi móvil Android donde no está activada.

Usando la orden `LC_ALL=C | grep Virtualization` obtengo:

- En WSL2: `Virtualization type: full`
- En Linux nativo en Thinkpad: `Virtualization: VT-x`