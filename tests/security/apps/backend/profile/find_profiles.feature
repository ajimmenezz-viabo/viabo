# language: es
Característica: Catalogo de perfiles
  Para tener la lista de perfiles
  Como sistema frontend
  Quiero obtener la lista de perfiles en el sistema

  Escenario: lista de perfiles
    Dado Envio una solicitud "GET" a "/api/profiles"
    Entonces el codigo de estado de respuesta debe ser "200"
    Entonces el contenido de la respuesta debe contener
    """
    {
        "response": "Heal check security"
    }
    """
