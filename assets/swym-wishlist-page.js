window._swat.getAllCollections(function(collections){
    // code to use the returned collections

    console.log(collections);
  })
  var collections = window._swat.getAllCollections(
    function(collections){},
    true
  ); // with the bImmediate argument