var summaryURL = 'https://simpatico.hi-iberia.es:4570/cpd/api/diagram/summary/list';
var availableTags = [];
$.getJSON( summaryURL, function( data ) {
    $.each(data,function(index,value){
      //var procedure = {'id': data[index].phases[0].eServiceId, 'name' : data[index].name };
      availableTags.push(data[index].phases[0].eServiceId + "-" + data[index].name);
      //availableTags.push(procedure);
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
    console.log("Yendo");
    var goTo = $( "#tags" ).val().split('-');
    window.location.href ='procedure.html?'+goTo[0];

  }