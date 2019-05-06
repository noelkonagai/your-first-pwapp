// // SOME V2 OF UPLOAD HANDLING
// var input = document.querySelector('input');
// input.addEventListener('change', function () {
//   var file = input.files[0]; // file is a Blob

//   db.put({
//     _id: 'mydoc',
//     _attachments: {
//       filename: {
//         type: file.type,
//         data: file
//       }
//     }
//   }).catch(function (err) {
//     console.log(err);
//   });
// });

// // THIS PART IS FOR HANDLING FILE UPLOADS
// function sendFiles() {
//   const imgs = document.querySelectorAll(".obj");
  
//   for (let i = 0; i < imgs.length; i++) {
//     new FileUpload(imgs[i], imgs[i].file);
//   }
// }

// function FileUpload(img, file) {
//   const reader = new FileReader();  
//   this.ctrl = createThrobber(img);
//   const xhr = new XMLHttpRequest();
//   this.xhr = xhr;
  
//   const self = this;
//   this.xhr.upload.addEventListener("progress", function(e) {
//         if (e.lengthComputable) {
//           const percentage = Math.round((e.loaded * 100) / e.total);
//           self.ctrl.update(percentage);
//         }
//       }, false);
  
//   xhr.upload.addEventListener("load", function(e){
//           self.ctrl.update(100);
//           const canvas = self.ctrl.ctx.canvas;
//           canvas.parentNode.removeChild(canvas);
//       }, false);
//   xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
//   xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
//   reader.onload = function(evt) {
//     xhr.send(evt.target.result);
//   };
//   reader.readAsBinaryString(file);
// }