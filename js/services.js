var summaryURL = 'https://simpatico.hi-iberia.es:4570/cpd/api/diagram/summary/list';
var servicesList = [];
$.getJSON( summaryURL, function( data ) {
    $.each(data,function(index,value){
      servicesList.push('<a href="procedure.html?'+data[index].phases[0].eServiceId+'"><li class="list-group-item">'+data[index].phases[0].eServiceId + "-" + data[index].name+'</li></a>');
    })
    $('#services_list').append( servicesList.join('') );
  });
