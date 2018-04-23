var OMDB_API_URL = 'https://www.omdbapi.com/?apikey=ef09b0cc';

function getOMDBResults(title) {
  //let's make sure the field isn't empty
  if (title.length == 0) {
    $("#result").html("Please enter text into the search field");
  } else {
    //if a search term is entered...we'll start the search process
    //we can build the URL string to execute the HTTP GET request using $.get
    $.get(OMDB_API_URL + "&t=" + title, function(searchResult) {

      //Student Code Starts Here
      //grab your HTML template from the DOM
      var source = $('#movie-template').html();
      //Compile your template
      var template = Handlebars.compile(source);
      //define your movie object
      var movie = {
        title: searchResult.Title,
        releaseDate: searchResult.Released,
        actors: searchResult.Actors,
        poster: searchResult.Poster
      };
      // pass your movie object to your compiled template
      // the invocation of template will create HTML
      // as long as the object's properties are in handlebars, {{}}, they will be evaluated in the generated HTML
      var html = template(movie);

      // append your html to the DOM for your users to see
        $('#result').html(html);
    });
  }
};

//click event listener on #searchBtn element
$("#searchBtn").on('click', function(e) {
  e.preventDefault();
  getOMDBResults($("#searchField").val());
});
