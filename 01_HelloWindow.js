// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
  console.error('WebGL 2 is not supported by your browser.');
}

canvas.width = 500;
canvas.height = 500;

// util/utils.js
// Add resize handler (keeping the aspect ratio)
function resizeAspectRatio(gl, canvas) {
  window.addEventListener('resize', () => {
    // Calculate new canvas dimensions while maintaining aspect ratio
    const originalWidth = canvas.width;
    const originalHeight = canvas.height;
    const aspectRatio = 1; // originalWidth / originalHeight;
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;

    if (newWidth / newHeight > aspectRatio) {
      newWidth = newHeight * aspectRatio;
    } else {
      newHeight = newWidth / aspectRatio;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    render();
  });
}

// Add resize handler (keeping the aspect ratio: see ../util/util.js)
resizeAspectRatio(gl, canvas);

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);
//gl.clearColor(0.5, 0.4, 0.3, 1.0);

// Turn on the scissor test (after initializing viewport)
gl.enable(gl.SCISSOR_TEST);

// Start rendering
render();

// Render loop
function render() {
  gl.scissor(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
  gl.clearColor(0.1, 1.0, 0.1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.scissor(0, 0, canvas.width / 2, canvas.height / 2);
  gl.clearColor(1, 1.0, 0.1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.scissor(canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
  gl.clearColor(0.1, 0.1, 1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.scissor(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
  gl.clearColor(1.0, 0.1, 0.1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

}
