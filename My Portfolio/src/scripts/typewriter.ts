export class Typewriter {
  private element: HTMLElement | null;
  private strings: string[];
  private currentStringIndex: number = 0;
  private currentCharIndex: number = 0;
  private isDeleting: boolean = false;
  private delay: number;
  private cursor: string;
  private autoStart: boolean;
  private loop: boolean;
  private timeout: number | null = null;

  constructor(selector: string, options: {
    strings: string[];
    autoStart?: boolean;
    loop?: boolean;
    delay?: number;
    cursor?: string;
  }) {
    this.element = document.querySelector(selector);
    this.strings = options.strings;
    this.delay = options.delay || 100;
    this.cursor = options.cursor || '|';
    this.autoStart = options.autoStart || true;
    this.loop = options.loop || false;

    if (this.autoStart) {
      this.start();
    }
  }

  start() {
    this.type();
  }

  private type() {
    if (!this.element) return;

    const currentString = this.strings[this.currentStringIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentString.substring(0, this.currentCharIndex - 1) + this.cursor;
      this.currentCharIndex--;
    } else {
      this.element.textContent = currentString.substring(0, this.currentCharIndex + 1) + this.cursor;
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentString.length) {
      this.isDeleting = true;
      this.timeout = window.setTimeout(() => this.type(), 2000);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentStringIndex = this.loop ? (this.currentStringIndex + 1) % this.strings.length : this.currentStringIndex;
      this.timeout = window.setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.delay / 2 : this.delay;
      this.timeout = window.setTimeout(() => this.type(), speed);
    }
  }

  destroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
}