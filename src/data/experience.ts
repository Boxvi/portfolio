const PAST_ROLES: {
  company: string
  role: string
  description: string
  tasks: string[]
  startDate: string
  endDate: string
}[] = [
    {
      company: 'Independiente',
      role: 'Soporte Técnico Área TI',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. </br> Numquam vel hic aspernatur molestiae exercitationem rerum reiciendis mollitia magnam harum ipsum?',
      tasks: [
        "Receptar dispositivos averiados, observo si tiene fallas en hardware descarto cualquier daño y analizo el dispositivo a nivel de software.",
        "Corrección de impresoras dar mantenimiento a dispositivos ajustar cabezales, observar el nivel de tinta, comprar tinta rellenar tanques, sopletear impresora para que no exista basurillas.",
        "Infraestructura en redes, configurar router con direcciones ip en red LAN, configurar dispositivos a la red local cámaras, extensores de red, impresoras y equipos, ponchar cables utp. "
      ],
      startDate: 'Enero 2024',
      endDate: 'Actualidad',
    },
    {
      company: 'Tienda D`Arpi',
      role: 'Desarrollador Full Stack',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel hic aspernatur molestiae exercitationem rerum reiciendis mollitia magnam harum ipsum?',
      tasks: [
        "Creación de una base de datos, detallando todo en un manual de usuario, por qué y para qué.",
        "Implementar cámaras de seguridad, máquina registradora de dinero e impresora térmica.",
        "Atender las personas que compraban en la tienda.",
        "Manejar el stock correspondiente y avisar a proveedores la existencia de este. ",
      ],
      startDate: 'Octurbe 2023',
      endDate: 'Enero 2024',
    },
    {
      company: 'Mensajeros de la Paz Ecuador',
      role: 'Desarrollador Full Stack',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel hic aspernatur molestiae exercitationem rerum reiciendis mollitia magnam harum ipsum?',
      tasks: [
        "Levantar requisitos funcionales y no funcionales del sistema, realizar tareas para que el equipo pueda desarrollar utilidades de manera más eficiente.",
        "Creación de la base de datos para poder levantar los microservicios correspondientes manteniendo la integridad de los datos siguiendo el principio de SOLID.",
        "Crear un Docker Compose para que el sistema pueda desplegarse en un ambiente de Docker en Linux usando servicios de Google Cloud.",
        "Realizar pruebas de QA y realizar el manual de usuario correspondiente para la entrega del producto a la Fundación.",
      ],
      startDate: 'Enero 2023',
      endDate: 'Septiembre 2023',
    },
    {
      company: 'Libélula Soft Cía. Ltda.',
      role: 'Analista QA',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel hic aspernatur molestiae exercitationem rerum reiciendis mollitia magnam harum ipsum?',
      tasks: [
        "Implementar pruebas de caja blanca y negra al sistema financiero a través de una matriz guiándose por cada screen, realizando casos de uso.",
        "Levantar el sistema en un ambiente local a través de Docker, realizando pruebas dentro de un ambiente de preproducción.",
        "Ingresar datos, validando que cada campo cumpla con el estándar establecido por el cliente y dando mensajes de advertencia correctos.",
        "Realizar pruebas de vida de forma pasiva, activando la cámara del dispositivo ya sea en Android, iOS o web.",
      ],
      startDate: 'Julio 2022',
      endDate: 'Octubre 2022',
    },
  ]

export default PAST_ROLES
