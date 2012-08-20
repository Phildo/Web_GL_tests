window.onerror = function(msg, url, lineno)
{
  alert(url + '(' + lineno + '): ' + msg);
}

function createShader(str, type)
{
  var shader = gl.createShader(type);
  gl.shaderSource(shader, str);
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
  {
    throw gl.getShaderInfoLog(shader);
  }
  return shader;
}

function createProgram(vstr, fstr)
{
  var program = gl.createProgram();
  var vshader = createShader(vstr, gl.VERTEX_SHADER);
  var fshader = createShader(fstr, gl.FRAGMENT_SHADER);
  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  if(!gl.getProgramParameter(program, gl.LINK_STATUS))
  {
    throw gl.getProgramInfoLog(program);
  }
  return program;
}
