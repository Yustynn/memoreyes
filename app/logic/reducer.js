import Firebase from 'firebase';

var fb = new Firebase("https://memoreyes.firebaseio.com");

function login() {
    console.log('clicked!');
    fb.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
  });
}


export default function(state = {}, action) {
    case (action.type) {
        case
    }
}
