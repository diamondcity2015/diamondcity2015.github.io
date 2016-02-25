$('.social-feed-container').socialfeed({
    // FACEBOOK
    facebook:{
        accounts: ['@teslamotors','!teslamotors'],  //Array: Specify a list of accounts from which to pull wall posts
        limit: 2,                                   //Integer: max number of posts to load
        access_token: 'YOUR_FACEBOOK_ACCESS_TOKEN'  //String: "APP_ID|APP_SECRET"
    },

        // GENERAL SETTINGS
    length:400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
    show_media:true,                                //Boolean: if false, doesn't display any post images
    media_min_width: 300,                           //Integer: Only get posts with images larger than this value
    update_period: 5000,                            //Integer: Number of seconds before social-feed will attempt to load new posts.
    template: "tweet.html",                         //String: Filename used to get the post template.
    template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
    '<article class="twitter-post"> \
    <h4>{{=it.author_name}}</h4><p>{{=it.text}}  \
    <a href="{{=it.link}}" target="_blank">read more</a> \
    </p> \
    </article>',
    date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
    moderation: function(content) {                 //Function: if returns false, template will have class hidden
        return  (content.text) ? content.text.indexOf('what') == -1 : true;
    },
    callback: function() {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
        console.log("All posts collected!");
    }
});