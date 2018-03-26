var serviceJson = 'js/guida_modulo_nido_v2.json';

// // Assign handlers immediately after making the request,
// // and remember the jqxhr object for this request
// var jqxhr = $.getJSON( serviceJson, function() {
//     console.log( "success" );
//   })
//     .done(function() {
//       console.log( "second success" );
//     })
//     .fail(function(data) {
//       console.log( "error" );
//     })
//     .always(function() {
//       console.log( "complete" );
//     });

$.getJSON( serviceJson, function( data ) {
    //$.each(data,function(index,value){availableTags.push(data[index].name);})
    // console.log(data);
    fillBlocks(data.model.blocks);
  });

  function fillBlocks(blocks)
  {
    //   console.log(blocks);
      $.each(blocks,function(index,value){
        //   console.log(index + value.id);
          var listItem = '<li class="block_element list-group-item">'+value.id.substr(0,1).toUpperCase()+value.id.substr(1)+'<br>'+value.annotations[0].text.it+'</li>';
          $('#blocks_list').append(listItem);
      })
  }