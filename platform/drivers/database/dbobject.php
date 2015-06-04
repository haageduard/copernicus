<?php

  class DBObject implements IDBObject {

    private $sqlQueryText = ''; // текст SQL запроса
    private $databaseName = ''; // имя базы данных
    private $databaseSchemaName = ''; // имя схемы в БД 
    private $databaseObjectName = ''; // имя объекта в БД

    public function setFullName($fullName) {
      $this->setDatabaseName($dbName);
      $this->setDatabaseSchemaName($dbSchemaName);
      $this->setDatabaseObjectName($dbObjectName);
    }

    public function getSQLQueryText() {
      return $this->sqlQueryText;
    }

    public function setDatabaseName($name) {
      $this->databaseName = $name;
    }

    public function setDatabaseSchemaName($name) {
      $this->databaseSchemaName = $name;
    }

    public function setDatabaseObjectName($name) {
      $this->databaseObjectName = $name;
    }

    // Проверить существование объекта в БД
    public function exists() {
    }

  }

?>
