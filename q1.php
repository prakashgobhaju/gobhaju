<?php 

$response = file_get_contents("http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml");
$xml = new SimpleXMLElement($response);
echo json_encode($xml, JSON_PRETTY_PRINT);