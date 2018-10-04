<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../vendor/autoload.php';

logMsg($_SERVER);

function logMsg($msg)
{
    if (is_array($msg) || is_object($msg)) {
        $msg = print_r($msg, true);
    }

    file_put_contents('auth.log', $msg . "\n");
}