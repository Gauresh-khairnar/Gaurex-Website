// Web Audio API Synthesizer for UI Sound Effects & Ambient Luxury Music
// Zero external audio files required!

class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  // Music Synthesizer state
  public musicEnabled: boolean = false;
  private musicInterval: NodeJS.Timeout | null = null;
  private ambientGain: GainNode | null = null;
  private chordIndex: number = 0;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playClick() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {}
  }

  public playSuccess() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.3);
    } catch {}
  }

  public playModalOpen() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.12);
    } catch {}
  }

  // ----------------------------------------------------
  // LUXURY AMBIENT SYNTH MUSIC GENERATOR
  // ----------------------------------------------------
  public toggleMusic(): boolean {
    this.musicEnabled = !this.musicEnabled;
    if (this.musicEnabled) {
      this.startLuxuryMusic();
    } else {
      this.stopLuxuryMusic();
    }
    return this.musicEnabled;
  }

  private startLuxuryMusic() {
    this.initCtx();
    if (!this.ctx) return;

    // Ambient Luxury Chord Progression (A minor 9 / F maj 7 / D minor 9 / E7 alt)
    const chords = [
      [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
      [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj7
      [146.83, 220.00, 261.63, 349.23, 440.00], // Dm9
      [164.81, 246.94, 329.63, 392.00, 493.88]  // Em7
    ];

    const playChord = () => {
      if (!this.ctx || !this.musicEnabled) return;
      const now = this.ctx.currentTime;
      const currentChord = chords[this.chordIndex];
      this.chordIndex = (this.chordIndex + 1) % chords.length;

      currentChord.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);

        const volume = i === 0 ? 0.05 : 0.02;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(volume, now + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 6.0);
      });
    };

    playChord();
    this.musicInterval = setInterval(playChord, 5000);
  }

  private stopLuxuryMusic() {
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

export const soundFx = new SoundEngine();
