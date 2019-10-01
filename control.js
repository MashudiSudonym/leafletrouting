// inisialisasi id peta
var map = L.map('map');

// layer yang digunakan dari OpenStreetMap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// control dari Leaflet Routing Machine
control = L.Routing.control({
    waypoints: [
    	// Terminal Pecangaan
    	// L.latLng(-6.69631, 110.70900),

    	// Terminal Jepara
    	 L.latLng(-6.58889, 110.66060),

    	// Terminal Welahan
    	// L.latLng(-6.78650, 110.72255),

    	// Terminal Bangsri
    	// L.latLng(-6.51964, 110.7701),

    	// Terminal Kelet
    	// L.latLng(-6.50288, 110.90874),

    	// Lokasi UNISNU
        L.latLng(-6.61655, 110.69165),
    ],
    
}).addTo(map);

// array lokasi untuk marker
titik = [
	{
		// Terminal Bangsri
		"lat":-6.51964,
		"lng":110.7701,
		"teks":"Terminal Bangsri",
	},
	{
		// Terminal Jepara
		"lat":-6.58889,
		"lng":110.66060,
		"teks":"Terminal Jepara",
	},
	{
		// Terminal Pecangaan
		"lat":-6.69631,
		"lng":110.70900,
		"teks":"Terminal Pecangaan",
	},
	{
		// Terminal Welahan
		"lat":-6.78650,
		"lng":110.72255,
		"teks":"Terminal Welahan",
	},
	{
		// Terminal Kelet
		"lat":-6.50288,
		"lng":110.90874,
		"teks":"Terminal Kelet",
	},
	{
		// UNISNU
		"lat":-6.61655,
		"lng":110.69165,
		"teks":"UNISNU Jepara",
	},
];

// proses marker data diambil dari array
for (var i = 0; i < titik.length; i++) {

	// inisialisasi marker
	var marker = L.marker([titik[i].lat, titik[i].lng]).addTo(map);

	// fungsi createButton untuk menampilkan tombol
	function createButton(label, container) {
	    var btn = L.DomUtil.create('button', '', container);
	    btn.setAttribute('type', 'button');
	    btn.innerHTML = label;
	    return btn;
	}

	// variabel untuk container marker, tombol dan popup info marker
	var container = L.DomUtil.create('div');
    var startBtn = createButton('Mulai dari lokasi ini', container);

    var popup = L.popup();

	function onMapClick(e) {

		// inisialisasi popup marker
	    popup
	        .setLatLng(e.latlng)
	        .setContent(container)
	        .openOn(map);

	    // SpliceWayPoints dari Leaflet Routing Machine untuk mendeklarasikan awalan baru dari marker yang dipilih
	    L.DomEvent.on(startBtn, 'click', function() {
	        control.spliceWaypoints(0, 1, e.latlng);
	        map.closePopup();
	    });
	}

	// mengaktifkan event klik
	marker.on('click', onMapClick);
}
