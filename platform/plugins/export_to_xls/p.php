<?php

  class ExportToXLS implements ExportDataPlugin {
  
    public function ExportToXLS($pluginManager, $modelId) {
    }
    
    public function export() {
      $tmp_dir = $pluginManager->getTemporaryDir();
    }
    
  }
  
?>
