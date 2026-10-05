/**
 * Farm Vet India — product catalog
 * Source: https://www.indiamart.com/farmvetindia/
 *
 * Notes:
 * - `thumbnailImage` is the original IndiaMART CDN thumbnail (125x125).
 * - `imageHighResGuess` swaps the size suffix for a larger one (e.g. 500x500 / 1000x1000).
 *   This is a commonly-working pattern on IndiaMART's imimg.com CDN, but it is NOT guaranteed
 *   for every image — verify in a browser before relying on it. It could not be verified from
 *   this environment because imimg.com is not reachable on this sandbox's network.
 * - Fields are `null` where the source page did not expose that data (some category-listing
 *   entries have no price, image, or product URL).
 */

const farmVetIndiaProducts = [
  {
    id: "2857963393033",
    name: "Milk Booster 25 kg",
    category: "Animal Nutraceuticals Supplements",
    price: 2850,
    priceUnit: "Pack",
    specs: { packagingSize: "25 kg" },
    description:
      "Premium mineral mixture that improves cow health, boosts milk yield, enhances fat & SNF, supports digestion, and gives visible results within days.",
    productUrl: "https://m.indiamart.com/proddetail/milk-booster-25-kg-2857963393033.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/11/561828945/GJ/LF/KI/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/11/561828945/GJ/LF/KI/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857543960388",
    name: "Milk Booster 1kg",
    category: "Animal Nutraceuticals Supplements",
    price: 90,
    priceUnit: "Kg",
    specs: { packagingSize: "1 Kg", packagingType: "Pack" },
    description:
      "Specially formulated mineral mixture for cows and buffaloes. Helps increase milk production, provide energy, improve immunity, and enhance reproductive health. Usage: mix 50g...",
    productUrl: "https://m.indiamart.com/proddetail/milk-booster-1kg-2857543960388.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545820526/DH/ZY/CJ/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545820526/DH/ZY/CJ/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857543967955",
    name: "Milk Booster 5kg",
    category: "Animal Nutraceuticals Supplements",
    price: 599,
    priceUnit: "Pack",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/milk-booster-5kg-2857543967955.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545820950/QC/FG/AE/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545820950/QC/FG/AE/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857543970588",
    name: "Milk Booster 25 Kg",
    category: "Animal Nutraceuticals Supplements",
    price: 2000,
    priceUnit: "Kg",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/milk-booster-25-kg-2857543970588.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821131/EH/HN/LT/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821131/EH/HN/LT/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2858397639397",
    name: "Milk Booster",
    category: "Animal Nutraceuticals Supplements",
    price: 2800,
    priceUnit: "Pack",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/milk-booster-2858397639397.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573407427/SY/HP/OY/251009785/product-jpeg-125x125.jpg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573407427/SY/HP/OY/251009785/product-jpeg-1000x1000.jpg",
  },
  {
    id: "2857543985062",
    name: "Farm Vet Advance Calcium 1ltr",
    category: "Calcium Supplements",
    price: 110,
    priceUnit: "Kg",
    specs: null,
    description:
      "High-quality calcium supplement (liquid) for cows and buffaloes that supports bone strength, milk production, and overall health. Helps prevent calcium deficiency, boosts energy, and improves immunity. Usage: give 50–100 ml...",
    productUrl: "https://m.indiamart.com/proddetail/farm-vet-advance-calcium-1ltr-2857543985062.html",
    thumbnailImage: null,
    imageHighResGuess: null,
  },
  {
    id: "2857478029155",
    name: "Animal Feed Supplement",
    category: "Animal Feed Supplement",
    price: 1500,
    priceUnit: "Kg",
    specs: { packagingSize: "5 L", form: "Liquid", packagingType: "Bottle" },
    description:
      "Farm Liv Strong Liver Tonic — a powerful liver tonic for cows and buffaloes that supports liver function, improves digestion, and boosts overall health. Helps detoxify the liver, enhance appetite, and increase energy levels.",
    productUrl: "https://m.indiamart.com/proddetail/animal-feed-supplement-2857478029155.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545824333/YK/ZT/OM/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545824333/YK/ZT/OM/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857543977597",
    name: "Farm Liv Strong 1ltr",
    category: "Allopathic Liver Tonic",
    price: 110,
    priceUnit: "Bottle",
    specs: { packagingSize: "1000ml" },
    description:
      "Farm Liv Strong Liver Tonic — a powerful liver tonic for cows and buffaloes that supports liver function, improves digestion, and boosts overall health. Helps detoxify the liver, enhance appetite, and increase energy levels.",
    productUrl: "https://m.indiamart.com/proddetail/farm-liv-strong-1ltr-2857543977597.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821522/TF/TL/PS/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821522/TF/TL/PS/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2858397801412",
    name: "Farm Liv Strong 5ltr",
    category: "Allopathic Liver Tonic",
    price: 500,
    priceUnit: "Bottle",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/farm-liv-strong-5ltr-2858397801412.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573415975/FS/GG/TR/251009785/product-jpeg-125x125.jpg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573415975/FS/GG/TR/251009785/product-jpeg-1000x1000.jpg",
  },
  {
    id: "2857543981048",
    name: "Farm Liv Strong 5ltr",
    category: "Allopathic Liver Tonic",
    price: 600,
    priceUnit: "Bottle",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/farm-liv-strong-5ltr-2857543981048.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821723/TE/XV/RL/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821723/TE/XV/RL/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: null,
    name: "My Cotoxin Binder 25kg",
    category: "Allopathic Liver Tonic",
    price: null,
    priceUnit: null,
    specs: null,
    description: null,
    productUrl: null,
    thumbnailImage: null,
    imageHighResGuess: null,
  },
  {
    id: "2857543990330",
    name: "Calci Pro Gel 300ml",
    category: "Calcium Supplements",
    price: 100,
    priceUnit: "Bottle",
    specs: { form: "Liquid", calciumForm: "Calcium Carbonate" },
    description:
      "Calci Pro Gel — a fast-acting calcium supplement for cows and buffaloes. Helps quickly restore calcium levels, support bone health, and boost energy. Especially useful during high milk production.",
    productUrl: "https://m.indiamart.com/proddetail/calci-pro-gel-300ml-2857543990330.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545822427/IM/ZK/MK/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545822427/IM/ZK/MK/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857544028830",
    name: "Calci Pro Gel 300ml",
    category: "Calcium Supplements",
    price: 100,
    priceUnit: "Bottle",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/calci-pro-gel-300ml-2857544028830.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545824446/IT/KM/BE/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545824446/IT/KM/BE/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857544003112",
    name: "Calci Pro Gel 300ml",
    category: "Calcium Supplements",
    price: null,
    priceUnit: null,
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/calci-pro-gel-300ml-2857544003112.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545822946/AR/TU/PB/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545822946/AR/TU/PB/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: null,
    name: "Calci Pro Advance Gel",
    category: "Calcium Supplements",
    price: 100,
    priceUnit: "Bottle",
    specs: null,
    description: null,
    productUrl: null,
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/577626102/DG/OB/ZD/251009785/product-jpeg-125x125.jpg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/577626102/DG/OB/ZD/251009785/product-jpeg-1000x1000.jpg",
  },
  {
    id: "2858397552733",
    name: "Calci Pro Advance Gel 300ml",
    category: "Body Gel",
    price: 100,
    priceUnit: "Piece",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/calci-pro-advance-gel-300ml-2858397552733.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573402480/GO/QQ/FE/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573402480/GO/QQ/FE/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2858397525991",
    name: "Farm Vet H 1ltr",
    category: "Other Veterinary Injection",
    price: null,
    priceUnit: null,
    specs: { drugType: "Vitamin", packSize: "1 L" },
    description:
      "A liquid Vitamin-E (tocopherol) feed pack — supports overall animal health (source text partly in Hindi).",
    productUrl: "https://m.indiamart.com/proddetail/farm-vet-h-1ltr-2858397525991.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573401205/FR/EC/UJ/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573401205/FR/EC/UJ/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2858397581191",
    name: "Nutro Care Forte 1ltr",
    category: "Kidney Capsule",
    price: null,
    priceUnit: null,
    specs: { form: "Liquid", shelfLife: "36 months" },
    description:
      "Utrinic Tonic — a nutritional supplement that supports overall health by providing essential vitamins and minerals, boosts immunity, improves energy, and enhances vitality.",
    productUrl: "https://m.indiamart.com/proddetail/nutro-care-forte-1ltr-2858397581191.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573404058/LI/YP/KB/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573404058/LI/YP/KB/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857474996048",
    name: "Milk Booster Mineral Mixture",
    category: "Animal Feed Supplement",
    price: 2000,
    priceUnit: "Kg",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/milk-booster-mineral-mixture-2857474996048.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821333/HH/AV/ZZ/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545821333/HH/AV/ZZ/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857478102012",
    name: "Mineral Mixture",
    category: "Animal Feed Supplement",
    price: 100,
    priceUnit: "Kg",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/mineral-mixture-2857478102012.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545823857/JO/PT/SV/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545823857/JO/PT/SV/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857478102273",
    name: "Chelated Minerals",
    category: "Animal Feed Supplement",
    price: 90,
    priceUnit: "Kg",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/chelated-minerals-2857478102273.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545824210/II/BX/IL/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2025/9/545824210/II/BX/IL/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: null,
    name: "Liquid Animal Feed Supplements",
    category: "Animal Feed Supplement",
    price: null,
    priceUnit: null,
    specs: null,
    description: null,
    productUrl: null,
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573406174/CI/XS/CJ/251009785/product-jpeg-125x125.jpeg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573406174/CI/XS/CJ/251009785/product-jpeg-1000x1000.jpeg",
  },
  {
    id: "2857478029097",
    name: "Cattle Feed Additives",
    category: "Milk Feed Additive For Dairy Cattle",
    price: 2000,
    priceUnit: "Kg",
    specs: null,
    description: null,
    productUrl: "https://m.indiamart.com/proddetail/cattle-feed-additives-2857478029097.html",
    thumbnailImage:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573416465/VR/LU/JO/251009785/product-jpeg-125x125.jpg",
    imageHighResGuess:
      "https://5.imimg.com/data5/ANDROID/Default/2026/1/573416465/VR/LU/JO/251009785/product-jpeg-1000x1000.jpg",
  },
];

export default farmVetIndiaProducts;
