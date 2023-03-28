<?php

namespace Viabo\shared\domain\utils;


use DateTime;

class DatePHP
{
    private function timeZone(): void
    {
        date_default_timezone_set('America/Mexico_City');
    }

    public function now(): string
    {
        $this->timeZone();
        $format = 'Y-m-d';
        return date($format);
    }

    public function dateTime(): string
    {
        $this->timeZone();
        $format = 'Y-m-d H:i:s';
        return date($format);
    }

    public function formatDateTime(string $value , string $format = null): string
    {
        $this->timeZone();
        $dateTime = new \DateTime($value);
        return $dateTime->format($format ?? 'Y-m-d H:i:s');
    }

    public function isOlderDate(string $date): bool
    {
        $this->timeZone();
        $dateEntered = $this->dateUnix(($date));
        $actual = $this->dateUnix(date("Y-m-d" , time()));

        if ($dateEntered > $actual) {
            return true;
        }
        return false;
    }

    public function isMinorDate(string $date): bool
    {
        $this->timeZone();
        $dateEntered = $this->dateUnix(($date));
        $actual = $this->dateUnix((date("Y-m-d" , time())));

        if ($dateEntered < $actual) {
            return true;
        }
        return false;
    }

    public function isSameDate(string $date): bool
    {
        $this->timeZone();
        $dateEntered = $this->dateUnix(($date));
        $actual = $this->dateUnix((date("Y-m-d" , time())));

        if ($dateEntered == $actual) {
            return true;
        }
        return false;
    }

    public function dateUnix(string $date): string
    {
        $this->timeZone();
        return strtotime($date);
    }

    public function incrementWeeks(string $date , int $weeks): string
    {
        $this->timeZone();
        $date = date_create($date);
        date_add($date , date_interval_create_from_date_string($weeks . ' weeks'));
        return date_format($date , 'Y-m-d');
    }

    public function incrementDays(string $date , int $days): string
    {
        $this->timeZone();
        $date = date_create($date);
        date_add($date , date_interval_create_from_date_string($days . ' days'));
        return date_format($date , 'Y-m-d');
    }

    public function decreaseDays(string $date , int $days): string
    {
        $this->timeZone();
        $date = date_create($date);
        return date('Y-m-d' , strtotime($date . '- ' . $days . ' days'));
    }

    public function decreasesWeeks(string $now , int $weeks): string
    {
        $this->timeZone();
        $date = date($now);
        return date('Y-m-d' , strtotime($date . '- ' . $weeks . ' week'));
    }

    public function differenceDays(string $date , string $now): int
    {
        $this->timeZone();
        $date = date_create($date);
        $now = date_create($now);
        $difference = $date->diff($now);

        return intval($difference->days);
    }

    public function differenceDates(string $date1 , string $date2 , string $format): string
    {
        $this->timeZone();
        $date1 = date_create($date1);
        $date2 = date_create($date2);
        $difference = $date1->diff($date2);

        return $difference->format($format);
    }

    public function differenceToNow(string $d): string
    {
        $date = new DateTime($d);
        $dateNow = new DateTime();
        $diff = date_diff($date , $dateNow);

        $timeDiff = '';
        if ($diff->y > 0) {
            $timeDiff .= $diff->y . ' año(s) ';
        }
        if ($diff->m > 0) {
            $timeDiff .= $diff->m . ' mes(es) ';
        }
        if ($diff->d > 0) {
            $timeDiff .= $diff->d . ' día(s) ';
        }
        if ($diff->h > 0) {
            $timeDiff .= $diff->h . ' hora(s) ';
        }
        if ($diff->i > 0) {
            $timeDiff .= $diff->i . ' minuto(s) ';
        }
        if ($diff->i === 0 and $diff->s > 0) {
            $timeDiff .= $diff->s . ' segundo(s) ';
        }

        return $timeDiff;
    }

    public function lastDayOfTheMonth(string $date): string
    {
        $this->timeZone();
        $date = new DateTime($date);
        return $date->format('Y-m-t');
    }

    public function lastDayOfWeek(string $date , string $dayOfWeek): string
    {
        $this->timeZone();
        $date = new DateTime($date);
        $date->modify('last ' . $dayOfWeek);
        return $date->format('Y-m-d');
    }

}
