var summaryURL = 'https://simpatico.hi-iberia.es:4570/cpd/api/diagram/summary/list';
var availableTags = [];
$.getJSON( summaryURL, function( data ) {
    $.each(data,function(index,value){availableTags.push(data[index].name);})
  });

$( function() {
    $( "#tags" ).autocomplete({
      source: availableTags,
      classes: {
        "ui-autocomplete": "highlight"
      },
      appendTo: "#searchBar"
    });
  } );