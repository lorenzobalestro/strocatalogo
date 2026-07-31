gsap.registerPlugin(ScrollTrigger);

        /* LOOP HERO SNEAKERS */
        const heroSneakers = [
            { src: './imagensPI/Aj4testeUP.png',    width: '55vw', x: '-3vw', y: '-4vw' },
            { src: './imagensPI/Sampler.png',       width: '60vw', x: '-1vw', y: '0vw'  },
            { src: './imagensPI/macpro.png',        width: '55vw', x: '0vw', y: '-2vw' },
            { src: './imagensPI/beluga.png',        width: '60vw', x: '-2vw', y: '-4vw' },
            { src: './imagensPI/hd25novo.png',      width: '55vw', x: '0vw',  y: '-1vw' },
            { src: './imagensPI/af1utopia.png',     width: '55vw', x: '-2vw', y: '-4vw' },
            { src: './imagensPI/turbo.png',         width: '50vw', x: '-3vw', y: '-3vw' },
            { src: './imagensPI/aj1hights.png',     width: '55vw', x: '-2vw', y: '-4vw' },
            { src: './imagensPI/velangk.png',       width: '45vw', x: '-3vw', y: '-2vw' },
            { src: './imagensPI/aj1lowgrey.png',    width: '55vw', x: '-2vw', y: '-2vw' },
            { src: './imagensPI/5090.png',          width: '45vw', x: '0vw',  y: '-2vw' },
            { src: './imagensPI/razersharkUP.png',  width: '40vw', x: '-3vw', y: '2vw' },
        ];

        let currentSneakerIndex = 0;
        const sneakerImg = document.getElementById('heroSneaker');
        const heroShadow = document.getElementById('heroShadow');

        function startSneakerLoop() {
            if(!sneakerImg || !heroShadow) return;

            function animateNextSneaker() {
                const item = heroSneakers[currentSneakerIndex];
                
                sneakerImg.src = item.src;
                sneakerImg.style.width = item.width;

                const tl = gsap.timeline({
                    onComplete: () => {
                        currentSneakerIndex = (currentSneakerIndex + 1) % heroSneakers.length;
                        animateNextSneaker();
                    }
                });

                tl.fromTo(sneakerImg, 
                    { x: '100vw', y: '0vw', rotation: 15 },
                    { x: item.x, y: item.y, rotation: -15, duration: 1.8, ease: 'power2.out' }
                )
                .fromTo(heroShadow,
                    { x: '100vw', scaleX: 0.3, opacity: 0.1 },
                    { x: '0vw', scaleX: 1, opacity: 1, duration: 1.8, ease: 'power2.out' },
                    "<"
                )
                .to([sneakerImg, heroShadow], { duration: 0.8 })
                .to(sneakerImg, { 
                    x: '-100vw', y: '-8vw', rotation: -30, duration: 1.6, ease: 'power2.in' 
                })
                .to(heroShadow, { 
                    x: '-100vw', scaleX: 0.3, opacity: 0.1, duration: 1.6, ease: 'power2.in' 
                }, "<");
            }
            animateNextSneaker();
        }
        startSneakerLoop();

        /* GLOW MOUSE */
        const glow = document.getElementById('glow');
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });

        /* CATALOG DATA - TODOS OS TÊNIS COM IMAGENS E FORMATO PADRONIZADO E COMPACTO */
        const CATALOG = {
          apparel:[
            /* --- AIR JORDAN 4 (15 CARDS) --- */
            {code:'SN‑01',name:'AIR JORDAN 4 RETRO "THUNDER"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/aj4thundery.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑02',name:'AIR JORDAN 4 RETRO "FEAR"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/aj4fear.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑03',name:'AIR JORDAN 4 RETRO SB "NAVY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/aj4sbnavy.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑04',name:'AIR JORDAN 4 "REIMAGINED BRED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/reimagined.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑05',name:'AIR JORDAN 4 RETRO "MILITARY BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/Mblue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑06',name:'AIR JORDAN 4 SB RETRO "PINE GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/pinegreen.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑07',name:'AIR JORDAN 4 RETRO "BLACK CAT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/blackcat.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑08',name:'AIR JORDAN 4 RETRO "UNIVERSITY BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/Ublue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑09',name:'AIR JORDAN 4 "RED THUNDER"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/redthunder.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑10',name:'AIR JORDAN 4 RETRO "WHITE CEMENT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/whitecement.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2016']]},
            {code:'SN‑11',name:'AIR JORDAN 4 RETRO "INFRARED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/infrared.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑12',name:'AIR JORDAN 4 RETRO "CANVAS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/canvas.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑13',name:'AIR JORDAN 4 RETRO "TAUPE HAZE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/tape.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑14',name:'AIR JORDAN 4 RETRO "UON"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/noir.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑15',name:'AIR JORDAN 4 RETRO "PARIS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/paris.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},

            /* --- AIR JORDAN 1 LOW (15 CARDS) --- */
            {code:'SN‑16',name:'AIR JORDAN 1 LOW "TRAVIS SCOTT PHANTOM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/phantom.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑17',name:'AIR JORDAN 1 LOW "TRAVIS SCOTT REVERSE MOCHA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/reverse.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑18',name:'AIR JORDAN 1 LOW "TRAVIS SCOTT OLIVE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/olive.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑19',name:'AIR JORDAN 1 LOW "OLD MOCHA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/oldmocha.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑20',name:'AIR JORDAN 1 LOW "BRED TOE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/bredtoe.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑21',name:'AIR JORDAN 1 LOW "SHADOW"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/shadow.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑22',name:'AIR JORDAN 1 LOW "OBSIDIAN UNC"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/obsidianunc.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑23',name:'AIR JORDAN 1 LOW "CHICAGO"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/chicago.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑24',name:'AIR JORDAN 1 LOW "TRIPLE WHITE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/triplewhite.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑25',name:'AIR JORDAN 1 LOW "MOCHA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mocha.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑26',name:'AIR JORDAN 1 LOW "LUCKY GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/green.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑27',name:'AIR JORDAN 1 LOW "LIGHT SMOKE GREY UON"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/aj1lowgrey.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑28',name:'AIR JORDAN 1 LOW "FRAGMENT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/fragment.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑29',name:'AIR JORDAN 1 LOW "BWG"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/bwg.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑30',name:'AIR JORDAN 1 LOW "ARMORY NAVY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/an.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- AIR JORDAN 1 HIGH (15 CARDS) --- */
            {code:'SN‑31',name:'AIR JORDAN 1 HIGH "CHICAGO"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/chicagohigh.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑32',name:'AIR JORDAN 1 RETRO HIGH "BRED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/bredhigh.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑33',name:'AIR JORDAN 1 HIGH "SHADOW 2.0"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/shadow20.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑34',name:'AIR JORDAN 1 HIGH "FRAGMENT X UNION LA VRSR"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/unionhigh.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2017']]},
            {code:'SN‑35',name:'AIR JORDAN 1 HIGH "MOCHA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mochahigh.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑36',name:'AIR JORDAN 1 HIGH "LOST & FOUND"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foundandlost.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑37',name:'AIR JORDAN 1 HIGH "UNC TOE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/unctoehigh.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑38',name:'AIR JORDAN 1 HIGH "TAXICAB"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/taxi.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑39',name:'AIR JORDAN 1 HIGH "OBSIDIAN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/obsidianhigh.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2019']]},
            {code:'SN‑40',name:'AIR JORDAN 1 HIGH "A MA MANIERE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/highama.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑41',name:'AIR JORDAN 1 HIGH "FRAGMENT TRAVIS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/aj1hights.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑42',name:'AIR JORDAN 1 HIGH "SHATTERED BLACKBOARD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/shattered.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑43',name:'AIR JORDAN 1 HIGH "PINE GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/highpine.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑44',name:'AIR JORDAN 1 HIGH "UNIVERSITY BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/university.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑45',name:'AIR JORDAN 1 HIGH "HERITAGE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/heritage.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},

            /* --- DUNK (25 CARDS) --- */
            {code:'SN‑46',name:'DUNK LOW PRO "PANDA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/panda.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑47',name:'DUNK LOW "SB FUTURA LABORATORIES"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/futura.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑48',name:'DUNK LOW "SB JARRITOS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/jarritos.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑49',name:'DUNK LOW "SB MUMMY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mummy.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑50',name:'DUNK LOW "SB SAN FRANCISCO (BLACK)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sanfrancisco.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑51',name:'DUNK LOW "SB BORN X RAISED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/bornxraised.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑52',name:'DUNK LOW "SB RAYSSA LEAL"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/rayssaleal.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑53',name:'DUNK LOW "SB PARIS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/dunkparis.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑54',name:'DUNK LOW "LOBSTER (all colors)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/orangelobster.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑55',name:'DUNK LOW "KENTUCKY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/kentucky.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑56',name:'DUNK LOW "GREY FOG"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/greyfog.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑57',name:'DUNK LOW "SB APRIL SKATEBOARD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/april.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑58',name:'DUNK LOW "ST JOHN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/stjohn.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑59',name:'DUNK LOW "CACAO (WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/cacao.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑60',name:'DUNK LOW "MIDNIGHT NAVY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/midnightnavy.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑61',name:'DUNK LOW "REDWOOD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/redwood.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑62',name:'DUNK LOW "SB YUTO HORIGOME"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yuto.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑63',name:'DUNK LOW "VALENTINES DAY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/valentines.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑64',name:'DUNK LOW "MICHIGAN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/michigan.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑65',name:'DUNK LOW "SYRACUSE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/syracuse.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑66',name:'DUNK LOW "MEDIUM CURRY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mediumcurry.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑67',name:'DUNK LOW "VINTAGE GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/vintagegreen.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑68',name:'DUNK LOW "POLAR BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/polarblue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑69',name:'DUNK LOW "SB DODGERS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sbdodgers.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑70',name:'DUNK LOW "SB SUPREME 94"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/dunksupreme.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- AIR JORDAN 3 (9 CARDS) --- */
            {code:'SN‑71',name:'AIR JORDAN 3 RETRO "WHITE CEMENT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3whitecement.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑72',name:'AIR JORDAN 3 RETRO "BLACK CAT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3blackcat.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑73',name:'AIR JORDAN 3 RETRO "WIZARDS"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3wizards.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑74',name:'AIR JORDAN 3 RETRO "BLACK CEMENT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3blackcement.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2018']]},
            {code:'SN‑75',name:'AIR JORDAN 3 RETRO"FIRE RED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3firered.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑76',name:'AIR JORDAN 3 RETRO "PURE MONEY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3puremoney.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑77',name:'AIR JORDAN 3 RETRO "PALOMINO"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3palomino.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑78',name:'AIR JORDAN 3 RETRO "AMM DIFFUSED BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3ama.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑79',name:'AIR JORDAN 3 RETRO "FEAR"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j3fear.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- AIR JORDAN 5 (9 CARDS) --- */
            {code:'SN‑80',name:'AIR JORDAN 5 "FIRE RED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5firered.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑81',name:'AIR JORDAN 5 "METALLIC BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5mb.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2016']]},
            {code:'SN‑82',name:'AIR JORDAN 5 "RACER BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5racerblue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑83',name:'AIR JORDAN 5 "OREO MOONLIGHT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5oreo.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑84',name:'AIR JORDAN 5 "UNC"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5unc.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑85',name:'AIR JORDAN 5 "GRAPE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5grape.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2018']]},
            {code:'SN‑86',name:'AIR JORDAN 5 "LUCKY GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5luckygreen.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑87',name:'AIR JORDAN 5 "WHITE METTALIC"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5whitemettalic.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑88',name:'AIR JORDAN 5 "OREGON"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j5oregon.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},

            /* --- AIR JORDAN 11 (9 CARDS) --- */
            {code:'SN‑89',name:'AIR JORDAN 11 "CONCORD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11concord.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2018']]},
            {code:'SN‑90',name:'AIR JORDAN 11 "BRED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11bred.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2019']]},
            {code:'SN‑91',name:'AIR JORDAN 11 "GRATITUDE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11gratitude.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑92',name:'AIR JORDAN 11 "SPACE JAM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11spacejam.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2016']]},
            {code:'SN‑93',name:'AIR JORDAN 11 "COOL GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11coolgrey.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑94',name:'AIR JORDAN 11 "WIN LIKE 82"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11win.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2017']]},
            {code:'SN‑95',name:'AIR JORDAN 11 "JUBILEE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11jubilee.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑96',name:'AIR JORDAN 11 "NEAPOLITAN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11neapolitan.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑97',name:'AIR JORDAN 11 "ANIMAL INSTINCT(WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/j11womans.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},

            /* --- AIR MAX 95 (6 CARDS) --- */
            {code:'SN‑98',name:'AIR MAX 95 "NEON"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/airmax95neon.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑99',name:'AIR MAX 95 "CORTEIZ PINK BEAM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/airmax95corteiz.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑100',name:'AIR MAX 95 "TRIPLE BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/airmax95black.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑101',name:'AIR MAX 95 "SOLAR RED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/airmax95solar.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2018']]},
            {code:'SN‑102',name:'AIR MAX 95 "CORTEIZ AEGEAN STORM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/airmax95corteizblue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑103',name:'AIR MAX 95 "ANATOMY OF AIR"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/airmax95anatomy.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},

            /* --- YZ 500 (6 CARDS) --- */
            {code:'SN‑104',name:'YZ 500 "UTILITY BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz500black.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑105',name:'YZ 500 "BLUSH"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz500blush.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑106',name:'YZ 500 "SUPERMOON YELLOW"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz500yellow.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2018']]},
            {code:'SN‑107',name:'YZ 500 "BONE WHITE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz500bone.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑108',name:'YZ 500 "ASH GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz500ash.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑109',name:'YZ 500 "CLAY BROWN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz500clay.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},

            /* --- YZ OUTROS MODELOS (FOAM/QUANTUM) (6 CARDS) --- */
            {code:'SN‑110',name:'YZ "FOAM RUNNER ONYX"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foamrunneronix.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑111',name:'YZ "FOAM RUNNER CARBON"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foamrunnercarbon.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑112',name:'YZ "FOAM RUNNER SAND"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foamrunnersand.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑113',name:'YZ "FOAM RUNNER MX CINDER"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foamrunnercinder.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑114',name:'YZ "FOAM RUNNER VERMILION"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foamrunnerred.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑115',name:'YZ "FOAM MXT MOON GRAY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/foamrunnermxt.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},

            /* --- YZ 700 (6 CARDS) --- */
            {code:'SN‑116',name:'YZ 700 "WAVE RUNNER"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz700waverunner.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑117',name:'YZ 700 V2 "STATIC"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz700static.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑118',name:'YZ 700 V3 "AZAEL"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz700azael.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑119',name:'YZ 700 "ANALOG"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz700analog.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2019']]},
            {code:'SN‑120',name:'YZ 700 V2 "TEPHRA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz700tephra.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑121',name:'YZ 700 V3 "DARK GLOW"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz700darkglow.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},

            /* --- YZ SLIDE (9 CARDS) --- */
            {code:'SN‑122',name:'YZ SLIDE "ONYX"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/onix.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑123',name:'YZ SLIDE "BONE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/bone.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑124',name:'YZ SLIDE "RESIN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/resin.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑125',name:'YZ SLIDE "PURE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/pure.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑126',name:'YZ SLIDE "FLAX"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/flax.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑127',name:'YZ SLIDE "SLATE GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/slategrey.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑128',name:'YZ SLIDE "AZURE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/azure.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑129',name:'YZ SLIDE "GLOW GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/glowgreen.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑130',name:'YZ SLIDE "GRANITE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/granite.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},

            /* --- YZ BOOST 350 (9 CARDS) --- */
            {code:'SN‑131',name:'YZ BOOST 350 V2 "BELUGA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350beluga.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑132',name:'YZ BOOST 350 V2 "ZEBRA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350zebra.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑133',name:'YZ BOOST 350 V2 "ONYX"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350onyx.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑134',name:'YZ BOOST 350 V2 "CORE BLACK RED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350cbr.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2020']]},
            {code:'SN‑135',name:'YZ BOOST 350 V2 "CREAM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350cream.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2018']]},
            {code:'SN‑136',name:'YZ BOOST 350 V2 "SLATE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350slate.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑137',name:'YZ BOOST 350 V2 "BONE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350bone.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑138',name:'YZ BOOST 350 V2 "DAZZLING BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350dazzling.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑139',name:'YZ BOOST 350 V2 "STEEL GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/yz350grey.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- NIKE MIND 001 (6 CARDS) --- */
            {code:'SN‑140',name:'NIKE MIND 001 "BLACK CHROME"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mindblack.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑141',name:'NIKE MIND 001 "LIGHT SMOKE GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mindsmoke.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑142',name:'NIKE MIND 001 "LIGHT BONE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mindbone.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑143',name:'NIKE MIND 001 "BBG ROYAL"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mindroyal.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑144',name:'NIKE MIND 001 "GTL MENTA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mindmenta.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑145',name:'NIKE MIND 001 "METTALIC SILVER"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/mindms.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},

            /* --- ADIDAS SAMBA (12 CARDS) --- */
            {code:'SN‑146',name:'ADIDAS SAMBA OG "THE OG"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambatheog.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑147',name:'ADIDAS SAMBA OG "BLACK WHITE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambablack.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑148',name:'ADIDAS SAMBA OG "GUM WHITE (WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambagumwhite.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑149',name:'ADIDAS SAMBA x WALES BONNER "LEOPARD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambawales.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑150',name:'ADIDAS SAMBA OG "GREEN GUM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambagreen.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑151',name:'ADIDAS SAMBA OG "COLLEGIATE BURGUNDY (WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambaburgundy.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑152',name:'ADIDAS SAMBA OG "ALUMINUM GUM (WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambaaluminum.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑153',name:'ADIDAS SAMBA OG "RED NIGHT INDIGO"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambanightred.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑154',name:'ADIDAS SAMBA OG "SILVER METALLIC (WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambasilver.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑155',name:'ADIDAS SAMBA OG "RHINESTONE BLACK (WOMENS)"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambarhinestone.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑156',name:'ADIDAS SAMBA OG "CLAY BROWN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambaclay.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑157',name:'ADIDAS SAMBA OG "NOTTING HILL"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/sambanotting.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- NEW BALANCE 550 (9 CARDS) --- */
            {code:'SN‑158',name:'NEW BALANCE 550 "AIME LEON DORE GREEN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550green.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑159',name:'NEW BALANCE 550 "AIME LEON DORE GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550grey.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑160',name:'NEW BALANCE 550 "WHITE NAVY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550navy.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑161',name:'NEW BALANCE 550 "WHITE BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550black.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑162',name:'NEW BALANCE 550 "WHITE RED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550red.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑163',name:'NEW BALANCE 550 "WHITE BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550blue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑164',name:'NEW BALANCE 550 "AIME LEON DORE BROWN"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550brown.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑165',name:'NEW BALANCE 550 "WHITE DREAM STATE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550dream.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑166',name:'NEW BALANCE 550 "WHITE SHADOW"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb550shadow.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- NEW BALANCE 530 (9 CARDS) --- */
            {code:'SN‑167',name:'NEW BALANCE 530 "WHITE SILVER NAVY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530whitesilver.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑168',name:'NEW BALANCE 530 "STEEL GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530steel.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑169',name:'NEW BALANCE 530 "BEIGE ANGORA"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530beigeangora.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑170',name:'NEW BALANCE 530 "RAINCLOUD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530raincloud.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑171',name:'NEW BALANCE 530 "WHITE NAVY METTALIC"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530whitemettalic.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑172',name:'NEW BALANCE 530 "SEE SALT MOONBEAM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530seasalt.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑173',name:'NEW BALANCE 530 "SILVER CREAM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530silvercream.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑174',name:'NEW BALANCE 530 "CLASSIC BLACK GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530classic.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑175',name:'NEW BALANCE 530 "WHITE SILVER METTALIC BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb530wsmb.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- NEW BALANCE 9060 (9 CARDS) --- */
            {code:'SN‑176',name:'NEW BALANCE 9060 "TRIPLE BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060black.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑177',name:'NEW BALANCE 9060 "RAIN CLOUD GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060raincloud.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑178',name:'NEW BALANCE 9060 "SEA SALT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060seasalt.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑179',name:'NEW BALANCE 9060 "BLACK CASTERLOCK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060bodega.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑180',name:'NEW BALANCE 9060 "GREY JET BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060ivory.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑181',name:'NEW BALANCE 9060 "ARID STONE MUSHROOM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060driftwood.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑182',name:'NEW BALANCE 9060 "WHITE RED"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060castlerock.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑183',name:'NEW BALANCE 9060 "SILVER METTALIC WHITE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060chalk.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2024']]},
            {code:'SN‑184',name:'NEW BALANCE 9060 "QUARTZ GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb9060quartz.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},

            /* --- NEW BALANCE 2002R (9 CARDS) --- */
            {code:'SN‑185',name:'NEW BALANCE 2002R "PROTECTION PACK RAIN CLOUD"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rprotection.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑186',name:'NEW BALANCE 2002R "PHANTOM"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rphantom.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑187',name:'NEW BALANCE 2002R "PROTECTION PACK SEA SALT"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rseasalt.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2021']]},
            {code:'SN‑188',name:'NEW BALANCE 2002R "PROTECTION PACK BLACK"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rblack.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑189',name:'NEW BALANCE 2002R "GREY VINTAGE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rgrey.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},
            {code:'SN‑190',name:'NEW BALANCE 2002R "NIGHT TIDE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rnighttide.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑191',name:'NEW BALANCE 2002R "DEEP TAUPE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rtaupe.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑192',name:'NEW BALANCE 2002R "STORM BLUE"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rstormblue.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2023']]},
            {code:'SN‑193',name:'NEW BALANCE 2002R "MIRAGE GREY"',type:'sneaker',group:'Sneakers',img:'./imagensShoes/nb2002rmirage.png',specs:[['Tamanho','38 ao 44'],['Ano de Lançamento','2022']]},

            /* ITENS ROUPAS */
            {code:'AP‑01',name:'OVERSIZED SET',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑02',name:'STORM SHELL',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑03',name:'FIELD PANT',type:'hoodie',group:'Apparel',specs:[['Tamanho','38 ao 48'],['Ano de Lançamento','2023']]},
            {code:'AP‑04',name:'RAW EDGE CREW',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑05',name:'TECH TEE BLACK',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑06',name:'HEAVYWEIGHT CREW',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑07',name:'CARGO UTILITY PANT',type:'hoodie',group:'Apparel',specs:[['Tamanho','38 ao 48'],['Ano de Lançamento','2024']]},
            {code:'AP‑08',name:'TACTICAL VEST',type:'hoodie',group:'Apparel',specs:[['Tamanho','Ajustável (P ao GG)'],['Ano de Lançamento','2023']]},
            {code:'AP‑09',name:'ESSENTIAL HOODIE',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑10',name:'ARCHIVE DENIM',type:'hoodie',group:'Apparel',specs:[['Tamanho','38 ao 48'],['Ano de Lançamento','2023']]},
            {code:'AP‑11',name:'TRACK JACKET V1',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑12',name:'OVERSIZED SHORT',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑13',name:'THERMAL LONG SLEEVE',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑14',name:'WINDBREAKER JACKET',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑15',name:'FLEECE JOGGER',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑16',name:'NYLON TRACK PANT',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑17',name:'BOXER FIT TEE WHITE',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑18',name:'PUFFER JACKET MATTE',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑19',name:'CANVAS OVERSHIRT',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑20',name:'TACTICAL SHORTS',type:'hoodie',group:'Apparel',specs:[['Tamanho','38 ao 48'],['Ano de Lançamento','2024']]},
            {code:'AP‑21',name:'SWEATSHIRT GRAPHIC V2',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑22',name:'MINIMALIST TEE BEIGE',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑23',name:'ZIP HOODIE HEAVY',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑24',name:'UTILITY BELT BAG',type:'hoodie',group:'Apparel',specs:[['Tamanho','Único'],['Ano de Lançamento','2023']]},
            {code:'AP‑25',name:'REVERSIBLE BOMBER',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑26',name:'RIBBED TANK TOP',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑27',name:'DENIM TRUCKER JACKET',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑28',name:'FLEECE VEST ZIP',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2024']]},
            {code:'AP‑29',name:'KNIT SWEATER CHARCOAL',type:'hoodie',group:'Apparel',specs:[['Tamanho','P ao GG'],['Ano de Lançamento','2023']]},
            {code:'AP‑30',name:'CARGO JOGGER V3',type:'hoodie',group:'Apparel',specs:[['Tamanho','38 ao 48'],['Ano de Lançamento','2024']]}
          ]
        };

        const ACCENTS = {auto:'#2b5c8f', audio:'#6342e8', apparel:'#8a7353', hardware:'#059669'};
        const GLYPHS = {
          auto:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="100" cy="100" r="70"/><circle cx="100" cy="100" r="30"/><path d="M100 30 L100 60 M100 140 L100 170 M30 100 L60 100 M140 100 L170 100"/></svg>',
          audio:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M40 100a60 60 0 0 1 120 0"/><rect x="28" y="95" width="24" height="46" rx="10"/><rect x="148" y="95" width="24" height="46" rx="10"/></svg>',
          hoodie:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M70 40 Q100 10 130 40 L160 60 L150 90 L130 78 L130 180 L70 180 L70 78 L50 90 L40 60 Z"/></svg>',
          sneaker:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 140 Q40 100 80 95 L120 60 Q150 55 170 80 Q185 100 175 130 L20 140Z"/><path d="M20 140 L175 130 L178 155 L20 155Z"/></svg>',
          gpu:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="25" y="70" width="150" height="60" rx="8"/><circle cx="65" cy="100" r="18"/><circle cx="135" cy="100" r="18"/><rect x="25" y="130" width="150" height="10"/></svg>'
        };

        let currentSneakerFilter = 'all';

        function toggleModelDropdown() {
            const menu = document.getElementById('modelDropdownMenu');
            if (menu) menu.classList.toggle('open');
        }

        function filterSneakers(modelKey) {
            currentSneakerFilter = modelKey;
            const menu = document.getElementById('modelDropdownMenu');
            if (menu) menu.classList.remove('open');
            renderApparelList();
        }

        // FECHAR DROPDOWN AO CLICAR FORA
        document.addEventListener('click', (e) => {
            const container = document.querySelector('.model-dropdown-container');
            if (container && !container.contains(e.target)) {
                const menu = document.getElementById('modelDropdownMenu');
                if (menu) menu.classList.remove('open');
            }
        });

        function renderApparelList() {
            const apEl = document.getElementById('listApparel');
            if(!apEl) return;

            const apparelItems = CATALOG.apparel.filter(p => p.group === 'Apparel');
            let sneakerItems = CATALOG.apparel.filter(p => p.group === 'Sneakers');

            if (currentSneakerFilter !== 'all') {
                sneakerItems = sneakerItems.filter(p => {
                    const name = p.name.toUpperCase();
                    switch(currentSneakerFilter) {
                        case 'aj1_low': return name.includes('JORDAN 1') && name.includes('LOW');
                        case 'aj1_high': return name.includes('JORDAN 1') && name.includes('HIGH');
                        case 'aj3': return name.includes('JORDAN 3');
                        case 'aj4': return name.includes('JORDAN 4');
                        case 'aj5': return name.includes('JORDAN 5');
                        case 'aj11': return name.includes('JORDAN 11');
                        case 'air_max_95': return name.includes('AIR MAX 95');
                        case 'yz_500': return name.includes('YZ 500');
                        case 'yz_700': return name.includes('YZ 700');
                        case 'yz_slide': return name.includes('YZ SLIDE');
                        case 'yz_boost_350': return name.includes('YZ BOOST 350');
                        case 'yz': return name.includes('YZ') && !name.includes('500') && !name.includes('700') && !name.includes('SLIDE') && !name.includes('350');
                        case 'nike_mind_001': return name.includes('MIND 001');
                        case 'adidas_samba': return name.includes('SAMBA');
                        case 'nb_550': return name.includes('550');
                        case 'nb_530': return name.includes('530');
                        case 'nb_9060': return name.includes('9060');
                        case 'nb_2002': return name.includes('2002');
                        case 'dunk': return name.includes('DUNK');
                        default: return true;
                    }
                });
            }

            const modelButtons = [
                { key: 'all', label: 'TODOS OS MODELOS' },
                { key: 'aj1_low', label: 'AJ1 LOW' },
                { key: 'aj1_high', label: 'AJ1 HIGH' },
                { key: 'aj3', label: 'AJ3' },
                { key: 'aj4', label: 'AJ4' },
                { key: 'aj5', label: 'AJ5' },
                { key: 'aj11', label: 'AJ11' },
                { key: 'air_max_95', label: 'AIR MAX 95' },
                { key: 'yz_500', label: 'YZ 500' },
                { key: 'yz', label: 'YZ FOAM' },
                { key: 'yz_700', label: 'YZ 700' },
                { key: 'yz_slide', label: 'YZ SLIDE' },
                { key: 'yz_boost_350', label: 'YZ BOOST 350' },
                { key: 'nike_mind_001', label: 'NIKE MIND 001' },
                { key: 'adidas_samba', label: 'ADIDAS SAMBA' },
                { key: 'nb_550', label: 'NB 550' },
                { key: 'nb_530', label: 'NB 530' },
                { key: 'nb_9060', label: 'NB 9060' },
                { key: 'nb_2002', label: 'NB 2002' },
                { key: 'dunk', label: 'DUNK' }
            ];

            const activeModelObj = modelButtons.find(m => m.key === currentSneakerFilter);
            const activeModelLabel = activeModelObj ? activeModelObj.label : 'MODELOS';

            const modelFilterHTML = `
                <div class="subgroup-label">
                    <div class="subgroup-header-left">
                        <span class="subgroup-title">01 / CALÇADOS &amp; TÊNIS</span>
                        
                        <!-- BOTÃO ÚNICO DE DROPDOWN MODELOS -->
                        <div class="model-dropdown-container">
                            <button class="model-dropdown-btn" onclick="toggleModelDropdown()">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                <span>MODELOS</span>
                                <span class="active-model-tag">${activeModelLabel}</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
                            </button>
                            <div class="model-dropdown-menu" id="modelDropdownMenu">
                                ${modelButtons.map(m => `
                                    <button class="model-dropdown-item ${currentSneakerFilter === m.key ? 'active' : ''}" onclick="filterSneakers('${m.key}')">
                                        <span>${m.label}</span>
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <span class="subgroup-count">${sneakerItems.length} ITENS</span>
                </div>
            `;

            /* AVISO DISCRETO AO FINAL DOS CARDS DOS TÊNIS COM LINK PARA WHATSAPP */
            const whatsNoticeHTML = `
                <div class="more-models-notice">
                    Não gostou(encontrou) o que queria? Para específicos envie(pergunte) <a href="https://wa.me/555499743141?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20outros%20modelos%20de%20AJ4" target="_blank" rel="noopener noreferrer">aqui</a>
                </div>
            `;

            const clothesHeaderHTML = `
                <div class="subgroup-label">
                    <span class="subgroup-title">02 / VESTUÁRIO &amp; ROUPAS</span>
                    <span class="subgroup-count">${apparelItems.length} ITENS</span>
                </div>
            `;

            apEl.innerHTML = 
                modelFilterHTML + 
                (sneakerItems.length > 0 
                    ? sneakerItems.map(p => cardHTML(p, 'apparel')).join('') 
                    : '<div style="grid-column: 1/-1; padding: 2.5rem; text-align: center; font-family: var(--mono); font-size: 0.78rem; color: var(--ink-faint); opacity: 0.8;">Nenhum modelo encontrado nesta categoria no momento.</div>'
                ) +
                whatsNoticeHTML +
                clothesHeaderHTML +
                apparelItems.map(p => cardHTML(p, 'apparel')).join('');
        }

        function renderCards(){
          renderApparelList();
        }

        function cardHTML(p, catKey){
          const displayCode = p.code.split(/[\u2010-\u2015\-]/).pop();

          let groupTag = (p.group || catKey).toUpperCase();
          if (groupTag === 'APPAREL') groupTag = 'ROUPAS';

          const imgContent = p.img 
            ? `<div class="card-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>`
            : `<div class="card-img-wrap"><div class="glyph-wrap">${GLYPHS[p.type]||''}</div></div>`;

          return `<div class="card" tabindex="0" style="--accent:${ACCENTS[catKey]};" data-code="${p.code}" data-name="${p.name}" data-type="${p.type}" data-cat="${catKey}" data-img="${p.img||''}" data-specs='${JSON.stringify(p.specs)}'>
            <div class="card-top"><span>${displayCode}</span><span>${groupTag}</span></div>
            ${imgContent}
            <div class="card-bottom">
              <div class="card-name">${p.name}</div>
              <div class="card-meta">
                <div class="whats-val-btn">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>VALOR VIA WHATS</span>
                </div>
                <span class="card-view">VER SPEC →</span>
              </div>
            </div>
          </div>`;
        }
        renderCards();

        /* THREE.JS DRAWER */
        function mat(opts){ return new THREE.MeshPhysicalMaterial(Object.assign({transparent:true, envMapIntensity:1.1},opts)); }

        function buildTurbo(accent){
          const g = new THREE.Group();
          const steel = mat({color:0x444850, metalness:0.9, roughness:0.2, clearcoat:0.5});
          const housing = mat({color:0x888c95, metalness:0.5, roughness:0.4});
          const glow = mat({color:accent, emissive:accent, emissiveIntensity:0.65, roughness:0.3});
          const core = new THREE.Mesh(new THREE.SphereGeometry(0.5,32,32), housing); g.add(core);
          const scrollH = new THREE.Mesh(new THREE.TorusGeometry(0.68,0.27,24,48), steel);
          scrollH.rotation.x = Math.PI/2.3; g.add(scrollH);
          const bladeGeo = new THREE.ConeGeometry(0.085,0.36,8);
          for(let i=0;i<14;i++){
            const b = new THREE.Mesh(bladeGeo, steel);
            const a = (i/14)*Math.PI*2;
            b.position.set(Math.cos(a)*0.58, Math.sin(a)*0.58, 0.14);
            b.rotation.z = a+Math.PI/2; b.rotation.x = Math.PI/2;
            g.add(b);
          }
          const inlet = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.48,0.55,32), steel);
          inlet.rotation.z = Math.PI/2; inlet.position.x = 0.72; g.add(inlet);
          const outlet = new THREE.Mesh(new THREE.CylinderGeometry(0.33,0.28,0.65,32), housing);
          outlet.position.set(-0.52,0.32,0); outlet.rotation.z = 0.5; g.add(outlet);
          const ring = new THREE.Mesh(new THREE.TorusGeometry(0.7,0.028,12,48), glow);
          ring.rotation.x = Math.PI/2.3; g.add(ring);
          g.userData.mats=[steel,housing,glow];
          g.scale.setScalar(1.55);
          return g;
        }

        function buildHeadphones(accent){
          const g = new THREE.Group();
          const matte = mat({color:0x222226, roughness:0.6, metalness:0.2});
          const alu = mat({color:0x555860, metalness:0.9, roughness:0.2});
          const glow = mat({color:accent, emissive:accent, emissiveIntensity:0.75, roughness:0.3});
          const band = new THREE.Mesh(new THREE.TorusGeometry(0.82,0.05,16,64,Math.PI), alu);
          band.rotation.z = Math.PI; g.add(band);
          [-0.78,0.78].forEach(side=>{
            const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.37,0.39,0.27,32), matte);
            cup.rotation.z = Math.PI/2; cup.position.set(side,-0.52,0); g.add(cup);
            const ring = new THREE.Mesh(new THREE.TorusGeometry(0.39,0.02,12,32), glow);
            ring.rotation.y = Math.PI/2; ring.position.set(side*1.13,-0.52,0); g.add(ring);
            const yoke = new THREE.Mesh(new THREE.CylinderGeometry(0.028,0.028,0.34,12), alu);
            yoke.position.set(side*0.8,-0.22,0); g.add(yoke);
          });
          g.userData.mats=[matte,alu,glow];
          g.scale.setScalar(1.5);
          return g;
        }

        function buildHoodie(accent){
          const g = new THREE.Group();
          const fabric = mat({color:0xd5cebe, roughness:0.9, metalness:0.02});
          const fabricDark = mat({color:0x9e9788, roughness:0.92, metalness:0.02});
          const acc = mat({color:accent, roughness:0.55, metalness:0.15});
          const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.66,1.25,24), fabric); g.add(torso);
          const hem = new THREE.Mesh(new THREE.TorusGeometry(0.66,0.05,12,32), fabricDark);
          hem.rotation.x = Math.PI/2; hem.position.y=-0.62; g.add(hem);
          const collar = new THREE.Mesh(new THREE.TorusGeometry(0.34,0.1,16,32), fabricDark);
          collar.rotation.x = Math.PI/2; collar.position.y=0.66; g.add(collar);
          const hood = new THREE.Mesh(new THREE.ConeGeometry(0.28,0.55,20,1,true), fabricDark);
          hood.position.set(0,0.86,-0.16); hood.rotation.x = 0.35; g.add(hood);
          [-1,1].forEach(side=>{
            const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.22,0.85,16), fabric);
            sleeve.position.set(side*0.72,0.15,0); sleeve.rotation.z = side*0.55; g.add(sleeve);
            const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.015,0.015,0.4,8), acc);
            cord.position.set(side*0.12,0.35,0.5); g.add(cord);
            const tip = new THREE.Mesh(new THREE.SphereGeometry(0.035,8,8), acc);
            tip.position.set(side*0.12,0.16,0.5); g.add(tip);
          });
          const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.55,0.35,0.08), fabricDark);
          pocket.position.set(0,-0.15,0.58); g.add(pocket);
          g.userData.mats=[fabric,fabricDark,acc];
          g.scale.setScalar(1.35);
          return g;
        }

        function buildSneaker(accent){
          const g = new THREE.Group();
          const rubber = mat({color:0x333338, roughness:0.8, metalness:0.05});
          const leather = mat({color:0xf0ece1, roughness:0.4, clearcoat:0.3});
          const suede = mat({color:0xbfb3a4, roughness:0.85});
          const acc = mat({color:accent, roughness:0.5, metalness:0.15, emissive:accent, emissiveIntensity:0.3});
          const sole = new THREE.Mesh(new THREE.CylinderGeometry(0.42,0.5,0.22,24), rubber);
          sole.rotation.z = Math.PI/2; sole.scale.set(1,1,1.7); sole.position.y=-0.35; g.add(sole);
          const upper = new THREE.Mesh(new THREE.SphereGeometry(0.46,24,16), leather);
          upper.scale.set(1.5,0.72,1); upper.position.set(0.05,-0.02,0); g.add(upper);
          const heel = new THREE.Mesh(new THREE.SphereGeometry(0.35,20,16), suede);
          heel.position.set(-0.55,-0.05,0); g.add(heel);
          const tongue = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.32,0.06), suede);
          tongue.position.set(0.3,0.28,0); tongue.rotation.x=-0.3; g.add(tongue);
          for(let i=0;i<4;i++){
            const eyelet = new THREE.Mesh(new THREE.TorusGeometry(0.035,0.012,8,16), acc);
            eyelet.position.set(0.12-i*0.13,0.22,0.28); g.add(eyelet);
          }
          const stripe = new THREE.Mesh(new THREE.TorusGeometry(0.36,0.02,8,32,Math.PI), acc);
          stripe.position.set(0.05,-0.02,0.3); stripe.rotation.y=Math.PI/2; g.add(stripe);
          g.userData.mats=[rubber,leather,suede,acc];
          g.scale.setScalar(1.7);
          return g;
        }

        function buildGPU(accent){
          const g = new THREE.Group();
          const pcb = mat({color:0x1a1a1e, roughness:0.5});
          const metal = mat({color:0x777a80, metalness:0.9, roughness:0.2});
          const glow = mat({color:accent, emissive:accent, emissiveIntensity:0.8, roughness:0.3});
          const body = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.6, 0.25), pcb); g.add(body);
          const fan1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.05, 24), metal);
          fan1.position.set(-0.35, 0, 0.14); fan1.rotation.x = Math.PI/2; g.add(fan1);
          const fan2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.05, 24), metal);
          fan2.position.set(0.35, 0, 0.14); fan2.rotation.x = Math.PI/2; g.add(fan2);
          const line = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.03, 0.03), glow);
          line.position.set(0, 0.22, 0.14); g.add(line);
          g.userData.mats=[pcb,metal,glow];
          g.scale.setScalar(1.5);
          return g;
        }

        /* THREE.JS DRAWER SCENE */
        const canvas = document.getElementById('drawerCanvas');
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
        camera.position.set(0, 0, 4);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        let currentMesh = null;

        function updateDrawerScene(type, catKey) {
            if(currentMesh) scene.remove(currentMesh);
            const accent = ACCENTS[catKey] || '#111113';
            if (type === 'turbo') currentMesh = buildTurbo(accent);
            else if (type === 'headphones') currentMesh = buildHeadphones(accent);
            else if (type === 'hoodie') currentMesh = buildHoodie(accent);
            else if (type === 'sneaker') currentMesh = buildSneaker(accent);
            else if (type === 'gpu') currentMesh = buildGPU(accent);

            if(currentMesh) scene.add(currentMesh);
        }
/* LÓGICA DO MODAL DE PRODUTO */
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');
const drawerCode = document.getElementById('drawerCode');
const drawerEyebrow = document.getElementById('drawerEyebrow');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSpecs = document.getElementById('drawerSpecs');
const drawerImg = document.getElementById('drawerImg');
let currentItem = null;

document.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const code = card.dataset.code;
        const name = card.dataset.name;
        const type = card.dataset.type;
        const cat = card.dataset.cat;
        const img = card.dataset.img;
        const specs = JSON.parse(card.dataset.specs || '[]');

        currentItem = { code, name, type, cat, img, specs };

        drawerCode.textContent = code;
        drawerEyebrow.textContent = cat.toUpperCase();
        drawerTitle.textContent = name;

        drawerSpecs.innerHTML = specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');

        if (img) {
            drawerImg.src = img;
            drawerImg.style.display = 'block';
        } else {
            drawerImg.style.display = 'none';
        }

        drawer.classList.add('open');
        drawerBackdrop.classList.add('open');
    }
});

function closeDrawer() {
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
}

drawerClose.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

        /* LÓGICA DO CARRINHO */
        let cart = [];
        const cartToggle = document.getElementById('cartToggle');
        const cartDrawer = document.getElementById('cartDrawer');
        const cartBackdrop = document.getElementById('cartBackdrop');
        const cartClose = document.getElementById('cartClose');
        const addToCartBtn = document.getElementById('addToCartBtn');
        const cartBadge = document.getElementById('cartBadge');
        const cartCountLabel = document.getElementById('cartCountLabel');
        const cartBody = document.getElementById('cartBody');
        const clearCartBtn = document.getElementById('clearCartBtn');
        const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

        function toggleCart() {
            cartDrawer.classList.toggle('open');
            cartBackdrop.classList.toggle('open');
        }

        cartToggle.addEventListener('click', toggleCart);
        cartClose.addEventListener('click', toggleCart);
        cartBackdrop.addEventListener('click', toggleCart);

        addToCartBtn.addEventListener('click', () => {
            if (!currentItem) return;
            const existing = cart.find(i => i.code === currentItem.code);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ ...currentItem, qty: 1, selected: true });
            }
            updateCart();
            closeDrawer();
            cartBadge.classList.add('bump');
            setTimeout(() => cartBadge.classList.remove('bump'), 300);
        });

        function updateCart() {
            const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
            cartBadge.textContent = totalCount;
            cartCountLabel.textContent = `(${totalCount} itens)`;

            if (cart.length === 0) {
                cartBody.innerHTML = `
                    <div class="cart-empty">
                        <div class="cart-empty-icon">🛒</div>
                        <p>Seu carrinho está vazio.</p>
                    </div>`;
                cartCheckoutBtn.disabled = true;
                return;
            }

            cartCheckoutBtn.disabled = false;
            cartBody.innerHTML = cart.map((item, idx) => `
                <div class="cart-item">
                    <input type="checkbox" class="cart-item-checkbox" data-idx="${idx}" ${item.selected ? 'checked' : ''}>
                    <div class="cart-item-info">
                        <div class="cart-item-code">${item.code}</div>
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">Sob consulta</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${idx}, -1)">-</button>
                        <span class="cart-item-qty">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeItem(${idx})">✕</button>
                </div>
            `).join('');
        }

        window.changeQty = function(idx, delta) {
            if (cart[idx]) {
                cart[idx].qty += delta;
                if (cart[idx].qty <= 0) cart.splice(idx, 1);
                updateCart();
            }
        };

        window.removeItem = function(idx) {
            cart.splice(idx, 1);
            updateCart();
        };

        cartBody.addEventListener('change', (e) => {
            if (e.target.classList.contains('cart-item-checkbox')) {
                const idx = e.target.dataset.idx;
                cart[idx].selected = e.target.checked;
            }
        });

        clearCartBtn.addEventListener('click', () => {
            cart = [];
            updateCart();
        });

        cartCheckoutBtn.addEventListener('click', () => {
            const selectedItems = cart.filter(i => i.selected);
            if (selectedItems.length === 0) return alert('Selecione pelo menos um item para consultar!');
            let msg = "Olá! Gostaria de consultar os seguintes itens:\n\n";
            selectedItems.forEach(i => {
                msg += `- ${i.name} (Qtd: ${i.qty}) [${i.code}]\n`;
            });
            window.open(`https://wa.me/555499743141?text=${encodeURIComponent(msg)}`, '_blank');
        });

        /* PRELOADER */
        window.addEventListener('load', () => {
            const veil = document.getElementById('preload-veil');
            if (veil) veil.classList.add('hidden');
        });
