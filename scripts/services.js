'use strict';

angular.module('wireframeApp')
  .factory('guitarListFactory', function() {

    var guitarsFactory = {};

    var guitars = [
      {
        brand: 'Ibanez',
        model: 'M8M',
        image: 'images/Ibanez-m8m.jpg',
        description: 'Alder wing neck though body enhances defined tone even in down tuning with great accessibility to high position. 29.4-inch extra long scale neck with pre-set down tuning emits a tight sound all the way down to the lowest note without ever losing playability. Lundgren Model M8 delivers a well defined tone even in playing with high gain setting amplifier. The FX Edge III-8 bridge combines fixed bridge sustain and double-locking tuning stability. ndestructible Schaller Security Locks, even under the toughest conditions on stage.',
        rating: '5',
        like: '999',
        numberOfStrings: '8',
        scale: 29.4,
        multiscale: false,
        price: 5000
      },
      {
        brand: 'Ibanez',
        model: 'RG7PCMLTD',
        image: 'images/Ibanez-rg7pcmltd.jpg',
        description: 'A stunning exotic body top with beautiful natural binding on the top and side. Our luthiers insane attention to detail is evidenced by the Premium`s hand-rolled fret edges. This slow, demanding process makes for a smooth, fast playing neck. The stainless steel frets are known for their bright tone, and they add player-friendly features, such as long durability and a smoothness to bend on. An 11-piece Wizard neck, which features a slim grip shape made of Wenge, Bubinga, Maple, and Purpleheart, contributes to the neck’s extreme rigidity and increases sustain. The luminescent side dot position marks make it easy for players to see fretboard position marks when performing on dark stages. The DiMarzio® PAF®7 pickups produce a sound that`s both clean and open on the low notes and warm and rounded on the high ones. The Edge-Zero II tremolo bridge w/ZPS3Fe provides exceptional tuning stability, precise intonation adjustment, and playing comfort. The Gotoh® MG-T locking machine heads achieve incredible tuning stability, cutting down string-changing time.',
        rating: '4',
        like: '058',
        numberOfStrings: '7',
        scale: 25.5,
        multiscale: false,
        price: 1100
      },
      {
        brand: 'Ibanez',
        model: 'RGIT20FE',
        image: 'images/Ibanez-rgit20fe.jpg',
        description: 'RGIT models feature 7pc Maple/Walnut neck-through construction. The tight grain of Ebony provides a smooth, dense playing surface that produces a tight low-end with the quick response needed for metal. The Gotoh® MG-T locking machine heads achieve incredible tuning stability, cutting down string-changing time. EMG® 60 neck pickup packs plenty of output with a balance of tones that is classic-thick; boosted mids, big lows, and fat highs. EMG® 81 bridge pickup gives detailed intensity, incredible amounts of high end cut, and fluid sustain. Killswitch provides the player easy access to a manually controlled strobe effect. The Gibraltar Standard II is a simple fixed bridge that was designed to unify with the guitar`s body and provide optimal transfer of each string`s vibration. Smooth surface is designed to maximize playing comfort.',
        rating: '3',
        like: '015',
        numberOfStrings: '6',
        scale: 25.5,
        multiscale: false,
        price: 800
      },
      {
        brand: 'Ibanez',
        model: 'RGDIX6MRW',
        image: 'images/Ibanez-rgdix6mrw.jpg',
        description: 'Legendary Super-thin, ultra-playable neck with road-tested durability. Through close collaboration between Ibanez and DiMarzio®-Fusion Edge pickups have been engineered to produce a powerful, distinctive tone with a crisp, cutting high end, and a tight, compressed bottom end, minus any muddy mid-range. The Gibraltar Standard II is a simple fixed bridge that was designed to unify with the guitar`s body and provide optimal transfer of each string`s vibration. Smooth surface is designed to maximize playing comfort. The Gotoh® MG-T locking machine heads achieve incredible tuning stability, cutting down string-changing time.',
        rating: '4',
        like: '055',
        numberOfStrings: '6',
        scale: 26.5,
        multiscale: false,
        price: 1000
      },
      {
        brand: 'Ibanez',
        model: 'RGDIX7MPB',
        image: 'images/Ibanez-rgdix7mpb.jpg',
        description: 'Legendary Super-thin, ultra-playable neck with road-tested durability. Through close collaboration between Ibanez and DiMarzio®-Fusion Edge pickups have been engineered to produce a powerful, distinctive tone with a crisp, cutting high end, and a tight, compressed bottom end, minus any muddy mid-range. The Gibraltar Standard II is a simple fixed bridge that was designed to unify with the guitar`s body and provide optimal transfer of each string`s vibration. Smooth surface is designed to maximize playing comfort. The Gotoh® MG-T locking machine heads achieve incredible tuning stability, cutting down string-changing time.',
        rating: '5',
        like: '167',
        numberOfStrings: '7',
        scale: 26.5,
        multiscale: false,
        price: 1100
      },
      {
        brand: 'Ibanez',
        model: 'RGIM8MH',
        image: 'images/Ibanez-rgim8mh.jpg',
        description: 'Equalized tension helps to create a more "alive", open tone. But the design also improves player comfort. The multi scale construction ergonomically coordinates with the way a player`s hand angles as it moves up and down the neck, facilitating quick, comfortable playing action. The Mono-Rail bridge delivers the ultimate in string-to-string isolation, meaning that each string vibrates optimally without be affected by the others.',
        rating: '3',
        like: '009',
        numberOfStrings: '8',
        scale: 27,
        multiscale: true,
        price: 900
      },
      {
        brand: 'ESP',
        model: 'Horizon FR',
        image: 'images/esp-horizon-fr.jpg',
        description: 'Neck-Thru-Body Construction. 3-Piece Maple Neck. Mahogany Body with Quilted-Maple Top. Ebony Fingerboard. 24 Extra-Jumbo Frets / 25.5" Scale. 12" Radius / Thin U Neck Contour. Dual EMG Humbucking Pickups. Floyd Rose Original Tremolo Bridge. Gotoh Locking Tuners. Includes Hardshell Case',
        rating: '4',
        like: '067',
        numberOfStrings: '6',
        scale: 25.5,
        multiscale: false,
        price: 1500
      },
      {
        brand: 'ESP',
        model: 'Horizon FR7',
        image: 'images/esp-horizon-fr7.jpg',
        description: 'Neck-Thru-Body Construction. 3-Piece Maple Neck. Mahogany Body with Quilted-Maple Top. Ebony Fingerboard. 24 Extra-Jumbo Frets / 25.5" Scale. 12" Radius / Thin U Neck Contour. Dual EMG Humbucking Pickups. Floyd Rose Original Tremolo Bridge. Gotoh Locking Tuners. Includes Hardshell Case',
        rating: '5',
        like: '233',
        numberOfStrings: '7',
        scale: 25.5,
        multiscale: false,
        price: 2000
      },
      {
        brand: 'Skervesen',
        model: 'Raptor 8',
        image: 'images/skervesen-raptor8.jpg',
        description: 'Available either as NTB or bolt-on contruction. Raptor is our most popular model, a vary versatile instrument of classic design. With wide array of option available it may become what any player seeks for himself.',
        rating: '5',
        like: '599',
        numberOfStrings: '8',
        scale: 28,
        multiscale: false,
        price: 3500
      },
      {
        brand: 'Skervesen',
        model: 'Raptor 7FF',
        image: 'images/skervesen-raptor7ff.jpg',
        description: 'Available either as NTB or bolt-on contruction. Raptor is our most popular model, a vary versatile instrument of classic design. With wide array of option available it may become what any player seeks for himself.',
        rating: '5',
        like: '210',
        numberOfStrings: '7',
        scale: 27,
        multiscale: true,
        price: 3600
      },
      {
        brand: 'Mayones',
        model: 'Regius 8',
        image: 'images/mayones-regius8.jpg',
        description: 'Handmade in Poland, Mayones Guitars have established themselves as true masters of their craft when it comes to creating instruments made of high quality exotic woods with attention to every fine detail. This is a Regius V-Frets 7 multiscale guitar with a stealthy Transparent Graphite finish over a flame maple top. The maple is paired with a swamp ash body, 11-ply neck made from multiple exotic woods, and a pair of Bare Knuckle Aftermath pickups - one of our favorites for aggressive high-gain guitar tones.',
        rating: '5',
        like: '188',
        numberOfStrings: '8',
        scale: 27,
        multiscale: false,
        price: 3700
      },
      {
        brand: 'Mayones',
        model: 'Regius 7',
        image: 'images/mayones-regius7.jpg',
        description: 'Handmade in Poland, Mayones Guitars have established themselves as true masters of their craft when it comes to creating instruments made of high quality exotic woods with attention to every fine detail. This is a Regius V-Frets 7 multiscale guitar with a stealthy Transparent Graphite finish over a flame maple top. The maple is paired with a swamp ash body, 11-ply neck made from multiple exotic woods, and a pair of Bare Knuckle Aftermath pickups - one of our favorites for aggressive high-gain guitar tones.',
        rating: '5',
        like: '079',
        numberOfStrings: '7',
        scale: 27,
        multiscale: false,
        price: 3000
      },
      {
        brand: 'Mayones',
        model: 'Regius 7VF',
        image: 'images/mayones-regius7vf.jpg',
        description: 'Handmade in Poland, Mayones Guitars have established themselves as true masters of their craft when it comes to creating instruments made of high quality exotic woods with attention to every fine detail. This is a Regius V-Frets 7 multiscale guitar with a stealthy Transparent Graphite finish over a flame maple top. The maple is paired with a swamp ash body, 11-ply neck made from multiple exotic woods, and a pair of Bare Knuckle Aftermath pickups - one of our favorites for aggressive high-gain guitar tones.',
        rating: '5',
        like: '099',
        numberOfStrings: '7',
        scale: 27,
        multiscale: true,
        price: 3500
      },
      {
        brand: 'Strandberg',
        model: 'Boden 8',
        image: 'images/Strandberg-boden8.png',
        description: 'The Boden headless custom 8 string guitar combines excellent ergonomics with style and aesthetics. The guitar is named after the city Boden in the north of Sweden, drawing on the resemblance between its shape and reindeer antlers; there are no wild reindeer left in Sweden, but they are commonly farmed in the north.',
        rating: '5',
        like: '155',
        numberOfStrings: '8',
        scale: 27,
        multiscale: true,
        price: 4100
      },
      {
        brand: 'Strandberg',
        model: 'Boden 7',
        image: 'images/Strandberg-boden7.png',
        description: 'The Boden headless custom 7 string guitar combines excellent ergonomics with style and aesthetics. The guitar is named after the city Boden in the north of Sweden, drawing on the resemblance between its shape and reindeer antlers; there are no wild reindeer left in Sweden, but they are commonly farmed in the north.',
        rating: '5',
        like: '115',
        numberOfStrings: '7',
        scale: 27,
        multiscale: true,
        price: 3800
      }
    ];

    guitarsFactory.getGuitars = function() {
      return guitars;
    };

    return guitarsFactory;
});
