<?php

namespace Viabo\Tests\shared\infrastructure\behat;

use Behat\Behat\Tester\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Mink\Session;
use Behat\MinkExtension\Context\RawMinkContext;
use RuntimeException;
use Viabo\Tests\shared\infrastructure\mink\MinkHelper;
use Viabo\Tests\shared\infrastructure\mink\MinkSessionRequestHelper;

final class APIContext extends RawMinkContext
{
    private readonly MinkHelper $sessionHelper;
    private readonly MinkSessionRequestHelper $request;
    private string $token;


    public function __construct(private readonly Session $minkSession)
    {
        $this->sessionHelper = new MinkHelper($minkSession);
        $this->request = new MinkSessionRequestHelper(new MinkHelper($minkSession));
        $this->token = '';
    }

    /**
     * @When /^que se ingresa con el usuario "([^"]*)"$/
     */
    public function queSeIngresaConElUsuario($user)
    {
        $body = ['content' => json_encode(['username' => $user , 'password' => 'B4CKD00RVI4B0.'])];
        $this->request->sendRequest('POST' , $this->locatePath('/api/login') , $body);
        $data = json_decode($this->sessionHelper->getResponse() , true);
        if (empty($data)) {
            throw new RuntimeException(sprintf("No se pudo ingresar con el usuario y no se genero el token"));
        }
        $this->token = $data['token'];
    }

    /**
     * @Given /^Envio una solicitud "([^"]*)" a "([^"]*)"$/
     */
    public function envioUnaSolicitudA(string $method , string $url): void
    {
        $this->sessionHelper->sendRequest($method , $this->locatePath($url) , [] , $this->token);
    }

    /**
     * @When /^Envio una solicitud "([^"]*)" a "([^"]*)" con datos:$/
     */
    public function envioUnaSolicitudAConDatos($method , $url , PyStringNode $body): void
    {
        $body = ['content' => $body->getRaw()];
        $this->request->request($method , $this->locatePath($url) , $body , $this->token);
    }

    /**
     * @Then /^el codigo de estado de respuesta debe ser "([^"]*)"$/
     */
    public function elCodigoDeEstadoDeRespuestaDebeSer(mixed $expectedResponseCode): void
    {
        if ($this->minkSession->getStatusCode() !== (int)$expectedResponseCode) {
            throw new RuntimeException(
                sprintf(
                    "El código de estado <%s> no coincide con lo esperado <%s> con el error: \n%s" ,
                    $this->minkSession->getStatusCode() ,
                    $expectedResponseCode ,
                    $this->sanitizeOutputError($this->sessionHelper->getResponse())
                )
            );
        }
    }

    /**
     * @Then /^el contenido de la respuesta debe contener$/
     */
    public function elContenidoDeLaRespuestaDebeContener(PyStringNode $data): void
    {
        $expected = $this->sanitizeOutput($data->getRaw());
        $actual = $this->sanitizeOutput($this->sessionHelper->getResponse());

        if (!str_contains($actual , $expected)) {
            throw new RuntimeException(
                sprintf("La salidas no coinciden: \nExpectativa: \n%s\n\n -- \nActual:\n%s  " , $expected , $actual)
            );
        }
    }

    /**
     * @When /^se recibe el token de la informacion$/
     */
    public function seRecibeElTokenDeLaInformacion(): void
    {
        $tokenData = json_decode($this->sessionHelper->getResponse() , true);

        if (!array_key_exists('token' , $tokenData)) {
            throw new RuntimeException(sprintf("No se recibe token: \nActual:\n%s  " , json_encode($tokenData)));
        }

        $this->token = $tokenData['token'];
    }

    /**
     * @When /^el mensaje de error es "([^"]*)"$/
     */
    public function elMensajeDeErrorEs($message): void
    {
        $message = json_encode($message);
        $error = $this->sessionHelper->getResponse();

        if ($message !== $error) {
            throw new RuntimeException(
                sprintf("La salidas no coinciden: \nExpectativa: \n%s\n\n -- \nActual:\n%s  " , $message , $error)
            );
        }
    }

    private function sanitizeOutput(string $output): string
    {
        return json_encode(json_decode(trim($output)) , true);
    }

    private function sanitizeOutputError(string $output): false|string
    {
        $positionMessage = strpos($output , '<div class="exception-message-wrapper">');
        if (!empty($positionMessage)) {
            $output = substr($output , $positionMessage);
            $positionMessage = strpos($output , '</h1>');
            $output = substr($output , 0 , $positionMessage);
        }
        return strip_tags(trim($output));
    }

}
