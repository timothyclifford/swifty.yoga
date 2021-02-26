document.addEventListener("DOMContentLoaded", function (e) {
  // const client = contentful.createClient({
  //   space: "jzsz7gl5og1r",
  //   accessToken: "86sDFMKyVACYsGWkeMaC_3tRIAeSaK3KKmdSXqoIgSo",
  // });
  // client
  //   .getEntry("6lVi6Q0KyWyiFpECnKcJsF")
  //   .then((entry) => {
  //     document
  //       .getElementById("customStyle")
  //       .appendChild(
  //         document.createTextNode(
  //           "html { background-color: #" + entry.fields.backgroundColour + " }"
  //         )
  //       );
  //     document
  //       .getElementById("customStyle")
  //       .appendChild(
  //         document.createTextNode(
  //           ".headingOne { color: #" + entry.fields.headingOne + " }"
  //         )
  //       );
  //     document
  //       .getElementById("customStyle")
  //       .appendChild(
  //         document.createTextNode(
  //           ".headingTwo { color: #" + entry.fields.headingTwo + " }"
  //         )
  //       );
  //     document
  //       .getElementById("customStyle")
  //       .appendChild(
  //         document.createTextNode(
  //           "body, p, a, a:hover, .body { color: #" + entry.fields.body + " }"
  //         )
  //       );
  //     document
  //       .getElementById("customStyle")
  //       .appendChild(
  //         document.createTextNode(
  //           "a { border-bottom: 1px solid #" + entry.fields.body + " }"
  //         )
  //       );
  //     document
  //       .getElementById("customStyle")
  //       .appendChild(
  //         document.createTextNode(
  //           "a:hover { border-bottom: 1px solid #" + entry.fields.body + " }"
  //         )
  //       );
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // client
  //   .getEntry("6iu8KUEIeRj87OMtRtJGIY")
  //   .then((entry) => {
  //     document.getElementById("whoami").innerHTML = entry.fields.name;
  //     document.getElementById("title").innerHTML = entry.fields.title;
  //     document.getElementById("bio").innerHTML = entry.fields.content.replace(
  //       /(?:\r\n|\r|\n)/g,
  //       "<br>"
  //     );
  //     document.getElementById("photo").style.backgroundImage =
  //       "url(https:" + entry.fields.photo.fields.file.url + ")";
  //     document.getElementById("columnOne").innerHTML =
  //       entry.fields.columnOne.content[0].content[0].value;
  //     document.getElementById("columnTwo").innerHTML =
  //       entry.fields.columnTwo.content[0].content[0].value;
  //     document.getElementById("columnThree").innerHTML =
  //       entry.fields.columnThree.content[0].content[0].value;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-143058888-1");
