const Style = require('../pbjs-genfiles/proto').google.cloud.apigeeregistry.v1.style;

async function main() {
  let headers = {};

  // index.js
  process.stdin.on("data", data => {
    const request = Style.LinterRequest.decode(
      data
    );

    process.stderr.write(request + "\n")
    console.log("request")

    const response = Style.LinterResponse.fromObject({
    });
    const responseBuffer = Style.LinterResponse.encode(
      response
    ).finish();

    process.stdout.write(responseBuffer)

    exit();
  })

  console.log("done");

}

main().catch(err => {
  console.error(err);
});
