var config = {
        apiKey: "AIzaSyBHREbD8MqFcqRjOs32i8Rn9LXNn9CKmyI",
        authDomain: "first-pwa-b2de6.firebaseapp.com",
        databaseURL: "https://first-pwa-b2de6.firebaseio.com",
        projectId: "first-pwa-b2de6",
        storageBucket: "first-pwa-b2de6.appspot.com",
        messagingSenderId: "310119987275"
      };
firebase.initializeApp(config);
console.log('Successfully initialized Firebase');
console.log(firebase);

var selectedFile;  
const storageService = firebase.storage();
const storageRef = storageService.ref();

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  selectedFile = evt.target.files[0];
  console.log(selectedFile);

  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function handleFileUploadSubmit(e) {
  console.log('YES');

  console.log(e);
  const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
  uploadTask.on('state_changed', (snapshot) => {
  // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, () => {
     // Do something once upload is complete
     console.log('success');
  });
};

document.getElementById('files').addEventListener('change', handleFileSelect, false);
document.getElementById('upload').addEventListener('click', handleFileUploadSubmit);
      