
$(document).ready(function(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#focusedInput').val();
    getRequest(searchTerm);
  });
 

 function getRequest(searchTerm){
  $.getJSON('http://www.youtube.com/?s=' + searchTerm + '&r=json', function(data){
    showResults(data.Search);
  });
 }

 function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
 }
 function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyCPbOwi4hun85wWoGMaYjwg87sYaJmShUo',
    q: $('#focusedInput').val()
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
 }
});
