<?php
require("phpqrcode/qrlib.php");
header('Content-type: image/jpg');

QRcode::png("http://10.20.6.224/lostnfound/apk/lostandfound.apk");
?>