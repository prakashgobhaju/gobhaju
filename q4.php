<?php 

class Controller
{
    private function create() {
        
        $errors = [];
        if(!isset($_POST['id'])) {
            array_push($errors,["ID is required"]);
        }else {
            if(!is_numeric($_POST['id'])) {
                array_push($errors,["ID must be a number"]);
            }
        }
        if(!isset($_POST['value'])) {
            array_push($errors,["Value is required"]);
        }else {
            if(!is_string($_POST['value'])) {
                array_push($errors,["Value must be string"]);
            }
        }
        if($errors) {
            return json_encode($errors);
        }
        $output = true;
        return $output;
    }
      
}

?>
