<?php

  require_once('platform/klib/ktemplate.php');
  
  $tpl = new KTemplate('html/index.html');

  echo($tpl->get());
  
?>
