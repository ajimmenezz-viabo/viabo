# language: es
Característica: Transferir de Concentradora a Empresa
  Yo como administrador de STP
  Quiero transferir fondos desde una cuenta concentradora hacia una empresa
  Para ajustar el balance de la empresa dentro de la plataforma.

  Antecedentes:
    Dado que se ingresa con el usuario "fpalma+09@siccob.com.mx"

  Escenario: Concetradora a Empresa
    Dado envio una solicitud "POST" a "/api/spei/transaction/process-payments" con datos:
    """
    {
      "originBankAccount": "646180527700000002",
      "destinationsAccounts": [
          {
              "bankAccount": "646180527700000015",
              "amount": 10
          }
      ],
      "concept": "Concentradora a empresa desde Behat",
      "internalTransaction": true
    }
    """
    Entonces el codigo de estado de respuesta debe ser "200"

  Escenario: Concetradora a Terceros
    Dado envio una solicitud "POST" a "/api/spei/transaction/process-payments" con datos:
    """
    {
      "originBankAccount": "646180527700000002",
      "destinationsAccounts": [
          {
              "bankAccount": "014180568246636592",
              "amount": 10
          }
      ],
      "concept": "Concetradora a terceros desde Behat",
      "internalTransaction": false
    }
    """
    Entonces el codigo de estado de respuesta debe ser "200"