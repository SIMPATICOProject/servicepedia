//var summaryURL = 'https://simpatico.hi-iberia.es:4570/cpd/api/diagram/summary/list';
//var summaryURL = 'https://simpatico.smartcommunitylab.it/cpd/api/diagram/summary/list';
var summaryURL = 'https://simpatico.business-engineering.it:443/cpd/api/procedure/summary/list';
var availableTags = [];
$.getJSON( summaryURL, function( data ) {
    $.each(data,function(index,value){
      availableTags.push(data[index].phases[0].id + "-" + data[index].name);
    })
  });

$( function() {
    $( "#tags" ).autocomplete({
      source: availableTags,
      classes: {
        "ui-autocomplete": "highlight"
      },
      list: {
        match: {
          enabled: true
        }
      },
      appendTo: "#searchBar"
    });
  } );

function searchBar ()
{
  var goTo = $( "#tags" ).val().split('-');
  window.location.href ='procedure.html?'+goTo[0];

}

function servicesList()
{
  var servicesList = [];
  $.getJSON( summaryURL, function( data ) {
    console.log(data);
      $.each(data,function(index,value){
        servicesList.push('<a href="procedure.html?'+data[index].id+'"><li class="list-group-item">'+data[index].id + "-" + data[index].name+'</li></a>');
      })
      $('#services_list').append( servicesList.join('') );
    
    });
}
