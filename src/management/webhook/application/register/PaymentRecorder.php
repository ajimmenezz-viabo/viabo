<?php declare(strict_types=1);


namespace Viabo\management\webhook\application\register;


use Viabo\management\webhook\domain\exceptions\WebhookTokenWrong;
use Viabo\management\webhook\domain\WebhookRepository;

final readonly class PaymentRecorder
{
    public function __construct(private WebhookRepository $repository)
    {
    }

    public function __invoke(?string $token , ?array $pays): void
    {
        $token = $this->clean($token);

        $token = $this->repository->search($token);
        if (empty($token)) {
            throw new WebhookTokenWrong();
        }

        if (!empty($pays)) {
            $pays = json_encode($pays);
            $this->repository->save($pays);
        }
    }

    private function clean(?string $token): ?string
    {
        if ($token && str_starts_with($token , 'Bearer ')) {
            $token = substr($token , 7);
        }
        return $token;
    }
}