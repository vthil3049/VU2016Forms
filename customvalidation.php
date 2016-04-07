<?php
 
defined( '_JEXEC' ) or die( 'Restricted access' );
 
require_once dirname(__FILE__).'/validation.php';
 
class RSFormProCustomValidations extends RSFormProValidations {  
 
  public static function validationTest($value, $extra = null, $data = null) {
    // The following makes sure the submitted value is "test"
    if ($value == 'test') {
      // Return true if the validation passed.
      return true;
    } else {
      // Return false if the validation didn't pass.
      return false;
    }
  }
 public static function uniqueEmail($value, $extra = null, $data = null) {
      // The following will check if the current value is indeed an email
      if (!self::email($value, $extra, $data)) {
      return false;
      }
      // The following will check if the current value is unique (never submitted within that form)
      return self::uniquefield($value, $extra, $data);      
  }
}
 