var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

$(document).ready(function () {
  $.ajax({
    type: 'POST',
    url: 'https://data.mongodb-api.com/app/data-sbkkw/endpoint/data/v1/action/aggregate',
    headers: { 
      'Content-Type' : 'application/json',
      'Access-Control-Request-Headers' : '*',
      'api-key' : 'qZOSUzY1pbrp0VUhbwflo42fsnnRQKDYCym84IRyz7vTfoc80A4KTkVpzIcnJAN0',
      'Accept' : 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'*'
    },
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    crossDomain: true,
   
    // beforeSend: function(xhr){
    //   xhr.setRequestHeader('Content-Type', 'application/json');
    //   xhr.setRequestHeader('Access-Control-Request-Headers',"*");
    //   xhr.setRequestHeader('api-key', 'qZOSUzY1pbrp0VUhbwflo42fsnnRQKDYCym84IRyz7vTfoc80A4KTkVpzIcnJAN0');
    //   xhr.setRequestHeader('Accept', 'application/json');

    //   xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    //   xhr.setRequestHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    //   xhr.setRequestHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    // },
    data: JSON.stringify(

      {
        "collection": "analyzer_redmine_data",
        "database": "analyzer",
        "dataSource": "analyser",
        "pipeline": [
          {
            "$lookup": {
              "from": "analyzer_errors_collection",
              "localField": "error_code",
              "foreignField": "errror_code",
              "as": "errror_code_details"
            }
          }
        ]
      }


    ),
   
    contentType: "application/json; charset=utf-8",
    dataType   : "json",
    success    : function(respose){
         console.log(respose)
         alert("success");
    },
    error: function(error){
      console.log(error);
      alert("error");
  }  
});
  //$('#table1').DataTable();
});