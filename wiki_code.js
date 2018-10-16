$(document).ready(function() {
    $("#butt").on("click", function(event){
      event.preventDefault();
      var searchInput = document.getElementById('input').value;
      $.ajax({
        dataType: "jsonp",
        url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchInput + "&callback=JSON_CALLBACK",
        success: function(data) {
         $("#search_text").html(searchInput);
          var output = '';
          $.each(data.query.pages, function() { 
            output += '<h1>' + this.title + '</h1>\
                        <p>' + this.extract + '</p>\
                        <p><a href="https://en.wikipedia.org/?curid=' + this.pageid + '" target="_blank">Wikipedia article</a>\
                      </div>\
                    </div>\
                    </div>';
          $("#results").html(output);
         
          });
        }
      });
    });

});