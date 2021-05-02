<?php 

class DatabaseConnection
{
    protected $host       = "127.0.0.1";
    protected $dbname     = "online_english";
    protected $user       = "root";
    protected $pass       = "";

    public function __construct($host, $dbname, $user, $pass){
        $this->host = $host;
        $this->user = $user;
        $this->dbname = $dbname;
        $this->pass = $pass;
        try {
            $connection = true; // db connection code here
        }catch(Exception $e) {
            $e->getMessage();
        }
    }

    public function __destruct() {
        echo $this->host;
        
    }    
}

$conn = new DatabaseConnection('localhost','test','root','root');

?>
