/**
 * Function to get images from Flickr
 *
 * @setId The flickr set the images belong to.
 */  
function getImgs(setId) {
  var URL = "https://api.flickr.com/services/rest/" +           // Wake up the Flickr API gods.
    "?method=flickr.photosets.getPhotos" +  // Get photo from a photoset. http://www.flickr.com/services/api/flickr.photosets.getPhotos.htm
    "&api_key={43b56406a25923178224e49e80990cd4}" +  // API key. Get one here: http://www.flickr.com/services/apps/create/apply/
    "&photoset_id=" + setId +               // The set ID.
    "&privacy_filter=1" +                   // 1 signifies all public photos.
    "&per_page=10" +                        // For the sake of this example I am limiting it to 20 photos.
    "&format=json&nojsoncallback=1";        // Er, nothing much to explain here.

  // See the API in action here: http://www.flickr.com/services/api/explore/flickr.photosets.getPhotos
  $.getJSON(URL, function(data){
    $.each(data.photoset.photo, function(i, item){
      // Creating the image URL. Info: http://www.flickr.com/services/api/misc.urls.html
      var img_src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
      var img_thumb = $("<img/>").attr("src", img_src).css("margin", "8px")
      $(img_thumb).appendTo("#flickrImage");
    });
  });
}

$(document).ready(function() {
  // getImgs("72157658124007442"); // Call the function!
  
  $('.carousel').carousel({
                    interval: 10000,
                    wrap: true
                  })
  
});