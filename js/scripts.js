
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
    html += '<p>' + value.title + '</p>';
    console.log(value.title);
  });
  $('#search-results').html(html);
 }
 function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyAuDxv_gRQTGrUzC_sA8viplSTbXH6JQX0',
    q: $('#focusedInput').val()
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
 } 
});
