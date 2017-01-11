<?php
    print "HELLO WORLD\n";
    print "TWO LINES?\n";
    $token = $_POST['id'];
    print $token;
    print "\n";
    print_r(array_keys($_POST));

    $params = array(
        'amount' => "700",
        'currency' => "usd",
        'description' => "Test",
        'source' => 'tok_19aYKbJtuRU0NcjLNAkKyrAK',
    );


    $curl_handle=curl_init();
    curl_setopt($curl_handle,CURLOPT_URL,'https://api.stripe.com/v1/charges');
    curl_setopt($curl_handle,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($curl_handle,CURLOPT_USERNAME,sk_test_ynArsP8pllJniBGPo63VoS4I);
    curl_setopt($curl_handle,CURLOPT_POST,1);
    curl_setopt($curl_handle,CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded"));
    curl_setopt($curl_handle,CURLOPT_POSTFIELDS, array("source: tok_19aYKbJtuRU0NcjLNAkKyrAK"));



    $buffer = curl_exec($curl_handle);
    curl_close($curl_handle);
    if (empty($buffer)){
      print "Nothing returned from url.<p>";
    }
    else{
      print $buffer;
    }





?>
