
const cities = [
  { id: 0, name: "Strasbourg", country: "France", latitude: 48.583, longitude: 7.745, inhabitants: 291313, elevation: 132 },
  { id: 1, name: "Bordeaux", country: "France", latitude: 44.837, longitude: -0.579, inhabitants: 261804, elevation: 6 },
  { id: 2, name: "Lille", country: "France", latitude: 50.629, longitude: 3.057, inhabitants: 236710, elevation: 18 },
  { id: 3, name: "Nantes", country: "France", latitude: 47.218, longitude: -1.553, inhabitants: 323204, elevation: 8 },
  { id: 4, name: "Grenoble", country: "France", latitude: 45.171, longitude: 5.722, inhabitants: 157477, elevation: 212 },
  { id: 5, name: "Bremen", country: "Germany", latitude: 53.075, longitude: 8.807, inhabitants: 569396, elevation: 12 },
  { id: 6, name: "Nuremberg", country: "Germany", latitude: 49.454, longitude: 11.078, inhabitants: 526091, elevation: 302 },
  { id: 7, name: "Leipzig", country: "Germany", latitude: 51.340, longitude: 12.375, inhabitants: 616093, elevation: 113 },
  { id: 8, name: "Dresden", country: "Germany", latitude: 51.050, longitude: 13.740, inhabitants: 563311, elevation: 113 },
  { id: 9, name: "Heidelberg", country: "Germany", latitude: 49.417, longitude: 8.717, inhabitants: 162273, elevation: 114 },
  { id: 10, name: "Venice", country: "Italy", latitude: 45.440, longitude: 12.315, inhabitants: 258685, elevation: 1 },
  { id: 11, name: "Florence", country: "Italy", latitude: 43.769, longitude: 11.255, inhabitants: 382258, elevation: 50 },
  { id: 12, name: "Genoa", country: "Italy", latitude: 44.405, longitude: 8.932, inhabitants: 580097, elevation: 20 },
  { id: 13, name: "Verona", country: "Italy", latitude: 45.438, longitude: 10.992, inhabitants: 257275, elevation: 59 },
  { id: 14, name: "Innsbruck", country: "Austria", latitude: 47.269, longitude: 11.404, inhabitants: 132493, elevation: 574 },
  { id: 15, name: "Salzburg", country: "Austria", latitude: 47.809, longitude: 13.055, inhabitants: 156872, elevation: 424 },
  { id: 16, name: "Graz", country: "Austria", latitude: 47.070, longitude: 15.439, inhabitants: 295000, elevation: 353 },
  { id: 17, name: "Linz", country: "Austria", latitude: 48.306, longitude: 14.286, inhabitants: 204846, elevation: 266 },
  { id: 18, name: "Zurich", country: "Switzerland", latitude: 47.376, longitude: 8.541, inhabitants: 434008, elevation: 408 },
  { id: 19, name: "Geneva", country: "Switzerland", latitude: 46.204, longitude: 6.143, inhabitants: 203856, elevation: 375 },
  { id: 20, name: "Basel", country: "Switzerland", latitude: 47.559, longitude: 7.588, inhabitants: 178000, elevation: 244 },
  { id: 21, name: "Lucerne", country: "Switzerland", latitude: 47.050, longitude: 8.308, inhabitants: 82000, elevation: 436 },
  { id: 22, name: "Kraków", country: "Poland", latitude: 50.064, longitude: 19.945, inhabitants: 779115, elevation: 219 },
  { id: 23, name: "Gdańsk", country: "Poland", latitude: 54.352, longitude: 18.646, inhabitants: 470907, elevation: 7 },
  { id: 24, name: "Poznań", country: "Poland", latitude: 52.406, longitude: 16.925, inhabitants: 532048, elevation: 60 },
  { id: 25, name: "Wrocław", country: "Poland", latitude: 51.107, longitude: 17.038, inhabitants: 641928, elevation: 120 },
  { id: 26, name: "Bruges", country: "Belgium", latitude: 51.209, longitude: 3.224, inhabitants: 118284, elevation: 2 },
  { id: 27, name: "Antwerp", country: "Belgium", latitude: 51.221, longitude: 4.399, inhabitants: 529247, elevation: 7 },
  { id: 28, name: "Ghent", country: "Belgium", latitude: 51.054, longitude: 3.721, inhabitants: 262219, elevation: 9 },
  { id: 29, name: "Rotterdam", country: "Netherlands", latitude: 51.922, longitude: 4.479, inhabitants: 651446, elevation: -1 },
  { id: 30, name: "Utrecht", country: "Netherlands", latitude: 52.090, longitude: 5.122, inhabitants: 357179, elevation: 1 },
  { id: 31, name: "Maastricht", country: "Netherlands", latitude: 50.851, longitude: 5.691, inhabitants: 122378, elevation: 49 },
  { id: 32, name: "Luxembourg", country: "Luxembourg", latitude: 49.611, longitude: 6.131, inhabitants: 128512, elevation: 376 },
  { id: 33, name: "Brno", country: "Czech Republic", latitude: 49.195, longitude: 16.607, inhabitants: 380681, elevation: 190 },
  { id: 34, name: "Ostrava", country: "Czech Republic", latitude: 49.834, longitude: 18.292, inhabitants: 287968, elevation: 208 },
  { id: 35, name: "Košice", country: "Slovakia", latitude: 48.716, longitude: 21.261, inhabitants: 238593, elevation: 206 },
  { id: 36, name: "Debrecen", country: "Hungary", latitude: 47.531, longitude: 21.627, inhabitants: 202214, elevation: 121 },
  { id: 37, name: "Pécs", country: "Hungary", latitude: 46.072, longitude: 18.233, inhabitants: 144675, elevation: 157 },
  { id: 38, name: "Maribor", country: "Slovenia", latitude: 46.554, longitude: 15.646, inhabitants: 112325, elevation: 275 }
];

const distances = [
  {
    "city1": 1,
    "city2": 0,
    "distance": 930
  },
  {
    "city1": 2,
    "city2": 0,
    "distance": 490
  },
  {
    "city1": 2,
    "city2": 1,
    "distance": 790
  },
  {
    "city1": 3,
    "city2": 0,
    "distance": 800
  },
  {
    "city1": 3,
    "city2": 1,
    "distance": 340
  },
  {
    "city1": 3,
    "city2": 2,
    "distance": 510
  },
  {
    "city1": 4,
    "city2": 0,
    "distance": 550
  },
  {
    "city1": 4,
    "city2": 1,
    "distance": 680
  },
  {
    "city1": 4,
    "city2": 2,
    "distance": 790
  },
  {
    "city1": 4,
    "city2": 3,
    "distance": 840
  },
  {
    "city1": 5,
    "city2": 0,
    "distance": 740
  },
  {
    "city1": 5,
    "city2": 1,
    "distance": 1400
  },
  {
    "city1": 5,
    "city2": 2,
    "distance": 530
  },
  {
    "city1": 5,
    "city2": 3,
    "distance": 1100
  },
  {
    "city1": 5,
    "city2": 4,
    "distance": 1100
  },
  {
    "city1": 6,
    "city2": 0,
    "distance": 420
  },
  {
    "city1": 6,
    "city2": 1,
    "distance": 1200
  },
  {
    "city1": 6,
    "city2": 2,
    "distance": 710
  },
  {
    "city1": 6,
    "city2": 3,
    "distance": 1000
  },
  {
    "city1": 6,
    "city2": 4,
    "distance": 790
  },
  {
    "city1": 6,
    "city2": 5,
    "distance": 590
  },
  {
    "city1": 7,
    "city2": 0,
    "distance": 580
  },
  {
    "city1": 7,
    "city2": 1,
    "distance": 1300
  },
  {
    "city1": 7,
    "city2": 2,
    "distance": 720
  },
  {
    "city1": 7,
    "city2": 3,
    "distance": 1100
  },
  {
    "city1": 7,
    "city2": 4,
    "distance": 940
  },
  {
    "city1": 7,
    "city2": 5,
    "distance": 480
  },
  {
    "city1": 7,
    "city2": 6,
    "distance": 290
  },
  {
    "city1": 8,
    "city2": 0,
    "distance": 680
  },
  {
    "city1": 8,
    "city2": 1,
    "distance": 1400
  },
  {
    "city1": 8,
    "city2": 2,
    "distance": 840
  },
  {
    "city1": 8,
    "city2": 3,
    "distance": 1200
  },
  {
    "city1": 8,
    "city2": 4,
    "distance": 1000
  },
  {
    "city1": 8,
    "city2": 5,
    "distance": 580
  },
  {
    "city1": 8,
    "city2": 6,
    "distance": 390
  },
  {
    "city1": 8,
    "city2": 7,
    "distance": 140
  },
  {
    "city1": 9,
    "city2": 0,
    "distance": 140
  },
  {
    "city1": 9,
    "city2": 1,
    "distance": 950
  },
  {
    "city1": 9,
    "city2": 2,
    "distance": 500
  },
  {
    "city1": 9,
    "city2": 3,
    "distance": 830
  },
  {
    "city1": 9,
    "city2": 4,
    "distance": 590
  },
  {
    "city1": 9,
    "city2": 5,
    "distance": 720
  },
  {
    "city1": 9,
    "city2": 6,
    "distance": 400
  },
  {
    "city1": 9,
    "city2": 7,
    "distance": 560
  },
  {
    "city1": 9,
    "city2": 8,
    "distance": 660
  },
  {
    "city1": 10,
    "city2": 0,
    "distance": 790
  },
  {
    "city1": 10,
    "city2": 1,
    "distance": 1200
  },
  {
    "city1": 10,
    "city2": 2,
    "distance": 1100
  },
  {
    "city1": 10,
    "city2": 3,
    "distance": 1300
  },
  {
    "city1": 10,
    "city2": 4,
    "distance": 520
  },
  {
    "city1": 10,
    "city2": 5,
    "distance": 1200
  },
  {
    "city1": 10,
    "city2": 6,
    "distance": 850
  },
  {
    "city1": 10,
    "city2": 7,
    "distance": 990
  },
  {
    "city1": 10,
    "city2": 8,
    "distance": 1100
  },
  {
    "city1": 10,
    "city2": 9,
    "distance": 770
  },
  {
    "city1": 11,
    "city2": 0,
    "distance": 890
  },
  {
    "city1": 11,
    "city2": 1,
    "distance": 1100
  },
  {
    "city1": 11,
    "city2": 2,
    "distance": 1200
  },
  {
    "city1": 11,
    "city2": 3,
    "distance": 1200
  },
  {
    "city1": 11,
    "city2": 4,
    "distance": 390
  },
  {
    "city1": 11,
    "city2": 5,
    "distance": 1300
  },
  {
    "city1": 11,
    "city2": 6,
    "distance": 950
  },
  {
    "city1": 11,
    "city2": 7,
    "distance": 1100
  },
  {
    "city1": 11,
    "city2": 8,
    "distance": 1200
  },
  {
    "city1": 11,
    "city2": 9,
    "distance": 870
  },
  {
    "city1": 11,
    "city2": 10,
    "distance": 260
  },
  {
    "city1": 12,
    "city2": 0,
    "distance": 680
  },
  {
    "city1": 12,
    "city2": 1,
    "distance": 900
  },
  {
    "city1": 12,
    "city2": 2,
    "distance": 990
  },
  {
    "city1": 12,
    "city2": 3,
    "distance": 1000
  },
  {
    "city1": 12,
    "city2": 4,
    "distance": 380
  },
  {
    "city1": 12,
    "city2": 5,
    "distance": 1100
  },
  {
    "city1": 12,
    "city2": 6,
    "distance": 740
  },
  {
    "city1": 12,
    "city2": 7,
    "distance": 890
  },
  {
    "city1": 12,
    "city2": 8,
    "distance": 990
  },
  {
    "city1": 12,
    "city2": 9,
    "distance": 660
  },
  {
    "city1": 12,
    "city2": 10,
    "distance": 400
  },
  {
    "city1": 12,
    "city2": 11,
    "distance": 280
  },
  {
    "city1": 13,
    "city2": 0,
    "distance": 690
  },
  {
    "city1": 13,
    "city2": 1,
    "distance": 1100
  },
  {
    "city1": 13,
    "city2": 2,
    "distance": 1000
  },
  {
    "city1": 13,
    "city2": 3,
    "distance": 1200
  },
  {
    "city1": 13,
    "city2": 4,
    "distance": 420
  },
  {
    "city1": 13,
    "city2": 5,
    "distance": 1100
  },
  {
    "city1": 13,
    "city2": 6,
    "distance": 740
  },
  {
    "city1": 13,
    "city2": 7,
    "distance": 880
  },
  {
    "city1": 13,
    "city2": 8,
    "distance": 980
  },
  {
    "city1": 13,
    "city2": 9,
    "distance": 670
  },
  {
    "city1": 13,
    "city2": 10,
    "distance": 120
  },
  {
    "city1": 13,
    "city2": 11,
    "distance": 380
  },
  {
    "city1": 13,
    "city2": 12,
    "distance": 520
  },
  {
    "city1": 14,
    "city2": 0,
    "distance": 490
  },
  {
    "city1": 14,
    "city2": 1,
    "distance": 1200
  },
  {
    "city1": 14,
    "city2": 2,
    "distance": 890
  },
  {
    "city1": 14,
    "city2": 3,
    "distance": 1100
  },
  {
    "city1": 14,
    "city2": 4,
    "distance": 430
  },
  {
    "city1": 14,
    "city2": 5,
    "distance": 990
  },
  {
    "city1": 14,
    "city2": 6,
    "distance": 530
  },
  {
    "city1": 14,
    "city2": 7,
    "distance": 670
  },
  {
    "city1": 14,
    "city2": 8,
    "distance": 770
  },
  {
    "city1": 14,
    "city2": 9,
    "distance": 460
  },
  {
    "city1": 14,
    "city2": 10,
    "distance": 310
  },
  {
    "city1": 14,
    "city2": 11,
    "distance": 510
  },
  {
    "city1": 14,
    "city2": 12,
    "distance": 400
  },
  {
    "city1": 14,
    "city2": 13,
    "distance": 190
  },
  {
    "city1": 15,
    "city2": 0,
    "distance": 590
  },
  {
    "city1": 15,
    "city2": 1,
    "distance": 1300
  },
  {
    "city1": 15,
    "city2": 2,
    "distance": 980
  },
  {
    "city1": 15,
    "city2": 3,
    "distance": 1200
  },
  {
    "city1": 15,
    "city2": 4,
    "distance": 530
  },
  {
    "city1": 15,
    "city2": 5,
    "distance": 890
  },
  {
    "city1": 15,
    "city2": 6,
    "distance": 430
  },
  {
    "city1": 15,
    "city2": 7,
    "distance": 570
  },
  {
    "city1": 15,
    "city2": 8,
    "distance": 670
  },
  {
    "city1": 15,
    "city2": 9,
    "distance": 560
  },
  {
    "city1": 15,
    "city2": 10,
    "distance": 410
  },
  {
    "city1": 15,
    "city2": 11,
    "distance": 610
  },
  {
    "city1": 15,
    "city2": 12,
    "distance": 500
  },
  {
    "city1": 15,
    "city2": 13,
    "distance": 290
  },
  {
    "city1": 15,
    "city2": 14,
    "distance": 200
  },
  {
    "city1": 16,
    "city2": 0,
    "distance": 850
  },
  {
    "city1": 16,
    "city2": 1,
    "distance": 1500
  },
  {
    "city1": 16,
    "city2": 2,
    "distance": 1200
  },
  {
    "city1": 16,
    "city2": 3,
    "distance": 1400
  },
  {
    "city1": 16,
    "city2": 4,
    "distance": 740
  },
  {
    "city1": 16,
    "city2": 5,
    "distance": 1100
  },
  {
    "city1": 16,
    "city2": 6,
    "distance": 650
  },
  {
    "city1": 16,
    "city2": 7,
    "distance": 790
  },
  {
    "city1": 16,
    "city2": 8,
    "distance": 890
  },
  {
    "city1": 16,
    "city2": 9,
    "distance": 780
  },
  {
    "city1": 16,
    "city2": 10,
    "distance": 530
  },
  {
    "city1": 16,
    "city2": 11,
    "distance": 730
  },
  {
    "city1": 16,
    "city2": 12,
    "distance": 620
  },
  {
    "city1": 16,
    "city2": 13,
    "distance": 410
  },
  {
    "city1": 16,
    "city2": 14,
    "distance": 420
  },
  {
    "city1": 16,
    "city2": 15,
    "distance": 220
  },
  {
    "city1": 17,
    "city2": 0,
    "distance": 670
  },
  {
    "city1": 17,
    "city2": 1,
    "distance": 1400
  },
  {
    "city1": 17,
    "city2": 2,
    "distance": 1000
  },
  {
    "city1": 17,
    "city2": 3,
    "distance": 1200
  },
  {
    "city1": 17,
    "city2": 4,
    "distance": 640
  },
  {
    "city1": 17,
    "city2": 5,
    "distance": 790
  },
  {
    "city1": 17,
    "city2": 6,
    "distance": 450
  },
  {
    "city1": 17,
    "city2": 7,
    "distance": 590
  },
  {
    "city1": 17,
    "city2": 8,
    "distance": 690
  },
  {
    "city1": 17,
    "city2": 9,
    "distance": 580
  },
  {
    "city1": 17,
    "city2": 10,
    "distance": 510
  },
  {
    "city1": 17,
    "city2": 11,
    "distance": 710
  },
  {
    "city1": 17,
    "city2": 12,
    "distance": 600
  },
  {
    "city1": 17,
    "city2": 13,
    "distance": 390
  },
  {
    "city1": 17,
    "city2": 14,
    "distance": 320
  },
  {
    "city1": 17,
    "city2": 15,
    "distance": 120
  },
  {
    "city1": 17,
    "city2": 16,
    "distance": 340
  },
  {
    "city1": 18,
    "city2": 0,
    "distance": 150
  },
  {
    "city1": 18,
    "city2": 1,
    "distance": 930
  },
  {
    "city1": 18,
    "city2": 2,
    "distance": 580
  },
  {
    "city1": 18,
    "city2": 3,
    "distance": 830
  },
  {
    "city1": 18,
    "city2": 4,
    "distance": 430
  },
  {
    "city1": 18,
    "city2": 5,
    "distance": 890
  },
  {
    "city1": 18,
    "city2": 6,
    "distance": 570
  },
  {
    "city1": 18,
    "city2": 7,
    "distance": 730
  },
  {
    "city1": 18,
    "city2": 8,
    "distance": 830
  },
  {
    "city1": 18,
    "city2": 9,
    "distance": 290
  },
  {
    "city1": 18,
    "city2": 10,
    "distance": 640
  },
  {
    "city1": 18,
    "city2": 11,
    "distance": 740
  },
  {
    "city1": 18,
    "city2": 12,
    "distance": 530
  },
  {
    "city1": 18,
    "city2": 13,
    "distance": 540
  },
  {
    "city1": 18,
    "city2": 14,
    "distance": 340
  },
  {
    "city1": 18,
    "city2": 15,
    "distance": 440
  },
  {
    "city1": 18,
    "city2": 16,
    "distance": 700
  },
  {
    "city1": 18,
    "city2": 17,
    "distance": 520
  },
  {
    "city1": 19,
    "city2": 0,
    "distance": 370
  },
  {
    "city1": 19,
    "city2": 1,
    "distance": 740
  },
  {
    "city1": 19,
    "city2": 2,
    "distance": 690
  },
  {
    "city1": 19,
    "city2": 3,
    "distance": 690
  },
  {
    "city1": 19,
    "city2": 4,
    "distance": 150
  },
  {
    "city1": 19,
    "city2": 5,
    "distance": 1000
  },
  {
    "city1": 19,
    "city2": 6,
    "distance": 690
  },
  {
    "city1": 19,
    "city2": 7,
    "distance": 840
  },
  {
    "city1": 19,
    "city2": 8,
    "distance": 940
  },
  {
    "city1": 19,
    "city2": 9,
    "distance": 530
  },
  {
    "city1": 19,
    "city2": 10,
    "distance": 670
  },
  {
    "city1": 19,
    "city2": 11,
    "distance": 540
  },
  {
    "city1": 19,
    "city2": 12,
    "distance": 530
  },
  {
    "city1": 19,
    "city2": 13,
    "distance": 570
  },
  {
    "city1": 19,
    "city2": 14,
    "distance": 580
  },
  {
    "city1": 19,
    "city2": 15,
    "distance": 680
  },
  {
    "city1": 19,
    "city2": 16,
    "distance": 890
  },
  {
    "city1": 19,
    "city2": 17,
    "distance": 790
  },
  {
    "city1": 19,
    "city2": 18,
    "distance": 280
  },
  {
    "city1": 20,
    "city2": 0,
    "distance": 130
  },
  {
    "city1": 20,
    "city2": 1,
    "distance": 890
  },
  {
    "city1": 20,
    "city2": 2,
    "distance": 530
  },
  {
    "city1": 20,
    "city2": 3,
    "distance": 790
  },
  {
    "city1": 20,
    "city2": 4,
    "distance": 450
  },
  {
    "city1": 20,
    "city2": 5,
    "distance": 860
  },
  {
    "city1": 20,
    "city2": 6,
    "distance": 540
  },
  {
    "city1": 20,
    "city2": 7,
    "distance": 700
  },
  {
    "city1": 20,
    "city2": 8,
    "distance": 800
  },
  {
    "city1": 20,
    "city2": 9,
    "distance": 260
  },
  {
    "city1": 20,
    "city2": 10,
    "distance": 660
  },
  {
    "city1": 20,
    "city2": 11,
    "distance": 760
  },
  {
    "city1": 20,
    "city2": 12,
    "distance": 550
  },
  {
    "city1": 20,
    "city2": 13,
    "distance": 560
  },
  {
    "city1": 20,
    "city2": 14,
    "distance": 360
  },
  {
    "city1": 20,
    "city2": 15,
    "distance": 460
  },
  {
    "city1": 20,
    "city2": 16,
    "distance": 720
  },
  {
    "city1": 20,
    "city2": 17,
    "distance": 540
  },
  {
    "city1": 20,
    "city2": 18,
    "distance": 80
  },
  {
    "city1": 20,
    "city2": 19,
    "distance": 300
  },
  {
    "city1": 21,
    "city2": 0,
    "distance": 220
  },
  {
    "city1": 21,
    "city2": 1,
    "distance": 950
  },
  {
    "city1": 21,
    "city2": 2,
    "distance": 610
  },
  {
    "city1": 21,
    "city2": 3,
    "distance": 860
  },
  {
    "city1": 21,
    "city2": 4,
    "distance": 480
  },
  {
    "city1": 21,
    "city2": 5,
    "distance": 920
  },
  {
    "city1": 21,
    "city2": 6,
    "distance": 620
  },
  {
    "city1": 21,
    "city2": 7,
    "distance": 780
  },
  {
    "city1": 21,
    "city2": 8,
    "distance": 880
  },
  {
    "city1": 21,
    "city2": 9,
    "distance": 340
  },
  {
    "city1": 21,
    "city2": 10,
    "distance": 740
  },
  {
    "city1": 21,
    "city2": 11,
    "distance": 840
  },
  {
    "city1": 21,
    "city2": 12,
    "distance": 630
  },
  {
    "city1": 21,
    "city2": 13,
    "distance": 640
  },
  {
    "city1": 21,
    "city2": 14,
    "distance": 440
  },
  {
    "city1": 21,
    "city2": 15,
    "distance": 540
  },
  {
    "city1": 21,
    "city2": 16,
    "distance": 800
  },
  {
    "city1": 21,
    "city2": 17,
    "distance": 620
  },
  {
    "city1": 21,
    "city2": 18,
    "distance": 70
  },
  {
    "city1": 21,
    "city2": 19,
    "distance": 380
  },
  {
    "city1": 21,
    "city2": 20,
    "distance": 150
  },
  {
    "city1": 22,
    "city2": 0,
    "distance": 1100
  },
  {
    "city1": 22,
    "city2": 1,
    "distance": 1900
  },
  {
    "city1": 22,
    "city2": 2,
    "distance": 1300
  },
  {
    "city1": 22,
    "city2": 3,
    "distance": 1700
  },
  {
    "city1": 22,
    "city2": 4,
    "distance": 1400
  },
  {
    "city1": 22,
    "city2": 5,
    "distance": 1300
  },
  {
    "city1": 22,
    "city2": 6,
    "distance": 950
  },
  {
    "city1": 22,
    "city2": 7,
    "distance": 850
  },
  {
    "city1": 22,
    "city2": 8,
    "distance": 750
  },
  {
    "city1": 22,
    "city2": 9,
    "distance": 1000
  },
  {
    "city1": 22,
    "city2": 10,
    "distance": 1200
  },
  {
    "city1": 22,
    "city2": 11,
    "distance": 1400
  },
  {
    "city1": 22,
    "city2": 12,
    "distance": 1300
  },
  {
    "city1": 22,
    "city2": 13,
    "distance": 1100
  },
  {
    "city1": 22,
    "city2": 14,
    "distance": 900
  },
  {
    "city1": 22,
    "city2": 15,
    "distance": 800
  },
  {
    "city1": 22,
    "city2": 16,
    "distance": 600
  },
  {
    "city1": 22,
    "city2": 17,
    "distance": 800
  },
  {
    "city1": 22,
    "city2": 18,
    "distance": 1200
  },
  {
    "city1": 22,
    "city2": 19,
    "distance": 1500
  },
  {
    "city1": 22,
    "city2": 20,
    "distance": 1200
  },
  {
    "city1": 22,
    "city2": 21,
    "distance": 1300
  },
  {
    "city1": 23,
    "city2": 0,
    "distance": 1300
  },
  {
    "city1": 23,
    "city2": 1,
    "distance": 2000
  },
  {
    "city1": 23,
    "city2": 2,
    "distance": 1200
  },
  {
    "city1": 23,
    "city2": 3,
    "distance": 1800
  },
  {
    "city1": 23,
    "city2": 4,
    "distance": 1600
  },
  {
    "city1": 23,
    "city2": 5,
    "distance": 1100
  },
  {
    "city1": 23,
    "city2": 6,
    "distance": 1150
  },
  {
    "city1": 23,
    "city2": 7,
    "distance": 1050
  },
  {
    "city1": 23,
    "city2": 8,
    "distance": 950
  },
  {
    "city1": 23,
    "city2": 9,
    "distance": 1200
  },
  {
    "city1": 23,
    "city2": 10,
    "distance": 1400
  },
  {
    "city1": 23,
    "city2": 11,
    "distance": 1600
  },
  {
    "city1": 23,
    "city2": 12,
    "distance": 1500
  },
  {
    "city1": 23,
    "city2": 13,
    "distance": 1300
  },
  {
    "city1": 23,
    "city2": 14,
    "distance": 1100
  },
  {
    "city1": 23,
    "city2": 15,
    "distance": 1000
  },
  {
    "city1": 23,
    "city2": 16,
    "distance": 800
  },
  {
    "city1": 23,
    "city2": 17,
    "distance": 1000
  },
  {
    "city1": 23,
    "city2": 18,
    "distance": 1400
  },
  {
    "city1": 23,
    "city2": 19,
    "distance": 1700
  },
  {
    "city1": 23,
    "city2": 20,
    "distance": 1400
  },
  {
    "city1": 23,
    "city2": 21,
    "distance": 1500
  },
  {
    "city1": 23,
    "city2": 22,
    "distance": 450
  },
  {
    "city1": 24,
    "city2": 0,
    "distance": 940
  },
  {
    "city1": 24,
    "city2": 1,
    "distance": 1800
  },
  {
    "city1": 24,
    "city2": 2,
    "distance": 1100
  },
  {
    "city1": 24,
    "city2": 3,
    "distance": 1600
  },
  {
    "city1": 24,
    "city2": 4,
    "distance": 1300
  },
  {
    "city1": 24,
    "city2": 5,
    "distance": 900
  },
  {
    "city1": 24,
    "city2": 6,
    "distance": 850
  },
  {
    "city1": 24,
    "city2": 7,
    "distance": 750
  },
  {
    "city1": 24,
    "city2": 8,
    "distance": 650
  },
  {
    "city1": 24,
    "city2": 9,
    "distance": 900
  },
  {
    "city1": 24,
    "city2": 10,
    "distance": 1200
  },
  {
    "city1": 24,
    "city2": 11,
    "distance": 1400
  },
  {
    "city1": 24,
    "city2": 12,
    "distance": 1300
  },
  {
    "city1": 24,
    "city2": 13,
    "distance": 1100
  },
  {
    "city1": 24,
    "city2": 14,
    "distance": 900
  },
  {
    "city1": 24,
    "city2": 15,
    "distance": 800
  },
  {
    "city1": 24,
    "city2": 16,
    "distance": 600
  },
  {
    "city1": 24,
    "city2": 17,
    "distance": 800
  },
  {
    "city1": 24,
    "city2": 18,
    "distance": 1100
  },
  {
    "city1": 24,
    "city2": 19,
    "distance": 1400
  },
  {
    "city1": 24,
    "city2": 20,
    "distance": 1100
  },
  {
    "city1": 24,
    "city2": 21,
    "distance": 1200
  },
  {
    "city1": 24,
    "city2": 22,
    "distance": 250
  },
  {
    "city1": 24,
    "city2": 23,
    "distance": 350
  },
  {
    "city1": 25,
    "city2": 0,
    "distance": 830
  },
  {
    "city1": 25,
    "city2": 1,
    "distance": 1700
  },
  {
    "city1": 25,
    "city2": 2,
    "distance": 1100
  },
  {
    "city1": 25,
    "city2": 3,
    "distance": 1500
  },
  {
    "city1": 25,
    "city2": 4,
    "distance": 1200
  },
  {
    "city1": 25,
    "city2": 5,
    "distance": 800
  },
  {
    "city1": 25,
    "city2": 6,
    "distance": 750
  },
  {
    "city1": 25,
    "city2": 7,
    "distance": 650
  },
  {
    "city1": 25,
    "city2": 8,
    "distance": 550
  },
  {
    "city1": 25,
    "city2": 9,
    "distance": 800
  },
  {
    "city1": 25,
    "city2": 10,
    "distance": 1100
  },
  {
    "city1": 25,
    "city2": 11,
    "distance": 1300
  },
  {
    "city1": 25,
    "city2": 12,
    "distance": 1200
  },
  {
    "city1": 25,
    "city2": 13,
    "distance": 1000
  },
  {
    "city1": 25,
    "city2": 14,
    "distance": 800
  },
  {
    "city1": 25,
    "city2": 15,
    "distance": 700
  },
  {
    "city1": 25,
    "city2": 16,
    "distance": 500
  },
  {
    "city1": 25,
    "city2": 17,
    "distance": 700
  },
  {
    "city1": 25,
    "city2": 18,
    "distance": 1000
  },
  {
    "city1": 25,
    "city2": 19,
    "distance": 1300
  },
  {
    "city1": 25,
    "city2": 20,
    "distance": 1000
  },
  {
    "city1": 25,
    "city2": 21,
    "distance": 1100
  },
  {
    "city1": 25,
    "city2": 22,
    "distance": 350
  },
  {
    "city1": 25,
    "city2": 23,
    "distance": 550
  },
  {
    "city1": 25,
    "city2": 24,
    "distance": 200
  },
  {
    "city1": 26,
    "city2": 0,
    "distance": 490
  },
  {
    "city1": 26,
    "city2": 1,
    "distance": 840
  },
  {
    "city1": 26,
    "city2": 2,
    "distance": 120
  },
  {
    "city1": 26,
    "city2": 3,
    "distance": 630
  },
  {
    "city1": 26,
    "city2": 4,
    "distance": 840
  },
  {
    "city1": 26,
    "city2": 5,
    "distance": 650
  },
  {
    "city1": 26,
    "city2": 6,
    "distance": 830
  },
  {
    "city1": 26,
    "city2": 7,
    "distance": 840
  },
  {
    "city1": 26,
    "city2": 8,
    "distance": 960
  },
  {
    "city1": 26,
    "city2": 9,
    "distance": 620
  },
  {
    "city1": 26,
    "city2": 10,
    "distance": 1200
  },
  {
    "city1": 26,
    "city2": 11,
    "distance": 1300
  },
  {
    "city1": 26,
    "city2": 12,
    "distance": 1100
  },
  {
    "city1": 26,
    "city2": 13,
    "distance": 1100
  },
  {
    "city1": 26,
    "city2": 14,
    "distance": 1000
  },
  {
    "city1": 26,
    "city2": 15,
    "distance": 1100
  },
  {
    "city1": 26,
    "city2": 16,
    "distance": 1300
  },
  {
    "city1": 26,
    "city2": 17,
    "distance": 1100
  },
  {
    "city1": 26,
    "city2": 18,
    "distance": 700
  },
  {
    "city1": 26,
    "city2": 19,
    "distance": 810
  },
  {
    "city1": 26,
    "city2": 20,
    "distance": 650
  },
  {
    "city1": 26,
    "city2": 21,
    "distance": 730
  },
  {
    "city1": 26,
    "city2": 22,
    "distance": 1400
  },
  {
    "city1": 26,
    "city2": 23,
    "distance": 1300
  },
  {
    "city1": 26,
    "city2": 24,
    "distance": 1200
  },
  {
    "city1": 26,
    "city2": 25,
    "distance": 1200
  },
  {
    "city1": 27,
    "city2": 0,
    "distance": 440
  },
  {
    "city1": 27,
    "city2": 1,
    "distance": 800
  },
  {
    "city1": 27,
    "city2": 2,
    "distance": 140
  },
  {
    "city1": 27,
    "city2": 3,
    "distance": 590
  },
  {
    "city1": 27,
    "city2": 4,
    "distance": 800
  },
  {
    "city1": 27,
    "city2": 5,
    "distance": 670
  },
  {
    "city1": 27,
    "city2": 6,
    "distance": 850
  },
  {
    "city1": 27,
    "city2": 7,
    "distance": 860
  },
  {
    "city1": 27,
    "city2": 8,
    "distance": 980
  },
  {
    "city1": 27,
    "city2": 9,
    "distance": 640
  },
  {
    "city1": 27,
    "city2": 10,
    "distance": 1200
  },
  {
    "city1": 27,
    "city2": 11,
    "distance": 1300
  },
  {
    "city1": 27,
    "city2": 12,
    "distance": 1100
  },
  {
    "city1": 27,
    "city2": 13,
    "distance": 1100
  },
  {
    "city1": 27,
    "city2": 14,
    "distance": 1000
  },
  {
    "city1": 27,
    "city2": 15,
    "distance": 1100
  },
  {
    "city1": 27,
    "city2": 16,
    "distance": 1300
  },
  {
    "city1": 27,
    "city2": 17,
    "distance": 1100
  },
  {
    "city1": 27,
    "city2": 18,
    "distance": 720
  },
  {
    "city1": 27,
    "city2": 19,
    "distance": 830
  },
  {
    "city1": 27,
    "city2": 20,
    "distance": 670
  },
  {
    "city1": 27,
    "city2": 21,
    "distance": 750
  },
  {
    "city1": 27,
    "city2": 22,
    "distance": 1400
  },
  {
    "city1": 27,
    "city2": 23,
    "distance": 1300
  },
  {
    "city1": 27,
    "city2": 24,
    "distance": 1200
  },
  {
    "city1": 27,
    "city2": 25,
    "distance": 1200
  },
  {
    "city1": 27,
    "city2": 26,
    "distance": 60
  },
  {
    "city1": 28,
    "city2": 0,
    "distance": 460
  },
  {
    "city1": 28,
    "city2": 1,
    "distance": 810
  },
  {
    "city1": 28,
    "city2": 2,
    "distance": 100
  },
  {
    "city1": 28,
    "city2": 3,
    "distance": 600
  },
  {
    "city1": 28,
    "city2": 4,
    "distance": 820
  },
  {
    "city1": 28,
    "city2": 5,
    "distance": 650
  },
  {
    "city1": 28,
    "city2": 6,
    "distance": 830
  },
  {
    "city1": 28,
    "city2": 7,
    "distance": 840
  },
  {
    "city1": 28,
    "city2": 8,
    "distance": 960
  },
  {
    "city1": 28,
    "city2": 9,
    "distance": 620
  },
  {
    "city1": 28,
    "city2": 10,
    "distance": 1200
  },
  {
    "city1": 28,
    "city2": 11,
    "distance": 1300
  },
  {
    "city1": 28,
    "city2": 12,
    "distance": 1100
  },
  {
    "city1": 28,
    "city2": 13,
    "distance": 1100
  },
  {
    "city1": 28,
    "city2": 14,
    "distance": 1000
  },
  {
    "city1": 28,
    "city2": 15,
    "distance": 1100
  },
  {
    "city1": 28,
    "city2": 16,
    "distance": 1300
  },
  {
    "city1": 28,
    "city2": 17,
    "distance": 1100
  },
  {
    "city1": 28,
    "city2": 18,
    "distance": 700
  },
  {
    "city1": 28,
    "city2": 19,
    "distance": 810
  },
  {
    "city1": 28,
    "city2": 20,
    "distance": 650
  },
  {
    "city1": 28,
    "city2": 21,
    "distance": 730
  },
  {
    "city1": 28,
    "city2": 22,
    "distance": 1400
  },
  {
    "city1": 28,
    "city2": 23,
    "distance": 1300
  },
  {
    "city1": 28,
    "city2": 24,
    "distance": 1200
  },
  {
    "city1": 28,
    "city2": 25,
    "distance": 1200
  },
  {
    "city1": 28,
    "city2": 26,
    "distance": 40
  },
  {
    "city1": 28,
    "city2": 27,
    "distance": 80
  },
  {
    "city1": 29,
    "city2": 0,
    "distance": 520
  },
  {
    "city1": 29,
    "city2": 1,
    "distance": 890
  },
  {
    "city1": 29,
    "city2": 2,
    "distance": 240
  },
  {
    "city1": 29,
    "city2": 3,
    "distance": 680
  },
  {
    "city1": 29,
    "city2": 4,
    "distance": 890
  },
  {
    "city1": 29,
    "city2": 5,
    "distance": 490
  },
  {
    "city1": 29,
    "city2": 6,
    "distance": 750
  },
  {
    "city1": 29,
    "city2": 7,
    "distance": 760
  },
  {
    "city1": 29,
    "city2": 8,
    "distance": 880
  },
  {
    "city1": 29,
    "city2": 9,
    "distance": 540
  },
  {
    "city1": 29,
    "city2": 10,
    "distance": 1100
  },
  {
    "city1": 29,
    "city2": 11,
    "distance": 1200
  },
  {
    "city1": 29,
    "city2": 12,
    "distance": 1000
  },
  {
    "city1": 29,
    "city2": 13,
    "distance": 1000
  },
  {
    "city1": 29,
    "city2": 14,
    "distance": 900
  },
  {
    "city1": 29,
    "city2": 15,
    "distance": 1000
  },
  {
    "city1": 29,
    "city2": 16,
    "distance": 1200
  },
  {
    "city1": 29,
    "city2": 17,
    "distance": 1000
  },
  {
    "city1": 29,
    "city2": 18,
    "distance": 670
  },
  {
    "city1": 29,
    "city2": 19,
    "distance": 780
  },
  {
    "city1": 29,
    "city2": 20,
    "distance": 620
  },
  {
    "city1": 29,
    "city2": 21,
    "distance": 700
  },
  {
    "city1": 29,
    "city2": 22,
    "distance": 1300
  },
  {
    "city1": 29,
    "city2": 23,
    "distance": 1200
  },
  {
    "city1": 29,
    "city2": 24,
    "distance": 1100
  },
  {
    "city1": 29,
    "city2": 25,
    "distance": 1100
  },
  {
    "city1": 29,
    "city2": 26,
    "distance": 160
  },
  {
    "city1": 29,
    "city2": 27,
    "distance": 120
  },
  {
    "city1": 29,
    "city2": 28,
    "distance": 140
  },
  {
    "city1": 30,
    "city2": 0,
    "distance": 540
  },
  {
    "city1": 30,
    "city2": 1,
    "distance": 920
  },
  {
    "city1": 30,
    "city2": 2,
    "distance": 270
  },
  {
    "city1": 30,
    "city2": 3,
    "distance": 710
  },
  {
    "city1": 30,
    "city2": 4,
    "distance": 910
  },
  {
    "city1": 30,
    "city2": 5,
    "distance": 470
  },
  {
    "city1": 30,
    "city2": 6,
    "distance": 730
  },
  {
    "city1": 30,
    "city2": 7,
    "distance": 740
  },
  {
    "city1": 30,
    "city2": 8,
    "distance": 860
  },
  {
    "city1": 30,
    "city2": 9,
    "distance": 520
  },
  {
    "city1": 30,
    "city2": 10,
    "distance": 1100
  },
  {
    "city1": 30,
    "city2": 11,
    "distance": 1200
  },
  {
    "city1": 30,
    "city2": 12,
    "distance": 1000
  },
  {
    "city1": 30,
    "city2": 13,
    "distance": 1000
  },
  {
    "city1": 30,
    "city2": 14,
    "distance": 880
  },
  {
    "city1": 30,
    "city2": 15,
    "distance": 980
  },
  {
    "city1": 30,
    "city2": 16,
    "distance": 1200
  },
  {
    "city1": 30,
    "city2": 17,
    "distance": 980
  },
  {
    "city1": 30,
    "city2": 18,
    "distance": 690
  },
  {
    "city1": 30,
    "city2": 19,
    "distance": 800
  },
  {
    "city1": 30,
    "city2": 20,
    "distance": 640
  },
  {
    "city1": 30,
    "city2": 21,
    "distance": 720
  },
  {
    "city1": 30,
    "city2": 22,
    "distance": 1300
  },
  {
    "city1": 30,
    "city2": 23,
    "distance": 1200
  },
  {
    "city1": 30,
    "city2": 24,
    "distance": 1100
  },
  {
    "city1": 30,
    "city2": 25,
    "distance": 1100
  },
  {
    "city1": 30,
    "city2": 26,
    "distance": 190
  },
  {
    "city1": 30,
    "city2": 27,
    "distance": 150
  },
  {
    "city1": 30,
    "city2": 28,
    "distance": 170
  },
  {
    "city1": 30,
    "city2": 29,
    "distance": 30
  },
  {
    "city1": 31,
    "city2": 0,
    "distance": 350
  },
  {
    "city1": 31,
    "city2": 1,
    "distance": 810
  },
  {
    "city1": 31,
    "city2": 2,
    "distance": 260
  },
  {
    "city1": 31,
    "city2": 3,
    "distance": 630
  },
  {
    "city1": 31,
    "city2": 4,
    "distance": 750
  },
  {
    "city1": 31,
    "city2": 5,
    "distance": 580
  },
  {
    "city1": 31,
    "city2": 6,
    "distance": 670
  },
  {
    "city1": 31,
    "city2": 7,
    "distance": 680
  },
  {
    "city1": 31,
    "city2": 8,
    "distance": 800
  },
  {
    "city1": 31,
    "city2": 9,
    "distance": 460
  },
  {
    "city1": 31,
    "city2": 10,
    "distance": 950
  },
  {
    "city1": 31,
    "city2": 11,
    "distance": 1050
  },
  {
    "city1": 31,
    "city2": 12,
    "distance": 850
  },
  {
    "city1": 31,
    "city2": 13,
    "distance": 850
  },
  {
    "city1": 31,
    "city2": 14,
    "distance": 730
  },
  {
    "city1": 31,
    "city2": 15,
    "distance": 830
  },
  {
    "city1": 31,
    "city2": 16,
    "distance": 1050
  },
  {
    "city1": 31,
    "city2": 17,
    "distance": 830
  },
  {
    "city1": 31,
    "city2": 18,
    "distance": 500
  },
  {
    "city1": 31,
    "city2": 19,
    "distance": 640
  },
  {
    "city1": 31,
    "city2": 20,
    "distance": 480
  },
  {
    "city1": 31,
    "city2": 21,
    "distance": 560
  },
  {
    "city1": 31,
    "city2": 22,
    "distance": 1150
  },
  {
    "city1": 31,
    "city2": 23,
    "distance": 1050
  },
  {
    "city1": 31,
    "city2": 24,
    "distance": 950
  },
  {
    "city1": 31,
    "city2": 25,
    "distance": 950
  },
  {
    "city1": 31,
    "city2": 26,
    "distance": 280
  },
  {
    "city1": 31,
    "city2": 27,
    "distance": 240
  },
  {
    "city1": 31,
    "city2": 28,
    "distance": 260
  },
  {
    "city1": 31,
    "city2": 29,
    "distance": 120
  },
  {
    "city1": 31,
    "city2": 30,
    "distance": 140
  },
  {
    "city1": 32,
    "city2": 0,
    "distance": 220
  },
  {
    "city1": 32,
    "city2": 1,
    "distance": 800
  },
  {
    "city1": 32,
    "city2": 2,
    "distance": 290
  },
  {
    "city1": 32,
    "city2": 3,
    "distance": 620
  },
  {
    "city1": 32,
    "city2": 4,
    "distance": 640
  },
  {
    "city1": 32,
    "city2": 5,
    "distance": 690
  },
  {
    "city1": 32,
    "city2": 6,
    "distance": 580
  },
  {
    "city1": 32,
    "city2": 7,
    "distance": 590
  },
  {
    "city1": 32,
    "city2": 8,
    "distance": 710
  },
  {
    "city1": 32,
    "city2": 9,
    "distance": 370
  },
  {
    "city1": 32,
    "city2": 10,
    "distance": 860
  },
  {
    "city1": 32,
    "city2": 11,
    "distance": 960
  },
  {
    "city1": 32,
    "city2": 12,
    "distance": 760
  },
  {
    "city1": 32,
    "city2": 13,
    "distance": 760
  },
  {
    "city1": 32,
    "city2": 14,
    "distance": 640
  },
  {
    "city1": 32,
    "city2": 15,
    "distance": 740
  },
  {
    "city1": 32,
    "city2": 16,
    "distance": 960
  },
  {
    "city1": 32,
    "city2": 17,
    "distance": 740
  },
  {
    "city1": 32,
    "city2": 18,
    "distance": 370
  },
  {
    "city1": 32,
    "city2": 19,
    "distance": 530
  },
  {
    "city1": 32,
    "city2": 20,
    "distance": 350
  },
  {
    "city1": 32,
    "city2": 21,
    "distance": 450
  },
  {
    "city1": 32,
    "city2": 22,
    "distance": 1060
  },
  {
    "city1": 32,
    "city2": 23,
    "distance": 960
  },
  {
    "city1": 32,
    "city2": 24,
    "distance": 860
  },
  {
    "city1": 32,
    "city2": 25,
    "distance": 860
  },
  {
    "city1": 32,
    "city2": 26,
    "distance": 410
  },
  {
    "city1": 32,
    "city2": 27,
    "distance": 370
  },
  {
    "city1": 32,
    "city2": 28,
    "distance": 390
  },
  {
    "city1": 32,
    "city2": 29,
    "distance": 250
  },
  {
    "city1": 32,
    "city2": 30,
    "distance": 270
  },
  {
    "city1": 32,
    "city2": 31,
    "distance": 130
  },
  {
    "city1": 33,
    "city2": 0,
    "distance": 780
  },
  {
    "city1": 33,
    "city2": 1,
    "distance": 1600
  },
  {
    "city1": 33,
    "city2": 2,
    "distance": 1100
  },
  {
    "city1": 33,
    "city2": 3,
    "distance": 1400
  },
  {
    "city1": 33,
    "city2": 4,
    "distance": 1000
  },
  {
    "city1": 33,
    "city2": 5,
    "distance": 900
  },
  {
    "city1": 33,
    "city2": 6,
    "distance": 650
  },
  {
    "city1": 33,
    "city2": 7,
    "distance": 550
  },
  {
    "city1": 33,
    "city2": 8,
    "distance": 450
  },
  {
    "city1": 33,
    "city2": 9,
    "distance": 700
  },
  {
    "city1": 33,
    "city2": 10,
    "distance": 800
  },
  {
    "city1": 33,
    "city2": 11,
    "distance": 1000
  },
  {
    "city1": 33,
    "city2": 12,
    "distance": 900
  },
  {
    "city1": 33,
    "city2": 13,
    "distance": 700
  },
  {
    "city1": 33,
    "city2": 14,
    "distance": 500
  },
  {
    "city1": 33,
    "city2": 15,
    "distance": 400
  },
  {
    "city1": 33,
    "city2": 16,
    "distance": 200
  },
  {
    "city1": 33,
    "city2": 17,
    "distance": 400
  },
  {
    "city1": 33,
    "city2": 18,
    "distance": 900
  },
  {
    "city1": 33,
    "city2": 19,
    "distance": 1200
  },
  {
    "city1": 33,
    "city2": 20,
    "distance": 900
  },
  {
    "city1": 33,
    "city2": 21,
    "distance": 1000
  },
  {
    "city1": 33,
    "city2": 22,
    "distance": 400
  },
  {
    "city1": 33,
    "city2": 23,
    "distance": 600
  },
  {
    "city1": 33,
    "city2": 24,
    "distance": 350
  },
  {
    "city1": 33,
    "city2": 25,
    "distance": 250
  },
  {
    "city1": 33,
    "city2": 26,
    "distance": 1200
  },
  {
    "city1": 33,
    "city2": 27,
    "distance": 1200
  },
  {
    "city1": 33,
    "city2": 28,
    "distance": 1200
  },
  {
    "city1": 33,
    "city2": 29,
    "distance": 1100
  },
  {
    "city1": 33,
    "city2": 30,
    "distance": 1100
  },
  {
    "city1": 33,
    "city2": 31,
    "distance": 950
  },
  {
    "city1": 33,
    "city2": 32,
    "distance": 860
  },
  {
    "city1": 34,
    "city2": 0,
    "distance": 940
  },
  {
    "city1": 34,
    "city2": 1,
    "distance": 1800
  },
  {
    "city1": 34,
    "city2": 2,
    "distance": 1200
  },
  {
    "city1": 34,
    "city2": 3,
    "distance": 1600
  },
  {
    "city1": 34,
    "city2": 4,
    "distance": 1200
  },
  {
    "city1": 34,
    "city2": 5,
    "distance": 1100
  },
  {
    "city1": 34,
    "city2": 6,
    "distance": 850
  },
  {
    "city1": 34,
    "city2": 7,
    "distance": 750
  },
  {
    "city1": 34,
    "city2": 8,
    "distance": 650
  },
  {
    "city1": 34,
    "city2": 9,
    "distance": 900
  },
  {
    "city1": 34,
    "city2": 10,
    "distance": 1000
  },
  {
    "city1": 34,
    "city2": 11,
    "distance": 1200
  },
  {
    "city1": 34,
    "city2": 12,
    "distance": 1100
  },
  {
    "city1": 34,
    "city2": 13,
    "distance": 900
  },
  {
    "city1": 34,
    "city2": 14,
    "distance": 700
  },
  {
    "city1": 34,
    "city2": 15,
    "distance": 600
  },
  {
    "city1": 34,
    "city2": 16,
    "distance": 400
  },
  {
    "city1": 34,
    "city2": 17,
    "distance": 600
  },
  {
    "city1": 34,
    "city2": 18,
    "distance": 1100
  },
  {
    "city1": 34,
    "city2": 19,
    "distance": 1400
  },
  {
    "city1": 34,
    "city2": 20,
    "distance": 1100
  },
  {
    "city1": 34,
    "city2": 21,
    "distance": 1200
  },
  {
    "city1": 34,
    "city2": 22,
    "distance": 200
  },
  {
    "city1": 34,
    "city2": 23,
    "distance": 400
  },
  {
    "city1": 34,
    "city2": 24,
    "distance": 150
  },
  {
    "city1": 34,
    "city2": 25,
    "distance": 50
  },
  {
    "city1": 34,
    "city2": 26,
    "distance": 1400
  },
  {
    "city1": 34,
    "city2": 27,
    "distance": 1400
  },
  {
    "city1": 34,
    "city2": 28,
    "distance": 1400
  },
  {
    "city1": 34,
    "city2": 29,
    "distance": 1300
  },
  {
    "city1": 34,
    "city2": 30,
    "distance": 1300
  },
  {
    "city1": 34,
    "city2": 31,
    "distance": 1150
  },
  {
    "city1": 34,
    "city2": 32,
    "distance": 1060
  },
  {
    "city1": 34,
    "city2": 33,
    "distance": 200
  },
  {
    "city1": 35,
    "city2": 0,
    "distance": 1200
  },
  {
    "city1": 35,
    "city2": 1,
    "distance": 2000
  },
  {
    "city1": 35,
    "city2": 2,
    "distance": 1500
  },
  {
    "city1": 35,
    "city2": 3,
    "distance": 1800
  },
  {
    "city1": 35,
    "city2": 4,
    "distance": 1400
  },
  {
    "city1": 35,
    "city2": 5,
    "distance": 1300
  },
  {
    "city1": 35,
    "city2": 6,
    "distance": 1050
  },
  {
    "city1": 35,
    "city2": 7,
    "distance": 950
  },
  {
    "city1": 35,
    "city2": 8,
    "distance": 850
  },
  {
    "city1": 35,
    "city2": 9,
    "distance": 1100
  },
  {
    "city1": 35,
    "city2": 10,
    "distance": 1200
  },
  {
    "city1": 35,
    "city2": 11,
    "distance": 1400
  },
  {
    "city1": 35,
    "city2": 12,
    "distance": 1300
  },
  {
    "city1": 35,
    "city2": 13,
    "distance": 1100
  },
  {
    "city1": 35,
    "city2": 14,
    "distance": 900
  },
  {
    "city1": 35,
    "city2": 15,
    "distance": 800
  },
  {
    "city1": 35,
    "city2": 16,
    "distance": 600
  },
  {
    "city1": 35,
    "city2": 17,
    "distance": 800
  },
  {
    "city1": 35,
    "city2": 18,
    "distance": 1300
  },
  {
    "city1": 35,
    "city2": 19,
    "distance": 1600
  },
  {
    "city1": 35,
    "city2": 20,
    "distance": 1300
  },
  {
    "city1": 35,
    "city2": 21,
    "distance": 1400
  },
  {
    "city1": 35,
    "city2": 22,
    "distance": 400
  },
  {
    "city1": 35,
    "city2": 23,
    "distance": 600
  },
  {
    "city1": 35,
    "city2": 24,
    "distance": 350
  },
  {
    "city1": 35,
    "city2": 25,
    "distance": 250
  },
  {
    "city1": 35,
    "city2": 26,
    "distance": 1600
  },
  {
    "city1": 35,
    "city2": 27,
    "distance": 1600
  },
  {
    "city1": 35,
    "city2": 28,
    "distance": 1600
  },
  {
    "city1": 35,
    "city2": 29,
    "distance": 1500
  },
  {
    "city1": 35,
    "city2": 30,
    "distance": 1500
  },
  {
    "city1": 35,
    "city2": 31,
    "distance": 1350
  },
  {
    "city1": 35,
    "city2": 32,
    "distance": 1260
  },
  {
    "city1": 35,
    "city2": 33,
    "distance": 400
  },
  {
    "city1": 35,
    "city2": 34,
    "distance": 200
  },
  {
    "city1": 36,
    "city2": 0,
    "distance": 1100
  },
  {
    "city1": 36,
    "city2": 1,
    "distance": 1900
  },
  {
    "city1": 36,
    "city2": 2,
    "distance": 1400
  },
  {
    "city1": 36,
    "city2": 3,
    "distance": 1700
  },
  {
    "city1": 36,
    "city2": 4,
    "distance": 1300
  },
  {
    "city1": 36,
    "city2": 5,
    "distance": 1200
  },
  {
    "city1": 36,
    "city2": 6,
    "distance": 950
  },
  {
    "city1": 36,
    "city2": 7,
    "distance": 850
  },
  {
    "city1": 36,
    "city2": 8,
    "distance": 750
  },
  {
    "city1": 36,
    "city2": 9,
    "distance": 1000
  },
  {
    "city1": 36,
    "city2": 10,
    "distance": 1100
  },
  {
    "city1": 36,
    "city2": 11,
    "distance": 1300
  },
  {
    "city1": 36,
    "city2": 12,
    "distance": 1200
  },
  {
    "city1": 36,
    "city2": 13,
    "distance": 1000
  },
  {
    "city1": 36,
    "city2": 14,
    "distance": 800
  },
  {
    "city1": 36,
    "city2": 15,
    "distance": 700
  },
  {
    "city1": 36,
    "city2": 16,
    "distance": 500
  },
  {
    "city1": 36,
    "city2": 17,
    "distance": 700
  },
  {
    "city1": 36,
    "city2": 18,
    "distance": 1200
  },
  {
    "city1": 36,
    "city2": 19,
    "distance": 1500
  },
  {
    "city1": 36,
    "city2": 20,
    "distance": 1200
  },
  {
    "city1": 36,
    "city2": 21,
    "distance": 1300
  },
  {
    "city1": 36,
    "city2": 22,
    "distance": 300
  },
  {
    "city1": 36,
    "city2": 23,
    "distance": 500
  },
  {
    "city1": 36,
    "city2": 24,
    "distance": 250
  },
  {
    "city1": 36,
    "city2": 25,
    "distance": 150
  },
  {
    "city1": 36,
    "city2": 26,
    "distance": 1500
  },
  {
    "city1": 36,
    "city2": 27,
    "distance": 1500
  },
  {
    "city1": 36,
    "city2": 28,
    "distance": 1500
  },
  {
    "city1": 36,
    "city2": 29,
    "distance": 1400
  },
  {
    "city1": 36,
    "city2": 30,
    "distance": 1400
  },
  {
    "city1": 36,
    "city2": 31,
    "distance": 1250
  },
  {
    "city1": 36,
    "city2": 32,
    "distance": 1160
  },
  {
    "city1": 36,
    "city2": 33,
    "distance": 300
  },
  {
    "city1": 36,
    "city2": 34,
    "distance": 100
  },
  {
    "city1": 36,
    "city2": 35,
    "distance": 300
  },
  {
    "city1": 37,
    "city2": 0,
    "distance": 990
  },
  {
    "city1": 37,
    "city2": 1,
    "distance": 1700
  },
  {
    "city1": 37,
    "city2": 2,
    "distance": 1300
  },
  {
    "city1": 37,
    "city2": 3,
    "distance": 1600
  },
  {
    "city1": 37,
    "city2": 4,
    "distance": 1100
  },
  {
    "city1": 37,
    "city2": 5,
    "distance": 1100
  },
  {
    "city1": 37,
    "city2": 6,
    "distance": 850
  },
  {
    "city1": 37,
    "city2": 7,
    "distance": 750
  },
  {
    "city1": 37,
    "city2": 8,
    "distance": 650
  },
  {
    "city1": 37,
    "city2": 9,
    "distance": 900
  },
  {
    "city1": 37,
    "city2": 10,
    "distance": 900
  },
  {
    "city1": 37,
    "city2": 11,
    "distance": 1100
  },
  {
    "city1": 37,
    "city2": 12,
    "distance": 1000
  },
  {
    "city1": 37,
    "city2": 13,
    "distance": 800
  },
  {
    "city1": 37,
    "city2": 14,
    "distance": 600
  },
  {
    "city1": 37,
    "city2": 15,
    "distance": 500
  },
  {
    "city1": 37,
    "city2": 16,
    "distance": 300
  },
  {
    "city1": 37,
    "city2": 17,
    "distance": 500
  },
  {
    "city1": 37,
    "city2": 18,
    "distance": 1100
  },
  {
    "city1": 37,
    "city2": 19,
    "distance": 1400
  },
  {
    "city1": 37,
    "city2": 20,
    "distance": 1100
  },
  {
    "city1": 37,
    "city2": 21,
    "distance": 1200
  },
  {
    "city1": 37,
    "city2": 22,
    "distance": 500
  },
  {
    "city1": 37,
    "city2": 23,
    "distance": 700
  },
  {
    "city1": 37,
    "city2": 24,
    "distance": 450
  },
  {
    "city1": 37,
    "city2": 25,
    "distance": 350
  },
  {
    "city1": 37,
    "city2": 26,
    "distance": 1400
  },
  {
    "city1": 37,
    "city2": 27,
    "distance": 1400
  },
  {
    "city1": 37,
    "city2": 28,
    "distance": 1400
  },
  {
    "city1": 37,
    "city2": 29,
    "distance": 1300
  },
  {
    "city1": 37,
    "city2": 30,
    "distance": 1300
  },
  {
    "city1": 37,
    "city2": 31,
    "distance": 1150
  },
  {
    "city1": 37,
    "city2": 32,
    "distance": 1060
  },
  {
    "city1": 37,
    "city2": 33,
    "distance": 100
  },
  {
    "city1": 37,
    "city2": 34,
    "distance": 300
  },
  {
    "city1": 37,
    "city2": 35,
    "distance": 500
  },
  {
    "city1": 37,
    "city2": 36,
    "distance": 400
  },
  {
    "city1": 38,
    "city2": 0,
    "distance": 810
  },
  {
    "city1": 38,
    "city2": 1,
    "distance": 1400
  },
  {
    "city1": 38,
    "city2": 2,
    "distance": 1100
  },
  {
    "city1": 38,
    "city2": 3,
    "distance": 1300
  },
  {
    "city1": 38,
    "city2": 4,
    "distance": 740
  },
  {
    "city1": 38,
    "city2": 5,
    "distance": 900
  },
  {
    "city1": 38,
    "city2": 6,
    "distance": 650
  },
  {
    "city1": 38,
    "city2": 7,
    "distance": 550
  },
  {
    "city1": 38,
    "city2": 8,
    "distance": 450
  },
  {
    "city1": 38,
    "city2": 9,
    "distance": 700
  },
  {
    "city1": 38,
    "city2": 10,
    "distance": 600
  },
  {
    "city1": 38,
    "city2": 11,
    "distance": 800
  },
  {
    "city1": 38,
    "city2": 12,
    "distance": 700
  },
  {
    "city1": 38,
    "city2": 13,
    "distance": 500
  },
  {
    "city1": 38,
    "city2": 14,
    "distance": 300
  },
  {
    "city1": 38,
    "city2": 15,
    "distance": 200
  },
  {
    "city1": 38,
    "city2": 16,
    "distance": 100
  },
  {
    "city1": 38,
    "city2": 17,
    "distance": 300
  },
  {
    "city1": 38,
    "city2": 18,
    "distance": 900
  },
  {
    "city1": 38,
    "city2": 19,
    "distance": 1200
  },
  {
    "city1": 38,
    "city2": 20,
    "distance": 900
  },
  {
    "city1": 38,
    "city2": 21,
    "distance": 1000
  },
  {
    "city1": 38,
    "city2": 22,
    "distance": 700
  },
  {
    "city1": 38,
    "city2": 23,
    "distance": 900
  },
  {
    "city1": 38,
    "city2": 24,
    "distance": 650
  },
  {
    "city1": 38,
    "city2": 25,
    "distance": 550
  },
  {
    "city1": 38,
    "city2": 26,
    "distance": 1200
  },
  {
    "city1": 38,
    "city2": 27,
    "distance": 1200
  },
  {
    "city1": 38,
    "city2": 28,
    "distance": 1200
  },
  {
    "city1": 38,
    "city2": 29,
    "distance": 1100
  },
  {
    "city1": 38,
    "city2": 30,
    "distance": 1100
  },
  {
    "city1": 38,
    "city2": 31,
    "distance": 950
  },
  {
    "city1": 38,
    "city2": 32,
    "distance": 860
  },
  {
    "city1": 38,
    "city2": 33,
    "distance": 300
  },
  {
    "city1": 38,
    "city2": 34,
    "distance": 500
  },
  {
    "city1": 38,
    "city2": 35,
    "distance": 700
  },
  {
    "city1": 38,
    "city2": 36,
    "distance": 600
  },
  {
    "city1": 38,
    "city2": 37,
    "distance": 200
  }
];
