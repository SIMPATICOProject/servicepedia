var blocksAPI = 'https://simpatico.smartcommunitylab.it/simp-engines/wae/eservice/{eServiceId}?eServiceId=2';

$.getJSON( blocksAPI, function( data ) {
    fillData(data);
});


function fillData(blockData)
{

    $('#procedure_title').text(blockData[0].model.description.it);

    $.each(blockData[0].model.workflow,function(index,value){

        var blockHTMl = '<div class="col-xs-3 bs-wizard-step disabled">' + 
            '<div class="text-center bs-wizard-stepnum">'+ blockData[0].model.workflow[index].id + ' ' + blockData[0].model.workflow[index].name.it + '</div>' + 
            '<div class="progress"><div class="progress-bar"></div></div>' + 
            '<a href="#" class="bs-wizard-dot"></a>' +
            '<div class="bs-wizard-info text-center">'+ blockData[0].model.workflow[index].description.it + '</div>' +
        '</div>' ;

// var blockHTMl = '<div class="3ap">'+
//         '<div class="col-3">' + 
//             '<div class="card card-block">'+ blockData[0].model.blocks[index].id +'</div>' + 
//             blockData[0].model.blocks[index].description.it
//         '</div>';

// var blockHTMl = '<div class="col-xs-3">' + 
//         blockData[0].model.blocks[index].id +
//         '<div class="well">'+blockData[0].model.blocks[index].description.it+'</div>' +
//     '</div>';

        $('#blocks_container').append(blockHTMl);
      })

    

}
