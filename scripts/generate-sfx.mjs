import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const audioDir = path.join(__dirname, "..", "public", "audio");

if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

const SAMPLE_RATE = 44100;

function createWavBuffer(samples, sampleRate = SAMPLE_RATE) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samples.length * (bitsPerSample / 8);
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF Chunk
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);

  // fmt Subchunk
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);

  // data Subchunk
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    const intSample = s < 0 ? s * 32768 : s * 32767;
    buffer.writeInt16LE(Math.floor(intSample), 44 + i * 2);
  }

  return buffer;
}

// 1. WhatsApp Pop (Burbuja de mensaje entrante / saliente)
function generatePop() {
  const duration = 0.08; // 80ms
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = t / duration;
    // Frequency drops rapidly from 900Hz to 250Hz
    const freq = 900 * Math.exp(-progress * 4) + 150;
    const env = Math.sin(progress * Math.PI * 0.5) * Math.exp(-progress * 7);
    samples[i] = Math.sin(2 * Math.PI * freq * t) * env * 0.85;
  }
  return createWavBuffer(samples);
}

// 2. Typing Clicks (Teclado rápido de smartphone)
function generateTyping() {
  const duration = 2.5; // 2.5s
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  // Intervalos de pulsación aleatorios típicos de escritura rápida
  const clickTimes = [0.05, 0.14, 0.22, 0.35, 0.44, 0.56, 0.68, 0.80, 0.95, 1.08, 1.20, 1.35, 1.50, 1.65, 1.82, 1.98, 2.15, 2.30];

  for (const ct of clickTimes) {
    const startIdx = Math.floor(ct * SAMPLE_RATE);
    const clickLen = Math.floor(SAMPLE_RATE * 0.018); // 18ms click

    for (let j = 0; j < clickLen && startIdx + j < numSamples; j++) {
      const t = j / SAMPLE_RATE;
      const env = Math.exp(-t * 350);
      const noise = (Math.random() * 2 - 1) * 0.4;
      const tone = Math.sin(2 * Math.PI * 1800 * t) * 0.6;
      samples[startIdx + j] += (tone + noise) * env * 0.35;
    }
  }
  return createWavBuffer(samples);
}

// 3. Whoosh / Swipe Transition
function generateWhoosh() {
  const duration = 0.5; // 500ms
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = t / duration;
    // Bell envelope
    const env = Math.sin(progress * Math.PI);
    // Noise with sweeping tone
    const noise = (Math.random() * 2 - 1) * 0.6;
    const sweepFreq = 150 + Math.sin(progress * Math.PI) * 700;
    const sweepTone = Math.sin(2 * Math.PI * sweepFreq * t) * 0.4;
    samples[i] = (noise + sweepTone) * env * 0.7;
  }
  return createWavBuffer(samples);
}

// 4. UI Tap / Click
function generateClick() {
  const duration = 0.04; // 40ms
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const progress = t / duration;
    const env = Math.exp(-progress * 12);
    const tone = Math.sin(2 * Math.PI * 2200 * t) * 0.7;
    const pop = Math.sin(2 * Math.PI * 400 * t) * 0.3;
    samples[i] = (tone + pop) * env * 0.75;
  }
  return createWavBuffer(samples);
}

// 5. Success Chime (Campana de confirmación cristalina)
function generateSuccessChime() {
  const duration = 1.4; // 1.4s
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  const freq1 = 1046.5; // C6
  const freq2 = 1318.51; // E6
  const freq3 = 1567.98; // G6
  const freq4 = 2093.0; // C7

  for (let i = 0; i < numSamples; i++) {
    const t = i / SAMPLE_RATE;
    const env1 = Math.exp(-t * 2.8);
    const env2 = Math.exp(-t * 3.5);

    const s1 = Math.sin(2 * Math.PI * freq1 * t) * 0.35 * env1;
    const s2 = Math.sin(2 * Math.PI * freq2 * t) * 0.30 * env1;
    const s3 = Math.sin(2 * Math.PI * freq3 * t) * 0.25 * env1;
    const s4 = Math.sin(2 * Math.PI * freq4 * t) * 0.15 * env2;

    samples[i] = s1 + s2 + s3 + s4;
  }
  return createWavBuffer(samples);
}

// 6. Upbeat Viral Background Beat (27 segundos de beat rítmico tech moderno para TikTok)
function generateBgBeat() {
  const duration = 28.0; // 28s a 125 BPM
  const numSamples = Math.floor(SAMPLE_RATE * duration);
  const samples = new Float32Array(numSamples);

  const bpm = 125;
  const beatDuration = 60 / bpm; // ~0.48s por beat
  const totalBeats = Math.floor(duration / beatDuration);

  // Notas de bajo synth (A minor: A1 55Hz, C2 65.4Hz, D2 73.4Hz, E2 82.4Hz)
  const bassNotes = [55, 55, 65.4, 73.4, 55, 55, 82.4, 73.4];

  for (let b = 0; b < totalBeats; b++) {
    const beatStartTime = b * beatDuration;
    const startIdx = Math.floor(beatStartTime * SAMPLE_RATE);

    // KICK en cada beat (0, 1, 2, 3)
    const kickLen = Math.floor(SAMPLE_RATE * 0.12);
    for (let j = 0; j < kickLen && startIdx + j < numSamples; j++) {
      const t = j / SAMPLE_RATE;
      const freq = 120 * Math.exp(-t * 35) + 45;
      const env = Math.exp(-t * 18);
      samples[startIdx + j] += Math.sin(2 * Math.PI * freq * t) * env * 0.45;
    }

    // CLAP / SNARE en los beats 2 y 4 (b % 2 === 1)
    if (b % 2 === 1) {
      const snareLen = Math.floor(SAMPLE_RATE * 0.16);
      for (let j = 0; j < snareLen && startIdx + j < numSamples; j++) {
        const t = j / SAMPLE_RATE;
        const env = Math.exp(-t * 22);
        const noise = (Math.random() * 2 - 1) * 0.35;
        const tone = Math.sin(2 * Math.PI * 220 * t) * 0.2;
        samples[startIdx + j] += (noise + tone) * env * 0.35;
      }
    }

    // HI-HAT cada medio beat (corcheas)
    const hatLen = Math.floor(SAMPLE_RATE * 0.04);
    const halfBeatIdx = startIdx + Math.floor((beatDuration / 2) * SAMPLE_RATE);
    for (let j = 0; j < hatLen && halfBeatIdx + j < numSamples; j++) {
      const t = j / SAMPLE_RATE;
      const env = Math.exp(-t * 70);
      const noise = (Math.random() * 2 - 1) * 0.25;
      samples[halfBeatIdx + j] += noise * env * 0.2;
    }

    // BASSLINE Synth
    const noteFreq = bassNotes[Math.floor(b / 2) % bassNotes.length];
    const bassLen = Math.floor(SAMPLE_RATE * beatDuration * 0.85);
    for (let j = 0; j < bassLen && startIdx + j < numSamples; j++) {
      const t = j / SAMPLE_RATE;
      const env = Math.exp(-t * 3.5);
      const sub = Math.sin(2 * Math.PI * noteFreq * t);
      const overtone = Math.sin(2 * Math.PI * noteFreq * 2 * t) * 0.3;
      samples[startIdx + j] += (sub + overtone) * env * 0.25;
    }
  }

  // Fade out suave en los últimos 2 segundos
  const fadeOutStart = Math.floor((duration - 2) * SAMPLE_RATE);
  for (let i = fadeOutStart; i < numSamples; i++) {
    const p = (i - fadeOutStart) / (numSamples - fadeOutStart);
    samples[i] *= 1 - p;
  }

  return createWavBuffer(samples);
}

// Guardar todos los archivos
fs.writeFileSync(path.join(audioDir, "whatsapp_pop.wav"), generatePop());
fs.writeFileSync(path.join(audioDir, "typing.wav"), generateTyping());
fs.writeFileSync(path.join(audioDir, "whoosh.wav"), generateWhoosh());
fs.writeFileSync(path.join(audioDir, "click.wav"), generateClick());
fs.writeFileSync(path.join(audioDir, "success_ding.wav"), generateSuccessChime());
fs.writeFileSync(path.join(audioDir, "bg_beat.wav"), generateBgBeat());

console.log("✅ Todos los efectos de sonido y la música de fondo fueron generados con éxito en public/audio/:");
console.log("   • whatsapp_pop.wav");
console.log("   • typing.wav");
console.log("   • whoosh.wav");
console.log("   • click.wav");
console.log("   • success_ding.wav");
console.log("   • bg_beat.wav (28 segundos @ 125 BPM)");
