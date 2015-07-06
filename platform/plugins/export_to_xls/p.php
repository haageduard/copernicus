<?php

  namespace Plugins;

  class ExportToExcel implements Plugins.ExportTablePlugin {
  
    public function ExportToXLS($pluginManager, $modelId) {
    }
    
    public function export() {
      $tmp_dir = $pluginManager->getTemporaryDir();
      $data = $pluginManager->getModel($modelId);
    }
    
    public function onDestroy() {
      $tmp_dir->purge();
    }
    
  }
  
?>
