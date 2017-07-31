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
