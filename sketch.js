let sine = new Tone.Synth({
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.1,
    decay: 0.1,
    sustain: 0.5,
    release: 0.01
  }
}).toDestination();


function setup() {
  createCanvas(400, 400);
  
  const bend = new Tone.PitchShift();
  bend.pitch = 0;

  const reverb = new Tone.Reverb();
  reverb.decay.value = 0;

  sine.connect(bend);
  bend.toDestination();
  sine.connect(reverb);
  reverb.toDestination();
  
  pitchSlider = createSlider(-12, 12, 0, 0.01);
  pitchSlider.position(120, 200);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value()); 

  pitchSlider2 = createSlider(-12, 12, 0, 3);
  pitchSlider2.position(120, 170);
  pitchSlider2.mouseMoved(() => reverb.decay.value = pitchSlider2.value()); 
}

function keyPressed() {
  if (key === 'q') {
    sine.triggerAttackRelease('C4', 1);
  } else if (key === 'w') {
    sine.triggerAttackRelease('D4', 1);
  }  else if (key === 'e') {
    sine.triggerAttackRelease('E4', 1);
  } else if (key === 'r') {
    sine.triggerAttackRelease('F4', 1);
  } else if (key === 't') {
    sine.triggerAttackRelease('A4', 1);
  } else if (key === 'y') {
    sine.triggerAttackRelease('B4', 1);
  }else if (key === 'u') {
    sine.triggerAttackRelease('C5', 1);
  } else if (key === 'i') {
    sine.triggerAttackRelease('D5', 1);
  }
}

function draw() {
  background(250, 220, 200);
  text('Q = C4', 20, 100);
  text('W = D4', 20, 125);
  text('E = E4', 20, 150);
  text('R = F4', 20, 175);
  text('T = A4', 20, 200);
  text('Y = B4', 20, 225);
  text('U = C5', 20, 250);
  text('I = D5', 20, 275);

  text('Pitch', 122, 200);
  text('Reverb', 122, 170);
}