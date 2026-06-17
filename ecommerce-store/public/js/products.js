const sampleProducts = [
  // ─── FOOTWEAR (15 products) ───
  { _id:'f1', name:'Nike Air Max 270', description:'Breathable mesh upper with Max Air heel unit for all-day comfort.', price:8999, oldPrice:12999, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', rating:5, reviews:1284, badge:'sale', stock:10 },
  { _id:'f2', name:'Adidas Ultraboost 22', description:'Responsive Boost midsole with Primeknit upper for the perfect run.', price:10999, oldPrice:null, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop', rating:5, reviews:876, badge:'new', stock:8 },
  { _id:'f3', name:'Puma RS-X Sneakers', description:'Bold retro running design with thick sole for maximum street style.', price:5999, oldPrice:7999, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop', rating:4, reviews:432, badge:'sale', stock:15 },
  { _id:'f4', name:'Leather Loafers', description:'Classic leather loafers perfect for formal and smart-casual occasions.', price:3499, oldPrice:null, category:'Footwear', emoji:'👞', image:'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=400&fit=crop', rating:4, reviews:218, badge:null, stock:12 },
  { _id:'f5', name:'Converse All Star', description:'Iconic canvas sneaker that never goes out of style.', price:3999, oldPrice:4999, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&h=400&fit=crop', rating:5, reviews:2341, badge:'hot', stock:20 },
  { _id:'f6', name:'Sports Sandals', description:'Comfortable EVA sandals with arch support for everyday wear.', price:1299, oldPrice:null, category:'Footwear', emoji:'🩴', image:'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop', rating:4, reviews:156, badge:null, stock:25 },
  { _id:'f7', name:'New Balance 574', description:'Classic silhouette with ENCAP midsole technology for lasting comfort.', price:7499, oldPrice:9999, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop', rating:4, reviews:543, badge:'sale', stock:9 },
  { _id:'f8', name:'Vans Old Skool', description:'Iconic side stripe canvas sneaker, perfect for skateboarding and street wear.', price:4299, oldPrice:null, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop', rating:5, reviews:1876, badge:'trending', stock:18 },
  { _id:'f9', name:'Chelsea Boots', description:'Sleek elastic-sided ankle boots in premium suede. Office to evening.', price:5999, oldPrice:7499, category:'Footwear', emoji:'👢', image:'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&h=400&fit=crop', rating:4, reviews:321, badge:'sale', stock:7 },
  { _id:'f10', name:'Reebok Classic', description:'Timeless leather upper with die-cut EVA midsole for lightweight cushioning.', price:5499, oldPrice:null, category:'Footwear', emoji:'👟', image:'/images/download.jpg', rating:4, reviews:678, badge:'new', stock:14 },
  { _id:'f11', name:'Flip Flops Luxury', description:'Premium rubber flip flops with ergonomic footbed and grip sole.', price:899, oldPrice:1299, category:'Footwear', emoji:'🩴', image:'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop', rating:3, reviews:234, badge:'sale', stock:30 },
  { _id:'f12', name:'Oxford Dress Shoes', description:'Hand-stitched full-grain leather oxford shoes for formal occasions.', price:7999, oldPrice:null, category:'Footwear', emoji:'👞', image:'https://images.unsplash.com/photo-1614253429340-98120bd6d753?w=400&h=400&fit=crop', rating:5, reviews:412, badge:null, stock:6 },
  { _id:'f13', name:'Trail Running Shoes', description:'Aggressive outsole with waterproof upper for off-road adventures.', price:6999, oldPrice:8999, category:'Footwear', emoji:'👟', image:'/images/download (1).jpg', rating:4, reviews:567, badge:'sale', stock:11 },
  { _id:'f14', name:'Skechers Memory Foam', description:'Ultra-soft memory foam insole with lightweight mesh upper.', price:3299, oldPrice:null, category:'Footwear', emoji:'👟', image:'https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=400&h=400&fit=crop', rating:4, reviews:892, badge:'trending', stock:22 },
  { _id:'f15', name:'High Heel Pumps', description:'Classic pointed-toe heels in patent leather. 3-inch stiletto heel.', price:4499, oldPrice:5999, category:'Footwear', emoji:'👠', image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop', rating:4, reviews:345, badge:'sale', stock:8 },

  // ─── ELECTRONICS (15 products) ───
  { _id:'e1', name:'Sony WH-1000XM5', description:'Industry-leading noise cancellation with 30hr battery and premium sound.', price:24999, oldPrice:32999, category:'Electronics', emoji:'🎧', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', rating:5, reviews:3421, badge:'sale', stock:5 },
  { _id:'e2', name:'Apple AirPods Pro', description:'Active noise cancellation, Transparency mode, Adaptive EQ.', price:19999, oldPrice:null, category:'Electronics', emoji:'🎵', image:'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=400&h=400&fit=crop', rating:5, reviews:5678, badge:'hot', stock:8 },
  { _id:'e3', name:'JBL Portable Speaker', description:'Waterproof 360° sound with 12hr playtime. Party anywhere!', price:3999, oldPrice:5499, category:'Electronics', emoji:'🔊', image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', rating:4, reviews:892, badge:'sale', stock:14 },
  { _id:'e4', name:'iPad Pro 11"', description:'M2 chip, Liquid Retina display, perfect for work and creativity.', price:74999, oldPrice:null, category:'Electronics', emoji:'📱', image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop', rating:5, reviews:1123, badge:'new', stock:3 },
  { _id:'e5', name:'Mechanical Keyboard', description:'RGB backlit mechanical switches with satisfying tactile feedback.', price:4999, oldPrice:6999, category:'Electronics', emoji:'⌨️', image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop', rating:4, reviews:567, badge:'sale', stock:9 },
  { _id:'e6', name:'GoPro Hero 12', description:'5.3K video, HyperSmooth 6.0, waterproof. Adventure awaits!', price:34999, oldPrice:null, category:'Electronics', emoji:'📷', image:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop', rating:5, reviews:789, badge:'new', stock:6 },
  { _id:'e7', name:'Dell 27" Monitor', description:'4K IPS display with 99% sRGB coverage. Perfect for creators.', price:29999, oldPrice:39999, category:'Electronics', emoji:'🖥️', image:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop', rating:5, reviews:432, badge:'sale', stock:4 },
  { _id:'e8', name:'Logitech MX Master 3', description:'Advanced wireless mouse with MagSpeed scroll and ergonomic design.', price:7999, oldPrice:null, category:'Electronics', emoji:'🖱️', image:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', rating:5, reviews:1234, badge:'hot', stock:12 },
  { _id:'e9', name:'Canon EOS R50', description:'24.2MP APS-C mirrorless camera with DIGIC X image processor.', price:59999, oldPrice:69999, category:'Electronics', emoji:'📷', image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop', rating:5, reviews:678, badge:'sale', stock:3 },
  { _id:'e10', name:'Kindle Paperwhite', description:'6.8" display, 3 months battery, waterproof. Read anywhere.', price:13999, oldPrice:null, category:'Electronics', emoji:'📖', image:'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&h=400&fit=crop', rating:4, reviews:2341, badge:'new', stock:15 },
  { _id:'e11', name:'Drone DJI Mini 3', description:'4K/60fps, 38min flight time, under 249g. No registration needed.', price:44999, oldPrice:54999, category:'Electronics', emoji:'🚁', image:'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&h=400&fit=crop', rating:5, reviews:543, badge:'sale', stock:5 },
  { _id:'e12', name:'Smart LED TV 55"', description:'4K QLED with Dolby Vision, built-in Alexa and WiFi 6.', price:54999, oldPrice:74999, category:'Electronics', emoji:'📺', image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop', rating:4, reviews:876, badge:'sale', stock:6 },
  { _id:'e13', name:'USB-C Hub 7-in-1', description:'HDMI 4K, 3x USB-A, SD card, PD charging. Works with all laptops.', price:2499, oldPrice:3499, category:'Electronics', emoji:'🔌', image:'/images/usb.jpg', rating:4, reviews:432, badge:'sale', stock:20 },
  { _id:'e14', name:'Ring Doorbell Pro', description:'1080p HD video, motion detection, two-way audio, night vision.', price:9999, oldPrice:null, category:'Electronics', emoji:'🔔', image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', rating:4, reviews:321, badge:'new', stock:8 },
  { _id:'e15', name:'Portable Power Bank', description:'20000mAh, 65W fast charging, powers laptops and phones.', price:3499, oldPrice:4999, category:'Electronics', emoji:'🔋', image:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop', rating:4, reviews:1567, badge:'sale', stock:25 },

  // ─── FASHION (15 products) ───
  { _id:'fa1', name:'Linen Blazer', description:'Premium linen blazer with slim fit. Elevate any outfit instantly.', price:3999, oldPrice:5999, category:'Fashion', emoji:'🧥', image:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop', rating:5, reviews:342, badge:'sale', stock:7 },
  { _id:'fa2', name:'Floral Maxi Dress', description:'Breathable cotton floral dress perfect for summer outings.', price:1899, oldPrice:null, category:'Fashion', emoji:'👗', image:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop', rating:4, reviews:521, badge:'new', stock:11 },
  { _id:'fa3', name:'Denim Jacket Classic', description:'Timeless denim jacket with vintage wash. A wardrobe staple.', price:2499, oldPrice:3499, category:'Fashion', emoji:'🧥', image:'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop', rating:4, reviews:678, badge:'hot', stock:9 },
  { _id:'fa4', name:'Silk Scarf', description:'100% pure silk scarf with hand-rolled edges. Luxury redefined.', price:1299, oldPrice:null, category:'Fashion', emoji:'🧣', image:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop', rating:5, reviews:213, badge:null, stock:20 },
  { _id:'fa5', name:'Leather Tote Bag', description:'Genuine leather tote with spacious compartments. Work meets style.', price:4999, oldPrice:6999, category:'Fashion', emoji:'👜', image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', rating:5, reviews:891, badge:'sale', stock:6 },
  { _id:'fa6', name:'Graphic Tee Collection', description:'Premium cotton graphic tees with artistic prints. Express yourself.', price:799, oldPrice:null, category:'Fashion', emoji:'👕', image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', rating:4, reviews:1432, badge:'trending', stock:30 },
  { _id:'fa7', name:'Kurti Ethnic Set', description:'Handcrafted cotton kurti with dupatta. Traditional meets modern.', price:1599, oldPrice:2199, category:'Fashion', emoji:'👘', image:'/images/kurti.jpg', rating:5, reviews:876, badge:'sale', stock:15 },
  { _id:'fa8', name:'Slim Fit Chinos', description:'Stretch cotton chinos with tapered leg. Smart casual perfection.', price:1999, oldPrice:null, category:'Fashion', emoji:'👖', image:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop', rating:4, reviews:543, badge:'new', stock:18 },
  { _id:'fa9', name:'Wool Overcoat', description:'Double-breasted wool blend overcoat. Winter sophistication.', price:7999, oldPrice:11999, category:'Fashion', emoji:'🧥', image:'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&h=400&fit=crop', rating:5, reviews:234, badge:'sale', stock:5 },
  { _id:'fa10', name:'Saree Silk Premium', description:'Pure Kanjivaram silk saree with gold zari border. Pure elegance.', price:12999, oldPrice:null, category:'Fashion', emoji:'🥻', image:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop', rating:5, reviews:432, badge:'hot', stock:8 },
  { _id:'fa11', name:'Crop Top & Skirt Set', description:'Trendy co-ord set in breathable fabric. Perfect for brunch dates.', price:1499, oldPrice:1999, category:'Fashion', emoji:'👗', image:'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&h=400&fit=crop', rating:4, reviews:678, badge:'sale', stock:12 },
  { _id:'fa12', name:'Formal Shirt White', description:'Egyptian cotton formal shirt with slim fit and spread collar.', price:1299, oldPrice:null, category:'Fashion', emoji:'👔', image:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', rating:4, reviews:321, badge:null, stock:25 },
  { _id:'fa13', name:'Hoodie Oversized', description:'Fleece-lined oversized hoodie with kangaroo pocket. Cozy vibes.', price:1899, oldPrice:2499, category:'Fashion', emoji:'🧥', image:'/images/hoodie.jpg', rating:4, reviews:987, badge:'sale', stock:20 },
  { _id:'fa14', name:'Palazzo Pants', description:'Flowy wide-leg palazzo pants in chiffon. Breezy and elegant.', price:999, oldPrice:null, category:'Fashion', emoji:'👗', image:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop', rating:4, reviews:456, badge:'trending', stock:16 },
  { _id:'fa15', name:'Leather Belt Premium', description:'Full-grain leather belt with brushed silver buckle. Timeless accessory.', price:1199, oldPrice:1699, category:'Fashion', emoji:'👜', image:'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop', rating:4, reviews:234, badge:'sale', stock:22 },

  // ─── ACCESSORIES (15 products) ───
  { _id:'a1', name:'Apple Watch Series 9', description:'Advanced health tracking, ECG, crash detection, always-on display.', price:41999, oldPrice:44999, category:'Accessories', emoji:'⌚', image:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop', rating:5, reviews:2341, badge:'sale', stock:4 },
  { _id:'a2', name:'Ray-Ban Aviators', description:'Classic polarized aviator sunglasses with UV400 protection.', price:8999, oldPrice:null, category:'Accessories', emoji:'🕶️', image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop', rating:5, reviews:1876, badge:'hot', stock:12 },
  { _id:'a3', name:'Leather Wallet', description:'Slim bifold genuine leather wallet with RFID blocking technology.', price:1499, oldPrice:2199, category:'Accessories', emoji:'👛', image:'/images/wallet.jpg', rating:4, reviews:567, badge:'sale', stock:18 },
  { _id:'a4', name:'Gold Chain Necklace', description:'18K gold plated stainless steel chain. Tarnish-free and water-resistant.', price:2999, oldPrice:null, category:'Accessories', emoji:'📿', image:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', rating:4, reviews:321, badge:'new', stock:15 },
  { _id:'a5', name:'Canvas Backpack', description:'Durable 30L canvas backpack with laptop sleeve and USB charging port.', price:2499, oldPrice:3499, category:'Accessories', emoji:'🎒', image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop', rating:5, reviews:743, badge:'sale', stock:10 },
  { _id:'a6', name:'Perfume Collection', description:'Luxury fragrance with notes of oud, rose and sandalwood. 100ml EDP.', price:3499, oldPrice:null, category:'Accessories', emoji:'🧴', image:'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop', rating:5, reviews:432, badge:'trending', stock:8 },
  { _id:'a7', name:'Fitness Tracker Band', description:'Heart rate, SpO2, sleep tracking with 14-day battery life.', price:2999, oldPrice:3999, category:'Accessories', emoji:'⌚', image:'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop', rating:4, reviews:876, badge:'sale', stock:14 },
  { _id:'a8', name:'Pearl Earrings', description:'Freshwater pearl stud earrings in sterling silver setting.', price:1999, oldPrice:null, category:'Accessories', emoji:'💎', image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', rating:5, reviews:543, badge:'new', stock:20 },
  { _id:'a9', name:'Travel Organizer', description:'6-piece packing cube set in water-resistant ripstop nylon.', price:1299, oldPrice:1799, category:'Accessories', emoji:'🧳', image:'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=400&h=400&fit=crop', rating:4, reviews:432, badge:'sale', stock:16 },
  { _id:'a10', name:'Luxury Wrist Watch', description:'Sapphire crystal glass, Swiss movement, genuine leather strap.', price:14999, oldPrice:19999, category:'Accessories', emoji:'⌚', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', rating:5, reviews:321, badge:'sale', stock:6 },
  { _id:'a11', name:'Hair Accessories Set', description:'Premium scrunchies, clips and headbands in satin finish. 12-piece set.', price:799, oldPrice:null, category:'Accessories', emoji:'💆', image:'/images/hair.jpg', rating:4, reviews:678, badge:'trending', stock:30 },
  { _id:'a12', name:'Laptop Sleeve 15"', description:'Premium neoprene sleeve with accessory pocket. Fits 13-15 inch laptops.', price:999, oldPrice:1499, category:'Accessories', emoji:'💻', image:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop', rating:4, reviews:543, badge:'sale', stock:22 },
  { _id:'a13', name:'Gym Duffel Bag', description:'Water-resistant 40L duffel with shoe compartment and wet pocket.', price:1899, oldPrice:null, category:'Accessories', emoji:'🎒', image:'https://images.unsplash.com/photo-1553531384-397c80973a0b?w=400&h=400&fit=crop', rating:4, reviews:234, badge:'new', stock:12 },
  { _id:'a14', name:'Ceramic Mug Set', description:'Set of 4 handcrafted ceramic mugs. Microwave and dishwasher safe.', price:1299, oldPrice:1799, category:'Accessories', emoji:'☕', image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop', rating:5, reviews:432, badge:'sale', stock:18 },
  { _id:'a15', name:'Sunscreen SPF 50+', description:'Broad spectrum UV protection, lightweight, non-greasy formula. 100ml.', price:599, oldPrice:null, category:'Accessories', emoji:'🧴', image:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop', rating:4, reviews:876, badge:'hot', stock:40 },

  // ─── MOBILES (15 products) ───
  { _id:'m1', name:'iPhone 15 Pro Max', description:'A17 Pro chip, titanium design, 48MP camera system, USB-C.', price:134999, oldPrice:null, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop', rating:5, reviews:4521, badge:'new', stock:5 },
  { _id:'m2', name:'Samsung Galaxy S24', description:'Galaxy AI, 200MP camera, 12GB RAM, 5000mAh battery.', price:79999, oldPrice:89999, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop', rating:5, reviews:2341, badge:'sale', stock:7 },
  { _id:'m3', name:'OnePlus 12', description:'Hasselblad camera, 100W fast charging, Snapdragon 8 Gen 3.', price:64999, oldPrice:69999, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop', rating:4, reviews:876, badge:'sale', stock:10 },
  { _id:'m4', name:'Google Pixel 8 Pro', description:'Google Tensor G3, best-in-class computational photography, 7yr updates.', price:74999, oldPrice:null, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop', rating:4, reviews:654, badge:'new', stock:6 },
  { _id:'m5', name:'Realme GT 5 Pro', description:'Snapdragon 8 Gen 3, 144Hz AMOLED, 240W ultrafast charging.', price:39999, oldPrice:44999, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop', rating:4, reviews:432, badge:'hot', stock:12 },
  { _id:'m6', name:'Nothing Phone 2', description:'Unique Glyph interface, Snapdragon 8+ Gen 1, transparent design.', price:44999, oldPrice:null, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop', rating:4, reviews:321, badge:'trending', stock:8 },
  { _id:'m8', name:'Motorola Edge 40', description:'144Hz pOLED display, 68W TurboPower, IP68 water resistance.', price:29999, oldPrice:34999, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop', rating:4, reviews:432, badge:'sale', stock:14 },
  { _id:'m10', name:'iPhone 14', description:'A15 Bionic chip, Dual camera, Emergency SOS via satellite.', price:69999, oldPrice:79999, category:'Mobiles', emoji:'📱', image:'/images/iphone.jpg', rating:5, reviews:2134, badge:'sale', stock:9 },
  { _id:'m11', name:'Vivo V29 Pro', description:'50MP curved AMOLED, Aura light portrait, 80W fast charging.', price:35999, oldPrice:null, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop', rating:4, reviews:321, badge:'trending', stock:11 },
  { _id:'m12', name:'OPPO Find X7', description:'Hasselblad Master Edition camera, 100W SuperVOOC, 6.82" AMOLED.', price:54999, oldPrice:64999, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop', rating:4, reviews:234, badge:'sale', stock:7 },
  { _id:'m13', name:'Redmi Note 13 Pro', description:'200MP camera, 67W fast charging, 120Hz AMOLED, 5100mAh.', price:24999, oldPrice:27999, category:'Mobiles', emoji:'📱', image:'/images/redmi.jpg', rating:4, reviews:1234, badge:'sale', stock:20 },
  { _id:'m14', name:'iQOO 12', description:'Snapdragon 8 Gen 3, 144Hz E7 AMOLED, 120W FlashCharge.', price:52999, oldPrice:null, category:'Mobiles', emoji:'📱', image:'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop', rating:4, reviews:432, badge:'new', stock:8 },
  { _id:'m15', name:'Samsung Galaxy Z Flip5', description:'3.4" FlexWindow, Snapdragon 8 Gen 2, 3700mAh, compact foldable.', price:89999, oldPrice:99999, category:'Mobiles', emoji:'📱', image:'/images/flip.jpg', rating:5, reviews:765, badge:'sale', stock:4 },
];

function createProductCard(product) {
  const wishlist    = JSON.parse(localStorage.getItem('wishlist')) || [];
  const isWished    = wishlist.some(p => p._id === product._id);
  const heartIcon   = isWished ? '❤️' : '♡';
  const heartStyle  = isWished ? 'color:#ff4757;' : '';

  const badgeHTML = product.badge ? `<div class="card-badge badge-${product.badge}">${
    product.badge==='sale'?'🏷️ SALE': product.badge==='new'?'✨ NEW': product.badge==='hot'?'🔥 HOT':'📈 TRENDING'
  }</div>` : '';

  const oldPriceHTML = product.oldPrice
    ? `<span class="old-price">₹${product.oldPrice.toLocaleString()}</span>` : '';

  const starsHTML   = renderStars(product.rating || 4);
  const productJSON = JSON.stringify(product).replace(/"/g, '&quot;');

  return `
    <div class="product-card" data-category="${product.category}" data-id="${product._id}">
      ${badgeHTML}
      <button class="card-wishlist" id="wish-${product._id}" style="${heartStyle}"
        onclick="event.stopPropagation(); toggleWishlist(${productJSON}, this)">${heartIcon}</button>
      <div class="card-img" onclick="goToProduct('${product._id}')">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div style=&quot;display:flex;align-items:center;justify-content:center;height:100%;font-size:60px;background:#E1F5EE&quot;>${product.emoji}</div>'" />
      </div>
      <div class="card-body">
        <div class="card-category">${product.category}</div>
        <div class="card-name">${product.name}</div>
        <div class="stars">${starsHTML}<span class="rating-count">(${(product.reviews||0).toLocaleString()})</span></div>
        <div class="card-footer">
          <div class="price-block">
            ${oldPriceHTML}
            <span class="price">₹${product.price.toLocaleString()}</span>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${productJSON})">+</button>
        </div>
      </div>
    </div>`;
}

function goToProduct(id) {
  // Save scroll position before navigating
  sessionStorage.setItem('scrollPos', window.scrollY);
  window.location.href = `product.html?id=${id}`;
}

async function loadProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  try {
    const res    = await fetch('/api/products');
    let products = await res.json();
    if (!products.length) products = sampleProducts;
    grid.innerHTML = products.map(createProductCard).join('');
  } catch (err) {
    grid.innerHTML = sampleProducts.map(createProductCard).join('');
  }
  // Restore scroll position
  const scrollPos = sessionStorage.getItem('scrollPos');
  if (scrollPos) {
    setTimeout(() => { window.scrollTo(0, parseInt(scrollPos)); sessionStorage.removeItem('scrollPos'); }, 100);
  }
}

loadProducts();