<?php

  class PluginManager() {
  
    public function getTemporaryDir() {
      return $dir;
    }
    
    // Return JSON array
    public function getModel($modelId) {
      $model = $mbusClient->getModel($modelId);
      return $model;
    }
    
  }
  
?>
