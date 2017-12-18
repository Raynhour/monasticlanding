<?php


if( isset($_POST['phone']) ){

  $phone = $_POST['phone'];
  $email = $_POST['email'];
  
  if ( isset($_POST['name']) ) {
    $name = $_POST['name'];
  } else {
    $name = 'Undefind user';
  }

    $to = 'evgeniymeo@gofriends.pro,info@monastic.group';
    $subject = 'Monastic';
    $message = '
        <html>
            <head>
                <title>Monastic</title>
            </head>
            <body>
            	<p><strong>Почта отправителя:</strong> '. $email .'</p>
                <p><strong>Имя отправителя:</strong> '. $name .'</p>
                <p><strong>Телефон отправителя:</strong> '. $phone .'</p>
            </body>
        </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "lala+\r\n";
    mail($to, $subject, $message, $headers);
    echo $message;
}