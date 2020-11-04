// imageToShow: any;

// createImageFromBlob(image: Blob) {
//    let reader = new FileReader();
//    reader.addEventListener("load", () => {
//       this.imageToShow = reader.result;
//    }, false);

//    if (image) {
//       reader.readAsDataURL(image);
//    }
// }
// getImageFromService() {
//     this.isImageLoading = true;
//     this.imageService.getImage('http://62.210.247.201:9000/adidas.png').subscribe(data => {
//       this.createImageFromBlob(data);
//       this.isImageLoading = false;
//     }, error => {
//       this.isImageLoading = false;
//       console.log(error);
//     });
// }

