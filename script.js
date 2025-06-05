const t={
vi:{
mainTitle:"VPS GAMING",
mainSubtitle:"VPS ĐỂ TREO TÁC VỤ NẶNG SỐ LƯỢNG LỚN",
discordText:"Tham gia Discord",
pricingTitle:"Gói Dịch Vụ",
pricingSubtitle:"Chọn cấu hình phù hợp với nhu cầu",
featuresTitle:"Tính năng nổi bật",
configs:[
{name:"Cấu hình 1",subtitle:"Treo game số lượng lớn",cpu:"Dual Intel Xeon E5-2680v4",cores:"28 nhân",gpu:"GTX 1070/1080",vram:"8GB VRAM",ram:"128GB DDR4",storage:"SSD NVMe",weekly:"425k",monthly:"1,500k"},
{name:"Cấu hình 2",subtitle:"Treo game số lượng cực lớn",cpu:"Dual Intel Xeon E5-2686v4",cores:"36 nhân",gpu:"GTX 1070/1080",vram:"8GB VRAM",ram:"128GB DDR4",storage:"SSD NVMe",weekly:"450k",monthly:"1,600k"}
],
features:["✅ Hỗ trợ Windows 1511, 21H2, 22H2","💾 Nâng cấp RAM lên 256GB (25K/32GB)","🌐 Mạng tốc độ cao: VNPT, Viettel, FPT","🔧 Hỗ trợ 24/7 và tự động khởi động lại","🎮 Tối ưu cho game: Blox Fruits, Roblox","🚀 Hiệu năng ổn định 99.9% uptime"]
},
en:{
mainTitle:"VPS GAMING",
mainSubtitle:"VPS FOR HEAVY TASK AUTOMATION AT SCALE",
discordText:"Join Discord",
pricingTitle:"Service Plans",
pricingSubtitle:"Choose the configuration that suits your needs",
featuresTitle:"Key Features",
configs:[
{name:"Configuration 1",subtitle:"Large scale game automation",cpu:"Dual Intel Xeon E5-2680v4",cores:"28 cores",gpu:"GTX 1070/1080",vram:"8GB VRAM",ram:"128GB DDR4",storage:"SSD NVMe",weekly:"$17",monthly:"$60"},
{name:"Configuration 2",subtitle:"Ultra large scale game automation",cpu:"Dual Intel Xeon E5-2686v4",cores:"36 cores",gpu:"GTX 1070/1080",vram:"8GB VRAM",ram:"128GB DDR4",storage:"SSD NVMe",weekly:"$18",monthly:"$64"}
],
features:["✅ Support Windows 1511, 21H2, 22H2","💾 RAM upgrade to 256GB (25K/32GB)","🌐 High-speed network: VNPT, Viettel, FPT","🔧 24/7 support & auto restart","🎮 Optimized for games: Blox Fruits, Roblox","🚀 Stable performance 99.9% uptime"]
},
th:{
mainTitle:"VPS GAMING",
mainSubtitle:"VPS สำหรับงานหนักอัตโนมัติขนาดใหญ่",
discordText:"เข้าร่วม Discord",
pricingTitle:"แพ็คเกจบริการ",
pricingSubtitle:"เลือกคอนฟิกที่เหมาะกับความต้องการ",
featuresTitle:"คุณสมบัติเด่น",
configs:[
{name:"คอนฟิก 1",subtitle:"เล่นเกมอัตโนมัติจำนวนมาก",cpu:"Dual Intel Xeon E5-2680v4",cores:"28 คอร์",gpu:"GTX 1070/1080",vram:"8GB VRAM",ram:"128GB DDR4",storage:"SSD NVMe",weekly:"$17",monthly:"$60"},
{name:"คอนฟิก 2",subtitle:"เล่นเกมอัตโนมัติจำนวนมหาศาล",cpu:"Dual Intel Xeon E5-2686v4",cores:"36 คอร์",gpu:"GTX 1070/1080",vram:"8GB VRAM",ram:"128GB DDR4",storage:"SSD NVMe",weekly:"$18",monthly:"$64"}
],
features:["✅ รองรับ Windows 1511, 21H2, 22H2","💾 อัปเกรด RAM ถึง 256GB (25K/32GB)","🌐 เครือข่ายความเร็วสูง: VNPT, Viettel, FPT","🔧 ซัพพอร์ต 24/7 และรีสตาร์ทอัตโนมัติ","🎮 เหมาะสำหรับเกม: Blox Fruits, Roblox","🚀 ประสิทธิภาพเสถียร 99.9% uptime"]
}
};
let l='vi';
function changeLanguage(lang){
l=lang;
document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.remove('active'));
event.target.classList.add('active');
updateContent();
}
function updateContent(){
const d=t[l];
document.getElementById('main-title').textContent=d.mainTitle;
document.getElementById('main-subtitle').textContent=d.mainSubtitle;
document.getElementById('discord-text').textContent=d.discordText;
document.getElementById('pricing-title').textContent=d.pricingTitle;
document.getElementById('pricing-subtitle').textContent=d.pricingSubtitle;
document.getElementById('features-title').textContent=d.featuresTitle;
const cards=document.getElementById('pricing-cards');
cards.innerHTML='';
d.configs.forEach(config=>{
const card=document.createElement('div');
card.className='pricing-card fade-in';
card.innerHTML=`
<div class="card-header">
<div class="config-name">${config.name}</div>
<div class="config-subtitle">${config.subtitle}</div>
</div>
<div class="specs-grid">
<div class="spec-item">
<div class="spec-label">CPU</div>
<div class="spec-value">${config.cpu}</div>
</div>
<div class="spec-item">
<div class="spec-label">Cores</div>
<div class="spec-value">${config.cores}</div>
</div>
<div class="spec-item">
<div class="spec-label">GPU</div>
<div class="spec-value">${config.gpu}</div>
</div>
<div class="spec-item">
<div class="spec-label">VRAM</div>
<div class="spec-value">${config.vram}</div>
</div>
<div class="spec-item">
<div class="spec-label">RAM</div>
<div class="spec-value">${config.ram}</div>
</div>
<div class="spec-item">
<div class="spec-label">Storage</div>
<div class="spec-value">${config.storage}</div>
</div>
</div>
<div class="pricing-footer">
<div class="price-group">
<span class="price-label">${l==='vi'?'Giá tuần':l==='en'?'Weekly':'รายสัปดาห์'}:</span>
<span class="price-value">${config.weekly}</span>
</div>
<div class="price-group">
<span class="price-label">${l==='vi'?'Giá tháng':l==='en'?'Monthly':'รายเดือน'}:</span>
<span class="price-value">${config.monthly}</span>
</div>
</div>
`;
cards.appendChild(card);
});
const features=document.getElementById('features-grid');
features.innerHTML='';
d.features.forEach(feature=>{
const item=document.createElement('div');
item.className='feature-item fade-in';
item.innerHTML=feature;
features.appendChild(item);
});
}
document.addEventListener('DOMContentLoaded',updateContent);