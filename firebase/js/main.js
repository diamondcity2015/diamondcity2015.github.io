// 1. Initialize Firebase
//<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
//<script>
  // Initialize Firebase
 // var config = {
  //  apiKey: "AIzaSyDbiyXsiAS0PQPTkfTADDmOpe-_jh62P3o",
  //  authDomain: "js-circuits-ad6cc.firebaseapp.com",
 //   databaseURL: "https://js-circuits-ad6cc.firebaseio.com",
  //  projectId: "js-circuits-ad6cc",
  //  storageBucket: "js-circuits-ad6cc.appspot.com",
 //   messagingSenderId: "306628274962"
// };
 // firebase.initializeApp(config);
//</script>





// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyB06LoLe1_AeNGeo1NghnSWJ45NPanB83E",
  authDomain: "js-circuits-14769.firebaseapp.com",
  databaseURL: "https://js-circuits-14769.firebaseio.com",
  projectId: "js-circuits-14769",
  storageBucket: "js-circuits-14769.appspot.com",
  messagingSenderId: "342192085951"
};
firebase.initializeApp(config);

var database = firebase.database();


// 2. connect to your Firebase application using your reference URL

  // by default a form submit reloads the DOM which will subsequently reload all our JS
  // to avoid this we preventDefault()

  // grab user's comment from input field

  // clear the user's comment from the input (for UX purposes)

  // create a section for comments data in your db

  // use the set method to save data to the comments
  $('#comment-form').on('submit', function (e) {
    // prevent the page from reloading
    e.preventDefault();
    // grab user's comment from input field
    var userInput = $('#comment').val();
    // clear the user's comment from the input (for UX purposes)
    $('#comment').val('')
    // create a section for comments data in your db
    var commentsReference = database.ref('comments');
    // use the set method to save data to the comments
    commentsReference.push({
      comment: userInput,
      likes: 0
    });
  });



// 3. retrieve comments data when page loads nd when comments are added/updated

  // use reference to database to listen for changes in comments data

    // Get all comments stored in the results we received back from Firebase

    // Set an empty array where we can add new comment element

    // iterate (loop) through all comments coming from database call

      // Create an object literal with the data we'll pass to Handlebars

      // Get the HTML from our Handlebars comment template

      // Compile our Handlebars template

      // Pass the data for this comment (context) into the template

      // push newly created element to array of comments

    // remove all list items from DOM before appending list items

    // append each comment to the list of comments in the DOM

function getComments() {
  // Listen for changes in comments data
  database.ref('comments').on('value', function (results) {
    // Get all comments stored in the results we received back from Firebase
    var allComments = results.val();
    // Set an empty array where we can add all comments we'll append to the DOM
    var comments = [];
    // iterate (loop) through all comments coming from database call
    for (var item in allComments) {
      // Create an object literal with the data we'll pass to Handlebars
      var context = {
        comment: allComments[item].comment,
        likes: allComments[item].likes,
        commentId: item
      };
      // Create a Handlebars template and add our data to the template
      // Get the HTML from our Handlebars comment template
      var source = $("#comment-template").html();
      // Compile our Handlebars template
      var template = Handlebars.compile(source);
      // Pass the data for this comment (context) into the template
      var commentListElement = template(context);
      // push newly created element to array of comments
      comments.push(commentListElement)
    }
    // Update the DOM
    // remove all list items from DOM before appending list items
    $('.comments').empty()
    // append each comment to the list of comments in the DOM
    for (var i in comments) {
      $('.comments').append(comments[i])
    }
  });
}


// 4). When page loads, get comments
getComments();


// 5). Click event to delete comments

  // find comment whose objectId is equal to the id we're searching with
  $('.comments').on('click', '.delete', function (e) {
    // Get the ID for the comment we want to update
    var id = $(e.target).parent().data('id')

    // find comment whose objectId is equal to the id we're searching with
    var commentReference = database.ref('comments/' + id)


    // Use remove method to remove the comment from the database
    commentReference.remove()
  });


// 6). Click event to like comments

  // find comment whose objectId is equal to the id we're searching with

  // Get number of likes from HTML

  // Convert likes to a number and add a like

  // Update likes property in database
  $('.comments').on('click', '.like', function (e) {

    // Get the ID from the parent of the like button we clicked on
    var id = $(e.target).parent().data('id');

    // find comment whose objectId is equal to the id we're searching with
    var commentReference = database.ref('comments/' + id);

    // Get number of likes from HTML
    var likes = $('#likes').html();

    // Convert likes to a number and add a like
    likes = parseInt(likes, 10) + 1;

    // Update likes property in database using Firebase's update() method.
    commentReference.update({
      likes: likes
    });

  });
