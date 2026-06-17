
        function invitationApp() {
            return {
                showWelcomeModal: true,
                showEnvelopeModal: false,
                envelopeOpened: false,
                musicPlaying: false,
                showToast: false,
                showSuccessCard: false,
                currentTheme: 'sage',

                // Photo Gallery state
                lightboxOpen: false,
                lightboxIndex: 0,
                gallery: [
                    {
                        url: "https://placehold.co/600x600/FAF7F2/524a3a?text=Mis+Primeros+Días",
                        caption: "Bienvenida al mundo"
                    },
                    {
                        url: "https://placehold.co/600x600/E3EDF7/314d69?text=Dulces+Sonrisas",
                        caption: "Tu sonrisa es mi luz celestial"
                    },
                    {
                        url: "https://placehold.co/600x600/FAF2F5/5e3b48?text=Mi+Bautizo",
                        caption: "Iniciando mi viaje espiritual"
                    },
                    {
                        url: "https://placehold.co/600x600/F0F3F1/3a4c41?text=Abrazos+Cálidos",
                        caption: "Rodeado de amor incondicional"
                    },
                    {
                        url: "https://placehold.co/600x600/FFF9F0/614e2d?text=La+Luz+De+Mis+Ojos",
                        caption: "Un regalo del cielo"
                    },
                    {
                        url: "https://placehold.co/600x600/E8E3FA/413a5e?text=Mi+Familia",
                        caption: "Guiado por manos bondadosas"
                    }
                ],
                
                // Copywriting Invitation Data Model
                inviteData: {
                    babyName: 'Mateo',
                    quote: '"Hay momentos en la vida que son especiales por sí solos, pero compartirlos con quienes más amamos los hace inolvidables."',
                    motherName: 'Sofía Martínez de la O',
                    fatherName: 'Alejandro Ruiz Estrada',
                    godmotherName: 'Mariana Ruiz Estrada',
                    godfatherName: 'Daniel Castro Mendoza'
                },

                // Demo interactive states
                form: {
                    name: '',
                    attendance: 'yes',
                    guests: '2',
                    note: ''
                },
                
                rsvps: [
                    { name: "Tía Martha Ruiz", attendance: "yes", guests: "2" },
                    { name: "Padrino Daniel", attendance: "yes", guests: "1" },
                    { name: "Familia Gómez", attendance: "yes", guests: "4" }
                ],

                // Beautiful customizable themes that instantly alter the layout look & feel
                themes: {
                    sage: {
                        name: 'Salvia',
                        bgClass: 'bg-[#F4F7F4]',
                        textClass: 'text-[#2E4230]',
                        accentTextClass: 'text-[#3E5C41]',
                        accentBgClass: 'bg-[#3E5C41]',
                        flowerColor: 'text-[#3E5C41]/20',
                        previewColor: 'bg-[#899B89]',
                        headerBg: 'bg-[#F4F7F4]/80'
                    },
                    blue: {
                        name: 'Azul & Oro',
                        bgClass: 'bg-[#0E1B29]',
                        textClass: 'text-[#E2E8F0]',
                        accentTextClass: 'text-[#DFB251]',
                        accentBgClass: 'bg-[#DFB251]',
                        flowerColor: 'text-[#DFB251]/20',
                        previewColor: 'bg-[#1e3a5f]',
                        headerBg: 'bg-[#0E1B29]/90'
                    },
                    pink: {
                        name: 'Rosa Romántico',
                        bgClass: 'bg-[#FAF0F2]',
                        textClass: 'text-[#4A2E35]',
                        accentTextClass: 'text-[#8E4455]',
                        accentBgClass: 'bg-[#8E4455]',
                        flowerColor: 'text-[#8E4455]/20',
                        previewColor: 'bg-[#E5B5C1]',
                        headerBg: 'bg-[#FAF0F2]/80'
                    },
                    champagne: {
                        name: 'Champagne Luxury',
                        bgClass: 'bg-[#FCF9F3]',
                        textClass: 'text-[#42372A]',
                        accentTextClass: 'text-[#B08D46]',
                        accentBgClass: 'bg-[#B08D46]',
                        flowerColor: 'text-[#B08D46]/20',
                        previewColor: 'bg-[#D4AF37]',
                        headerBg: 'bg-[#FCF9F3]/80'
                    },
                    lavender: {
                        name: 'Lavanda',
                        bgClass: 'bg-[#F5F2FA]',
                        textClass: 'text-[#362A4D]',
                        accentTextClass: 'text-[#6C5696]',
                        accentBgClass: 'bg-[#6C5696]',
                        flowerColor: 'text-[#6C5696]/20',
                        previewColor: 'bg-[#B1A0D4]',
                        headerBg: 'bg-[#F5F2FA]/80'
                    },
                    terracotta: {
                        name: 'Terracota Cálida',
                        bgClass: 'bg-[#FAF4F0]',
                        textClass: 'text-[#5C2B1B]',
                        accentTextClass: 'text-[#C7633D]',
                        accentBgClass: 'bg-[#C7633D]',
                        flowerColor: 'text-[#C7633D]/20',
                        previewColor: 'bg-[#CD7F5D]',
                        headerBg: 'bg-[#FAF4F0]/80'
                    },
                    burgundy: {
                        name: 'Borgoña',
                        bgClass: 'bg-[#FAF5F5]',
                        textClass: 'text-[#45101A]',
                        accentTextClass: 'text-[#8C1F33]',
                        accentBgClass: 'bg-[#8C1F33]',
                        flowerColor: 'text-[#8C1F33]/20',
                        previewColor: 'bg-[#800020]',
                        headerBg: 'bg-[#FAF5F5]/80'
                    },
                    emerald: {
                        name: 'Esmeralda',
                        bgClass: 'bg-[#F0F6F3]',
                        textClass: 'text-[#14291E]',
                        accentTextClass: 'text-[#1D543A]',
                        accentBgClass: 'bg-[#1D543A]',
                        flowerColor: 'text-[#1D543A]/20',
                        previewColor: 'bg-[#1D543A]',
                        headerBg: 'bg-[#F0F6F3]/80'
                    }
                },

                countdown: {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                },

                audioCtx: null,
                melodyInterval: null,

                initApp() {
                    this.startCountdown();
                    this.initCanvasSparkles();
                },

                // Audio Generation (Custom soft chime arpeggio)
                initAudio() {
                    if (!this.audioCtx) {
                        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    }
                },

                playMelody() {
                    this.initAudio();
                    if (this.audioCtx.state === 'suspended') {
                        this.audioCtx.resume();
                    }
                    
                    const notes = [293.66, 329.63, 392.00, 440.00, 587.33, 659.25]; // Soft beautiful D Major Pentatonic
                    let index = 0;
                    
                    this.melodyInterval = setInterval(() => {
                        if (!this.musicPlaying) return;
                        
                        let osc = this.audioCtx.createOscillator();
                        let gainNode = this.audioCtx.createGain();
                        
                        osc.connect(gainNode);
                        gainNode.connect(this.audioCtx.destination);
                        
                        osc.type = 'sine';
                        let currentNote = notes[index % notes.length];
                        
                        if (index % 4 === 0) currentNote = currentNote / 2; // Occasional lower note base
                        
                        osc.frequency.setValueAtTime(currentNote, this.audioCtx.currentTime);
                        
                        gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
                        gainNode.gain.linearRampToValueAtTime(0.04, this.audioCtx.currentTime + 0.1);
                        gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 2.5);
                        
                        osc.start();
                        osc.stop(this.audioCtx.currentTime + 2.6);
                        
                        index++;
                    }, 1200); // Relaxing slow beat
                },

                stopMelody() {
                    if (this.melodyInterval) {
                        clearInterval(this.melodyInterval);
                        this.melodyInterval = null;
                    }
                },

                startWithMusic(wantsMusic) {
                    this.showWelcomeModal = false;
                    this.showEnvelopeModal = true; // Slide open the majestic Gatefold view
                    if (wantsMusic) {
                        this.musicPlaying = true;
                        this.playMelody();
                    }
                },

                openEnvelope() {
                    this.envelopeOpened = true;
                    // Safely close and fade out the gatefold overlay after animation runs
                    setTimeout(() => {
                        this.showEnvelopeModal = false;
                    }, 1100);
                },

                toggleMusic() {
                    this.musicPlaying = !this.musicPlaying;
                    if (this.musicPlaying) {
                        this.playMelody();
                    } else {
                        this.stopMelody();
                    }
                },

                // Lightbox handlers
openLightbox(idx) {
    this.lightboxIndex = idx;
    this.lightboxOpen = true;
    
    // Agregamos la clase al body
    document.body.classList.add('no-scroll');
},

closeLightbox() {
    this.lightboxOpen = false;
    
    // Quitamos la clase del body
    document.body.classList.remove('no-scroll');
},

nextPhoto() {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.gallery.length;
},

prevPhoto() {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.gallery.length) % this.gallery.length;
},

                // Copy To Clipboard utility
                copyClabe(clabeText) {
                    const tempInput = document.createElement('input');
                    tempInput.value = clabeText;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    
                    this.showToast = true;
                    setTimeout(() => {
                        this.showToast = false;
                    }, 3000);
                },

                changeTheme(themeKey) {
                    this.currentTheme = themeKey;
                },

                submitRSVP() {
                    this.rsvps.unshift({
                        name: this.form.name,
                        attendance: this.form.attendance,
                        guests: this.form.attendance === 'yes' ? this.form.guests : '0'
                    });

                    this.showSuccessCard = true;
                    this.form.name = '';
                    this.form.note = '';
                },

                startCountdown() {
                    const targetDate = new Date("November 21, 2026 12:30:00").getTime();
                    
                    setInterval(() => {
                        const now = new Date().getTime();
                        const distance = targetDate - now;
                        
                        if (distance < 0) return; // Finished
                        
                        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
                        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        const s = Math.floor((distance % (1000 * 60)) / 1000);
                        
                        this.countdown.days = d < 10 ? '0' + d : d;
                        this.countdown.hours = h < 10 ? '0' + h : h;
                        this.countdown.minutes = m < 10 ? '0' + m : m;
                        this.countdown.seconds = s < 10 ? '0' + s : s;
                    }, 1000);
                },

                // Floating Golden Sparkles Canvas Physics (Rises completely up to the top)
                initCanvasSparkles() {
                    const canvas = document.getElementById('sparkleCanvas');
                    const ctx = canvas.getContext('2d');
                    let particles = [];
                    
                    const resizeCanvas = () => {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                    };
                    
                    window.addEventListener('resize', resizeCanvas);
                    resizeCanvas();
                    
                    class Sparkle {
                        constructor() {
                            this.x = Math.random() * canvas.width;
                            this.y = Math.random() * canvas.height + 50;
                            this.size = Math.random() * 2.8 + 0.8;
                            this.speedY = -(Math.random() * 0.45 + 0.15); // Ultra steady calm ascent
                            this.speedX = Math.random() * 0.3 - 0.15;
                            this.alpha = Math.random() * 0.8 + 0.2;
                            // Extremely slow decay rate so they float all the way up to the very top
                            this.fadeSpeed = Math.random() * 0.0003 + 0.00008; 
                        }
                        
                        update() {
                            this.y += this.speedY;
                            this.x += this.speedX;
                            this.alpha -= this.fadeSpeed;
                            
                            // Reset when faded or fully off the top to start over
                            if (this.alpha <= 0 || this.y < -15) {
                                this.y = canvas.height + 20;
                                            this.x = Math.random() * canvas.width;
                                            this.alpha = Math.random() * 0.8 + 0.2;
                                            this.size = Math.random() * 2.8 + 0.8;
                                        }
                                    }
                                    
                                    draw() {
                                        ctx.save();
                                        ctx.globalAlpha = this.alpha;
                                        ctx.fillStyle = '#DFB251'; // Golden sparkle color
                                        ctx.beginPath();
                                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                                        ctx.fill();
                                        ctx.restore();
                                    }
                                }
                                
                                const initParticles = () => {
                                    particles = [];
                                    for (let i = 0; i < 65; i++) {
                                        particles.push(new Sparkle());
                                    }
                                };
                                
                                initParticles();
                                
                                const animate = () => {
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    particles.forEach(p => {
                                        p.update();
                                        p.draw();
                                    });
                                    requestAnimationFrame(animate);
                                };
                                
                                setTimeout(animate, 500);
                            }
                        }
                    }
               