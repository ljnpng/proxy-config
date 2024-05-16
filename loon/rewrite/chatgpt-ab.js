const body = $response.body
  .replace(/"gateValue":"false"/g, '"gateValue":"true"')
  .replace(/"value":false/g, '"value":true"');

$done({ body });

