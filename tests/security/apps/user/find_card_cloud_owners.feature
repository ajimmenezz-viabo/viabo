# language: es
Característica: Listar propietarios de tarjeta card cloud
  Yo como sistema frontend
  Quiero lista de propietarios de tarjeta card cloud
  Para utilizarla en funcionalidades del sistema.

  Antecedentes:
    Dado que se ingresa con el usuario "ajimmenezz+001@gmail.com"

  Escenario: lista de propietarios de tarjeta card cloud
    Dado envio una solicitud "GET" a "/api/security/users/card-cloud-owners"
    Entonces el codigo de estado de respuesta debe ser "200"
