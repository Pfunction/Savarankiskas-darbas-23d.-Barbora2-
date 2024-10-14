let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

//page mygtukai
let visa_suma = document.getElementById('skaiciavimas');
let pirkiniuSkaicius = document.getElementById('pirkiniu-skaicius');

// Duona selectors
let duonosMygtukas = document.getElementById('duona-prideti-mygtukas');
let duonosKiekis = document.getElementById('duona-kiekis');
let duonosMinus = document.getElementById('duona-minus');
let duonosPlus = document.getElementById('duona-plus');
let duonaKaina = document.getElementById('duona-kaina');
let duona_krepselis = document.getElementById('duona-krepselis');

// Kiaušiniai selectors
let kiausiniaiMygtukas = document.getElementById('kiausiniai-prideti-mygtukas');
let kiausiniaiKiekis = document.getElementById('kiausiniai-kiekis');
let kiausiniaiMinus = document.getElementById('kiausiniai-minus');
let kiausiniaiPlus = document.getElementById('kiausiniai-plus');
let kiausiniaiKaina = document.getElementById('kiausiniai-kaina');
let kiausiniai_krepselis = document.getElementById('kiausiniai-krepselis');

// Helper function to update total price
function updateTotalPrice(priceDelta) {
    let suma = parseFloat(visa_suma.innerText);
    visa_suma.innerText = (suma + priceDelta).toFixed(2); // Ensures 2 decimal places
}

// Duona events
duonosMinus.addEventListener('click', () => {
    let currentq = parseInt(duonosKiekis.innerText);
    let kaina = parseFloat(duonaKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        duonosKiekis.innerText = currentq - 1;
        duonaKaina.innerText = (kaina - 2).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-2);
    }

    if (currentq <= 1) {
        duona_krepselis.style.display = 'none';
    }
});

duonosMygtukas.addEventListener('click', () => {
    let currentq = parseInt(duonosKiekis.innerText);
    duonosKiekis.innerText = currentq + 1;

    let kaina = parseFloat(duonaKaina.innerText);
    duonaKaina.innerText = (kaina + 2).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(2);
    duona_krepselis.style.display = 'grid';
});

duonosPlus.addEventListener('click', () => {
    let currentq = parseInt(duonosKiekis.innerText);
    duonosKiekis.innerText = currentq + 1;

    let kaina = parseFloat(duonaKaina.innerText);
    duonaKaina.innerText = (kaina + 2).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(2);
    duona_krepselis.style.display = 'grid';
});

// Kiaušiniai events
kiausiniaiMinus.addEventListener('click', () => {
    let currentq = parseInt(kiausiniaiKiekis.innerText);
    let kaina = parseFloat(kiausiniaiKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        kiausiniaiKiekis.innerText = currentq - 1;
        kiausiniaiKaina.innerText = (kaina - 3).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-3);
    }

    if (currentq <= 1) {
        kiausiniai_krepselis.style.display = 'none';
    }
});

kiausiniaiMygtukas.addEventListener('click', () => {
    let currentq = parseInt(kiausiniaiKiekis.innerText);
    kiausiniaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(kiausiniaiKaina.innerText);
    kiausiniaiKaina.innerText = (kaina + 3).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(3);
    kiausiniai_krepselis.style.display = 'grid';
});

kiausiniaiPlus.addEventListener('click', () => {
    let currentq = parseInt(kiausiniaiKiekis.innerText);
    kiausiniaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(kiausiniaiKaina.innerText);
    kiausiniaiKaina.innerText = (kaina + 3).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(3);
    kiausiniai_krepselis.style.display = 'grid';
});

let miltaiMygtukas = document.getElementById('miltai-prideti-mygtukas');
let miltaiKiekis = document.getElementById('miltai-kiekis');
let miltaiMinus = document.getElementById('miltai-minus');
let miltaiPlus = document.getElementById('miltai-plus');
let miltaiKaina = document.getElementById('miltai-kaina');
let miltai_krepselis = document.getElementById('miltai-krepselis');

// Minus button event
miltaiMinus.addEventListener('click', () => {
    let currentq = parseInt(miltaiKiekis.innerText);
    let kaina = parseFloat(miltaiKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        miltaiKiekis.innerText = currentq - 1;
        miltaiKaina.innerText = (kaina - 2).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-2);
    }

    if (currentq <= 1) {
        miltai_krepselis.style.display = 'none';
    }
});

// Add to cart button event
miltaiMygtukas.addEventListener('click', () => {
    let currentq = parseInt(miltaiKiekis.innerText);
    miltaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(miltaiKaina.innerText);
    miltaiKaina.innerText = (kaina + 2).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(2);
    miltai_krepselis.style.display = 'grid';
});

// Plus button event
miltaiPlus.addEventListener('click', () => {
    let currentq = parseInt(miltaiKiekis.innerText);
    miltaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(miltaiKaina.innerText);
    miltaiKaina.innerText = (kaina + 2).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(2);
    miltai_krepselis.style.display = 'grid';
});

// Pienas
let pienasMygtukas = document.getElementById('pienas-prideti-mygtukas');
let pienasKiekis = document.getElementById('pienas-kiekis');
let pienasMinus = document.getElementById('pienas-minus');
let pienasPlus = document.getElementById('pienas-plus');
let pienasKaina = document.getElementById('pienas-kaina');
let pienas_krepselis = document.getElementById('pienas-krepselis');

// Minus button event for Pienas
pienasMinus.addEventListener('click', () => {
    let currentq = parseInt(pienasKiekis.innerText);
    let kaina = parseFloat(pienasKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        pienasKiekis.innerText = currentq - 1;
        pienasKaina.innerText = (kaina - 2.50).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-2.50);
    }

    if (currentq <= 1) {
        pienas_krepselis.style.display = 'none';
    }
});

// Add to cart button event for Pienas
pienasMygtukas.addEventListener('click', () => {
    let currentq = parseInt(pienasKiekis.innerText);
    pienasKiekis.innerText = currentq + 1;

    let kaina = parseFloat(pienasKaina.innerText);
    pienasKaina.innerText = (kaina + 2.50).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(2.50);
    pienas_krepselis.style.display = 'grid';
});

// Plus button event for Pienas
pienasPlus.addEventListener('click', () => {
    let currentq = parseInt(pienasKiekis.innerText);
    pienasKiekis.innerText = currentq + 1;

    let kaina = parseFloat(pienasKaina.innerText);
    pienasKaina.innerText = (kaina + 2.50).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(2.50);
    pienas_krepselis.style.display = 'grid';
});

// Bananai
let bananaiMygtukas = document.getElementById('bananai-prideti-mygtukas');
let bananaiKiekis = document.getElementById('bananai-kiekis');
let bananaiMinus = document.getElementById('bananai-minus');
let bananaiPlus = document.getElementById('bananai-plus');
let bananaiKaina = document.getElementById('bananai-kaina');
let bananai_krepselis = document.getElementById('bananai-krepselis');

// Minus button event for Bananai
bananaiMinus.addEventListener('click', () => {
    let currentq = parseInt(bananaiKiekis.innerText);
    let kaina = parseFloat(bananaiKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        bananaiKiekis.innerText = currentq - 1;
        bananaiKaina.innerText = (kaina - 1).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-1);
    }

    if (currentq <= 1) {
        bananai_krepselis.style.display = 'none';
    }
});

// Add to cart button event for Bananai
bananaiMygtukas.addEventListener('click', () => {
    let currentq = parseInt(bananaiKiekis.innerText);
    bananaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(bananaiKaina.innerText);
    bananaiKaina.innerText = (kaina + 1).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(1);
    bananai_krepselis.style.display = 'grid';
});

// Plus button event for Bananai
bananaiPlus.addEventListener('click', () => {
    let currentq = parseInt(bananaiKiekis.innerText);
    bananaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(bananaiKaina.innerText);
    bananaiKaina.innerText = (kaina + 1).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(1);
    bananai_krepselis.style.display = 'grid';
});

// Sausainiai
let sausainiaiMygtukas = document.getElementById('sausainiai-prideti-mygtukas');
let sausainiaiKiekis = document.getElementById('sausainiai-kiekis');
let sausainiaiMinus = document.getElementById('sausainiai-minus');
let sausainiaiPlus = document.getElementById('sausainiai-plus');
let sausainiaiKaina = document.getElementById('sausainiai-kaina');
let sausainiai_krepselis = document.getElementById('sausainiai-krepselis');

// Minus button event for Sausainiai
sausainiaiMinus.addEventListener('click', () => {
    let currentq = parseInt(sausainiaiKiekis.innerText);
    let kaina = parseFloat(sausainiaiKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        sausainiaiKiekis.innerText = currentq - 1;
        sausainiaiKaina.innerText = (kaina - 4).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-4);
    }

    if (currentq <= 1) {
        sausainiai_krepselis.style.display = 'none';
    }
});

// Add to cart button event for Sausainiai
sausainiaiMygtukas.addEventListener('click', () => {
    let currentq = parseInt(sausainiaiKiekis.innerText);
    sausainiaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(sausainiaiKaina.innerText);
    sausainiaiKaina.innerText = (kaina + 4).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(4);
    sausainiai_krepselis.style.display = 'grid';
});

// Plus button event for Sausainiai
sausainiaiPlus.addEventListener('click', () => {
    let currentq = parseInt(sausainiaiKiekis.innerText);
    sausainiaiKiekis.innerText = currentq + 1;

    let kaina = parseFloat(sausainiaiKaina.innerText);
    sausainiaiKaina.innerText = (kaina + 4).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(4);
    sausainiai_krepselis.style.display = 'grid';
});

// Varškė
let varskeMygtukas = document.getElementById('varske-prideti-mygtukas');
let varskeKiekis = document.getElementById('varske-kiekis');
let varskeMinus = document.getElementById('varske-minus');
let varskePlus = document.getElementById('varske-plus');
let varskeKaina = document.getElementById('varske-kaina');
let varske_krepselis = document.getElementById('varske-krepselis');

// Minus button event for Varškė
varskeMinus.addEventListener('click', () => {
    let currentq = parseInt(varskeKiekis.innerText);
    let kaina = parseFloat(varskeKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        varskeKiekis.innerText = currentq - 1;
        varskeKaina.innerText = (kaina - 3).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-3);
    }

    if (currentq <= 1) {
        varske_krepselis.style.display = 'none';
    }
});

// Add to cart button event for Varškė
varskeMygtukas.addEventListener('click', () => {
    let currentq = parseInt(varskeKiekis.innerText);
    varskeKiekis.innerText = currentq + 1;

    let kaina = parseFloat(varskeKaina.innerText);
    varskeKaina.innerText = (kaina + 3).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(3);
    varske_krepselis.style.display = 'grid';
});

// Plus button event for Varškė
varskePlus.addEventListener('click', () => {
    let currentq = parseInt(varskeKiekis.innerText);
    varskeKiekis.innerText = currentq + 1;

    let kaina = parseFloat(varskeKaina.innerText);
    varskeKaina.innerText = (kaina + 3).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(3);
    varske_krepselis.style.display = 'grid';
});

// Sviestas
let sviestasMygtukas = document.getElementById('sviestas-prideti-mygtukas');
let sviestasKiekis = document.getElementById('sviestas-kiekis');
let sviestasMinus = document.getElementById('sviestas-minus');
let sviestasPlus = document.getElementById('sviestas-plus');
let sviestasKaina = document.getElementById('sviestas-kaina');
let sviestas_krepselis = document.getElementById('sviestas-krepselis');

// Minus button event for Sviestas
sviestasMinus.addEventListener('click', () => {
    let currentq = parseInt(sviestasKiekis.innerText);
    let kaina = parseFloat(sviestasKaina.innerText);
    let skaicius = parseInt(pirkiniuSkaicius.innerText);

    if (currentq > 0) {
        sviestasKiekis.innerText = currentq - 1;
        sviestasKaina.innerText = (kaina - 1.50).toFixed(2);
        pirkiniuSkaicius.innerText = skaicius - 1;
        updateTotalPrice(-1.50);
    }

    if (currentq <= 1) {
        sviestas_krepselis.style.display = 'none';
    }
});

// Add to cart button event for Sviestas
sviestasMygtukas.addEventListener('click', () => {
    let currentq = parseInt(sviestasKiekis.innerText);
    sviestasKiekis.innerText = currentq + 1;

    let kaina = parseFloat(sviestasKaina.innerText);
    sviestasKaina.innerText = (kaina + 1.50).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(1.50);
    sviestas_krepselis.style.display = 'grid';
});

// Plus button event for Sviestas
sviestasPlus.addEventListener('click', () => {
    let currentq = parseInt(sviestasKiekis.innerText);
    sviestasKiekis.innerText = currentq + 1;

    let kaina = parseFloat(sviestasKaina.innerText);
    sviestasKaina.innerText = (kaina + 1.50).toFixed(2);

    let skaicius = parseInt(pirkiniuSkaicius.innerText);
    pirkiniuSkaicius.innerText = skaicius + 1;

    updateTotalPrice(1.50);
    sviestas_krepselis.style.display = 'grid';
});







