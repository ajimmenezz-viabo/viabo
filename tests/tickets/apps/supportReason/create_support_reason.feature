# language: es
Característica: Agregar Causa de Soporte
  Yo como administrador de Viabo
  Quiero poder agregar nuevas causas de soporte al catálogo
  Para reflejar las razones más comunes por las que los usuarios
  pueden levantar tickets de atención al cliente.

  Antecedentes: Login de usuario
    Dado que se ingresa con el usuario "ramses@itravel.mx"
    Entonces el codigo de estado de respuesta debe ser "200"
    Entonces se obtiene el token de session


  Escenario: lista de perfiles
    Dado Envio una solicitud "GET" a "/api/profiles"
    Entonces el codigo de estado de respuesta debe ser "200"
