var eServiceCode = window.location.search.substring(1);

var blocksAPI = 'https://simpatico.smartcommunitylab.it/simp-engines/wae/eservice?eServiceId=' + eServiceCode;

$.getJSON( blocksAPI, function( data ) {
    fillData(data);
});


function fillData(blockData)
{

    $('#procedure_title').text(blockData[0].model.description.it);

    $.each(blockData[0].model.workflow,function(index,value){

        var blockHTMl = '<div class="col-xs-3 bs-wizard-step disabled">' + 
            '<div class="text-center bs-wizard-stepnum">'+ (index + 1) + '-' + blockData[0].model.workflow[index].name.it + '</div>' + 
            '<div class="progress"><div class="progress-bar"></div></div>' + 
            '<a href="#" class="bs-wizard-dot"></a>' +
            '<div class="bs-wizard-info text-center">'+ blockData[0].model.workflow[index].description.it + '</div>' +
        '</div>' ;

        $('#steps_container').append(blockHTMl);
      })

    

}
