<?php
require("phpqrcode/qrlib.php");
header('Content-type: image/jpg');

QRcode::png("https://oms.dotrmrt3.gov.ph/psilva/lostnfound/apk/lostandfound.apk");
?>