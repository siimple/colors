//Check if the siimple object exists
if(typeof siimple === 'undefined'){ var siimple = {}; }

//Get a color value
siimple.colors = function(name, index)
{
  //Check the name value
  if(typeof name !== 'string'){ throw new Error('No color name provided'); }

  //Check the index value
  if(typeof index !== 'number'){ index = siimple.colors.index_base; }

  //Parse the color name
  name = name.toLowerCase().trim();

  //Check if the color exists
  if(typeof siimple.colors[name] !== 'object')
  {
    //Throw color not found
    throw new Error('Color ' + name + ' does not exist');
  }

  //Get the color value
  var color = siimple.colors[name][index];

  //Check for undefined color
  if(typeof color !== 'string')
  {
    //Throw color index not found
    throw new Error('Color ' + name + ' with index ' + index + ' does not exist');
  }

  //Return the color string
  return color;
};

//Colors list
siimple.colors.list = [ 'navy', 'green', 'teal', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'grey', 'white' ];

//Navy palette
siimple.colors.navy = [ '#3f465a', '#495169', '#57607c', '#697496', '#8790ab', '#ffffff' ];

//Green palette
siimple.colors.green = [ '#15b784', '#18cd94', '#1add9f', '#32e7ad', '#48eab7', '#ffffff' ];

//Teal palette
siimple.colors.teal = [ '#13a08d', '#15b7a1', '#18d2ba', '#1be4c9', '#32e7cf', '#ffffff' ];

//Blue palette
siimple.colors.blue = [ '#1275ed', '#2a82ef', '#4894f0', '#599ef3', '#71acf4', '#ffffff' ];

//Purple palette
siimple.colors.purple = [ '#905cf0', '#9f73f2', '#b490f5', '#bfa2f6', '#cfb9f8', '#ffffff' ];

//Pink palette
siimple.colors.pink = [ '#f02872', '#f24081', '#f45b93', '#f570a1', '#f788b0', '#ffffff' ];

//Red palette
siimple.colors.red = [ '#e60036', '#ff003c', '#ff1a4f', '#ff3363', '#ff4d76', '#ffffff' ];

//Orange palette
siimple.colors.orange = [ '#ff5f33', '#ff734d', '#ff8463', '#ff9b80', '#ffaf99', '#ffffff' ];

//Yellow palette
siimple.colors.yellow = [ '#cc9900', '#e6ac00', '#ffbf00', '#ffc61a', '#ffcc33', '#ffffff' ];

//Grey palette
siimple.colors.grey = [ '#c3d7ef', '#d7e4f4', '#ebf2fa', '#f0f5fb', '#f1f4f9', '#57607c' ];

//White palette
siimple.colors.white = [ '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#57607c' ];


//Index base
siimple.colors.index_base = 2;

//Index hover
siimple.colors.index_over = 5;
