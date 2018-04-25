var blocksAPI = 'https://simpatico.smartcommunitylab.it/simp-engines/wae/eservice/{eServiceId}?eServiceId=2';

$.getJSON( blocksAPI, function( data ) {
    fillData(data);
});


function fillData(blockData)
{

    $('#procedure_title').text(blockData[0].model.description.it);

    $.each(blockData[0].model.blocks,function(index,value){

        var blockHTMl = '<div class="col-xs-3 bs-wizard-step disabled">' + 
            '<div class="text-center bs-wizard-stepnum">'+ blockData[0].model.blocks[index].id +'</div>' + 
            '<div class="progress"><div class="progress-bar"></div></div>' + 
            '<a href="#" class="bs-wizard-dot"></a>' +
            '<div class="bs-wizard-info text-center">'+ blockData[0].model.blocks[index].description.it + '</div>' +
        '</div>' ;

        $('#blocks_container').append(blockHTMl);
      })

    

}
