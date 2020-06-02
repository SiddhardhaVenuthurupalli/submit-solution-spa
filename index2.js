
var element = document.getElementsByTagName("a")[0];
element.onclick = function(){
 
swal({
  title: "Are you sure?",
  text: "Click ok to show the success alert",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Your file has been Submitted!", {
      icon: "success",
    });
  } else {
    swal("Your file is not Submitted!");
  }
})
  
}