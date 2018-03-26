var eServiceCode = window.location.search.substring(1);

var procedureURL = 'https://simpatico.hi-iberia.es:4570/cpd/api/diagram/eService/'+eServiceCode+'/summary';
var qaeURL = 'https://simpatico.morelab.deusto.es/qae/questions/list/';
var procedureData;
var showChar = 100;  // How many characters are shown by default
var ellipsestext = "...";
var moretext = "Show more >";
var lesstext = "Show less";

$.getJSON( procedureURL, function( data ) {
    //$.each(data,function(index,value){availableTags.push(data[index].name);})
    procedureData = data[0];
    fillData(procedureData);
  });


  function fillData(procedureData)
  {
    $('#procedure_title').text(procedureData.name);
    $('#primary_link').attr("href",qaeURL + eServiceCode);
    $('#procedure_documentation').text(procedureData.documentation);
    $.each(procedureData.phases,function(index,value){

      if(procedureData.phases[index].documentation.length > showChar) {
        var c = procedureData.phases[index].documentation.substr(0, showChar);
        var h = procedureData.phases[index].documentation.substr(showChar, procedureData.phases[index].documentation.length - showChar);

        var documentationText = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a class="morelink">' + moretext + '</a></span>';
      } else {
        var documentationText = procedureData.phases[index].documentation;
      }

      var columnHTML = 
      '<div class="col-md-4">'+
        '<div class="panel panel-primary">' +
              '<div class="row" style="margin: inherit; background-color:#428bca; height: auto !important; margin-bottom: 0px !important">'+
                '<div class="col-md-2"><img class="img-responsive pull-left" style="margin-top: 4px;"src="./assets/'+(index+1)+'.png"></div>' + 
                '<div class="col-md-6">' + procedureData.phases[index]["name:"] + '</div>' + 
                '<div class="col-md-2"><a href="'+qaeURL+eServiceCode+'/Paragraph'+(index+1)+'"><img class="img-responsive pull-right" src="./assets/qae.png"></a></div>' +
                '<div class="col-md-2"><a href="https://simpatico.hi-iberia.es:4570/cpd/en/"><img class="img-responsive pull-right" src="./assets/cpd.png"></a></div>' + 
              '</div>' + //row
      
            '<div class="panel-body text-left">'+
              '<span class="more">' + 
                documentationText +
              '</span>' +
            '</div>'+ //panel-body
        '</div>'+ //panel-primary
      '</div>'; //col-md-3

        $('#phases_container').append(columnHTML);
    })
  }


  $(document).ready(function() {
    $(document.body).on('click', ".morelink" ,function(){
    // $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});