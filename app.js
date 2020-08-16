
var counter = 5;
var intervalId = null;
var streamUrl = "https://player.infomaniak.com/?channel=69891&player=10535&ref=me.ludndev.ortbdirect";


function finish() {
  clearInterval(intervalId);

  try {
    var xhr = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
    xhr.open( "HEAD", streamUrl, true );

    xhr.onload = function () {
      console.log("XHR Status : " + xhr.status);
      if ( xhr.status == 200 ) {
        
        window.location.replace(streamUrl);

      } else {

        swal({
          title: "Êtes vous connecter à internet ?",
          text: "Veuillez vous assurer que votre connection est active et fonctionnelle.",
          icon: "warning",
          closeOnClickOutside: false,
          buttons: {
            cancel: "QUITTER",
            reload: "RESSAYER"
          },
          dangerMode: false,
        })
        .then((willReload) => {
          if (willReload) {
            location.reload();
          } else {
            window.close();
          }
        });

      }
    };

    xhr.onerror = function(e) {
      console.log(e);

      swal({
        title: "Something going bad !",
        text: "Oups ! Une erreur critique est survenue.",
        icon: "warning",
        closeOnClickOutside: false,
        buttons: {
          cancel: "QUITTER",
          reload: "RESSAYER"
        },
        dangerMode: false,
      })
      .then((willReload) => {
        if (willReload) {
          location.reload();
        } else {
          window.close();
        }
      });
      console.log("ERROR : ", err);
    };

    xhr.send();
  } catch(err) {
    console.log(err);
  }
  
}

function countDown() {
  counter--;
  if(counter == 0) finish();
  else {
    console.log('counter : ' + counter);
  }
}

function start(){
  intervalId = setInterval(countDown, 1000);
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("dom loaded");
  start();
}); 
