# language: es
Característica: Enpoint para registrar transacciones In y out de stp
  Yo como sistema
  Quiero registrar las transacciones stp de spei out,in y balance
  Para registrar las transacciones en la base de datos y mejorar el rendimiento.

  Escenario: Se registra transacciones de la fecha actual
    Dado envio una solicitud "GET" a "/api/stp/spei-transactions/register"
    Entonces el codigo de estado de respuesta debe ser "200"

  Escenario: Se registra transacciones con la fecha 20240509
    Dado envio una solicitud "GET" a "/api/stp/spei-transactions/register?date=20240509"
    Entonces el codigo de estado de respuesta debe ser "200"

  Escenario: Se registra transacciones con la negocio TOP_SYSTEM
    Dado envio una solicitud "GET" a "/api/stp/spei-transactions/register?company=TOP_SYSTEM"
    Entonces el codigo de estado de respuesta debe ser "200"