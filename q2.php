<?php 

$list = [];
foreach(range(1,40) as $item) {
    $list[$item] = [
        'id' => $item,
        'price' => rand(15,99)
    ];
}
$GLOBALS['my_list'] = $list;

function getListAbovePrice($input = 10) {
    $list = $GLOBALS['my_list'];
    $result = array_filter($list, function($item){
        return $item['price'] >$input;
    });
    return $result;    
}

function getSumAbovePrice($input = 15) {
    $filtered_list = getListAbovePrice($input);
    $sum = array_sum(array_column($filtered_list,'price'));
    return $sum;
}

getListAbovePrice(15);
echo getSumAbovePrice(15);
