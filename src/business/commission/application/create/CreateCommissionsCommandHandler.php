<?php declare(strict_types=1);


namespace Viabo\business\commission\application\create;


use Viabo\business\commission\domain\CommissionPay;
use Viabo\business\commission\domain\CommissionSpeiInCarnet;
use Viabo\business\commission\domain\CommissionSpeiInMasterCard;
use Viabo\business\commission\domain\CommissionSpeiOutCarnet;
use Viabo\business\commission\domain\CommissionSpeiOutMasterCard;
use Viabo\business\commission\domain\CommissionUpdateByUser;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCommissionsCommandHandler implements CommandHandler
{
    public function __construct(private CommissionRecorder $recorder)
    {
    }

    public function __invoke(CreateCommissionsCommand $command): void
    {
        $commerceId = CommerceId::create($command->commerceId);
        $speiInCarnet = new CommissionSpeiInCarnet($command->speiInCarnet);
        $speiInMasterCard = new CommissionSpeiInMasterCard($command->speiInMasterCard);
        $speiOutCarnet = new CommissionSpeiOutCarnet($command->speiOutCarnet);
        $speiOutMasterCard = new CommissionSpeiOutMasterCard($command->speiOutMasterCard);
        $pay = new CommissionPay($command->pay);
        $updateByUser = new CommissionUpdateByUser($command->userId);


        $this->recorder->__invoke(
            $updateByUser,
            $commerceId ,
            $speiInCarnet ,
            $speiInMasterCard ,
            $speiOutCarnet ,
            $speiOutMasterCard,
            $pay
        );
    }
}