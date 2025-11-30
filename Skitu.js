 // --- بيانات المنيو الكامل ---
        const menuData = [
          {
            id: 'iced-coffee',
            name: 'إيس كوفي',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80',
            description: 'مشروبات قهوة مثلجة منعشة',
            options: [
              { name: 'ايس لاتيه', price: 60 },
              { name: 'ايس موكا', price: 65 },
              { name: 'ايس سبانيش لاتيه', price: 70 },
              { name: 'ايس ماتشا لاتيه', price: 70 },
              { name: 'ايس أميريكان', price: 50 },
              { name: 'ايس كاراميل ميكاتو', price: 65 },
              { name: 'ايس سولتد كاراميل', price: 75 },
              { name: 'ايس وايت موكا', price: 70 },
              { name: 'ايس دولسي ديلتشي', price: 70 },
              { name: 'ايس توفي نوت', price: 70 }
            ]
          },
          {
            id: 'frappe',
            name: 'فرابيه',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRod0jdoHB2oaSI2ByZHxSa-Bq6Me4t22qyw&s',
            
            description: 'مشروبات مخلوطة ومثلجة',
            options: [
              { name: 'فرابيه كافيه', price: 60 },
              { name: 'كراميل', price: 65 },
              { name: 'كوكيز شيبس', price: 70 },
              { name: 'كيوي نعناع', price: 65 },
              { name: 'فرابيه دولسي', price: 70 },
              { name: 'وايت موكا', price: 70 }
            ]
          },
          {
            id: 'coffee',
            name: 'قهوة',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80',
            description: 'قهوة تركية وأوروبية',
            options: [
              { name: 'تركي', price: 30 },
              { name: 'فرنساي', price: 45 },
              { name: 'بندق', price: 45 },
              { name: 'كراميل', price: 45 },
              { name: 'نوتيلا', price: 50 }
            ]
          },
          {
            id: 'espresso',
            name: 'اسبريسو',
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80',
            description: 'قهوة إسبريسو ومشتقاتها',
            options: [
              { name: 'اسبريسو', price: 35 },
              { name: 'كورتادو', price: 50 },
              { name: 'ميكاتو', price: 50 },
              { name: 'فلات وايت', price: 50 },
              { name: 'كباتشينو', price: 55 },
              { name: 'قهوه امريكانو', price: 50 },
              { name: 'سبانيش لاتيه', price: 65 },
              { name: 'وايت موكا', price: 65 },
              { name: 'اسبريسو موكا', price: 60 }
            ]
          },
          {
            id: 'milk-shake',
            name: 'ميلك شيك',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
            description: 'مشروبات حليبة ومتنوعة النكهات',
            options: [
              { name: 'فانيليا', price: 55 },
              { name: 'شوكولاته', price: 55 },
              { name: 'كراميل', price: 60 },
              { name: 'اوريو', price: 65 },
              { name: 'لوتس', price: 65 },
              { name: 'بيساتشيو', price: 75 },
              { name: 'كيت كات', price: 65 },
              { name: 'فراوله', price: 60 },
              { name: 'بلو بيرى', price: 60 },
              { name: 'نوتيلا', price: 65 },
              { name: 'مانجا', price: 60 },
              { name: 'كيوي', price: 60 }
            ]
          },
          {
            id: 'soda',
            name: 'صودا',
            image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=80',
            description: 'مشروبات غازية ونكهات متنوعة',
            options: [
              { name: 'صن شاين', price: 55 },
              { name: 'ميكس صودا', price: 60 },
              { name: 'موخيتو', price: 60 },
              { name: 'ريدبول', price: 60 },
              { name: 'ريدبول فليفر', price: 75 },
              { name: 'اسبريسو فليفر', price: 85 }
            ]
          },
          {
            id: 'Extra',
            name: 'اكسترا',
            image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?auto=format&fit=crop&w=500&q=80',
            description: 'اضافات خاصه للمشروبات',
            options: [
              { name: 'بوبا', price: 15 },
              { name: 'حليب خالي الدسم', price:5  },
              { name: 'اسبريسو', price: 15 },
              { name: 'فليفر', price: 15 },
              { name: 'صوص', price: 10 },
              { name: 'مياه', price: 10 },
              { name: 'ويبد كريم', price: 20 },
              { name: 'مارشميلو', price: 10 }
            ]
          },
          {
            id: 'fresh-juice',
            name: 'عصير فريش',
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80',
            description: 'عصائر طبيعية من الفواكه الطازجة',
            options: [
              { name: 'مانجا', price: 40 },
              { name: 'كيوي', price: 45 },
              { name: 'فراوله', price: 40 },
              { name: 'لمون', price: 35 },
              { name: 'ليمون نعناع', price: 40 },
              { name: 'بلح بلبن', price: 45 },
              { name: 'موز بلبن', price: 45 },
              { name: 'يوسفي', price: 40 },
              { name: 'بطيخ', price: 40 },
              { name: 'افوكادو', price: 75 }
            ]
          },
          {
            id: 'Speciality Coffee',
            name: 'قهوة مختصة',
            image: 'https://th.bing.com/th/id/OIP.u_wYbOvLAcOSJUBgOgNvfwHaFu?w=257&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            description: 'قهوة مختصة و اشتقاقها',
            options: [
            { name: 'V60 HOT', price: 70 },
              { name: 'ICE V60', price: 70 }
            ]
          },
          {
            id: 'other-drinks',
            name: 'مشروبات أخرى',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80',
            description: 'مشروبات تقليدية وصحية',
            options: [
              { name: 'نعناع', price: 15 },
              { name: 'شاي', price: 15 },
              { name: 'شاي نكهات', price: 20 },
              { name: 'شاي لاتيه', price: 30 },
              { name: 'شاي الكرك', price: 40 },
              { name: 'تفاح بالقرفة', price: 35 },
              { name: 'هوت شوكلت', price: 45 },
              { name: 'هوت شوكلت مارشميلو', price: 50 },
              { name: 'نسكافيه', price: 40 }
            ]
          },
          {
            id: 'dessert',
            name: 'حلويات',
            image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80',
            description: 'حلويات لذيذة ومتنوعة',
            options: [
              { name: 'وافل نوتيلا', price: 60 },
              { name: 'وافل لوتس', price: 60 },
              { name: 'وافل بيستاشيو', price: 75 },
              { name: 'وافل كيندر', price: 65 },
              { name: 'وافل ميكس', price: 70 },
              { name: 'مولتن كيك كلاسيك', price: 60 },
              { name: 'مولتن كيك نوتيلا', price: 65 },
              { name: 'مولتن كيك ايس', price: 70 },
              { name: 'مولتن كيك ميكس', price: 70 },
              { name: 'بان كيك نوتيلا', price: 60 },
              { name: 'بان كيك بيستاشيو', price: 75 },
              { name: 'بان كيك لوتس', price: 60 },
              { name: 'بان كيك كيندر', price: 65 },
              { name: 'بان كيك ميكس', price: 70 }
            ]
          },
          {
            id: 'Smoothie',
            name: 'سموزي',
            image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80',
            description: 'مشاريب مثلجة بنكهات مميزة',
            options: [
            { name: 'سموزي بلوبيري', price: 55 },
            { name: 'سموزي فراولة', price: 55 },
            { name: 'سموزي خوخ', price: 55 },
            { name: 'سموزي باشون فروت', price: 55 },
            { name: 'سموزي مانجا', price: 55 },
            { name: 'سموزي اناناس', price: 55 },
            { name: 'سموزي كيوي', price: 55 },
            { name: 'سموزي تفاح اخضر', price: 55 },
            { name: 'سموزي ميكس', price: 60 }
        ]
          }
        ];

        // --- دوال المنيو ---
        function renderMenu() {
          const container = document.getElementById('menu-container');
          const newItems = ['frappe', 'Smoothie', 'Speciality Coffee'];
          container.innerHTML = menuData.map(item => `
            <div class="menu-item" data-item-id="${item.id}">
              ${newItems.includes(item.id) ? '<span class="menu-item-badge">🆕 جديد</span>' : ''}
              <img src="${item.image}" loading="lazy" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80'">
              <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button class="add-to-cart-btn" onclick="openOptionsModal('${item.id}')">
                  <i class="fas fa-shopping-cart"></i> اختر النوع
                </button>
              </div>
            </div>
          `).join('');
        }

        let currentItemId = null;

        function openOptionsModal(itemId) {
          const item = menuData.find(i => i.id === itemId);
          if (!item) return;
          
          currentItemId = itemId;
          document.getElementById('modal-title').textContent = item.name;
          
          const optionsHtml = item.options.map((opt, idx) => `
            <div class="option-item" onclick="selectOption(${idx})">
              <div>
                <div class="option-name">${opt.name}</div>
                <div class="option-price">${opt.price} ج.م</div>
              </div>
              <button class="add-to-cart-btn" style="padding: 8px 16px; min-width: auto;" 
                      onclick="event.stopPropagation(); selectOption(${idx})">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          `).join('');
          
          document.getElementById('options-list').innerHTML = optionsHtml;
          document.getElementById('options-modal').style.display = 'block';
        }

        function closeOptionsModal() {
          document.getElementById('options-modal').style.display = 'none';
        }

        function selectOption(optionIndex) {
          const item = menuData.find(i => i.id === currentItemId);
          const option = item.options[optionIndex];
          const fullName = `${item.name} (${option.name})`;
          
          addToCart(fullName, option.price);
          closeOptionsModal();
          showToast(`✓ ${fullName} أُضيف للسلة!`);
        }

        // --- دوال السلة (كما هي) ---
        let cart = [];
        const CAFE_WHATSAPP = "201143737923"; 

        function addToCart(name, price) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCartDisplay();
            showAddedMessage(name);
        }
        
        function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">سلة طلباتك فارغة</p>';
        cartTotal.innerHTML = '<span style="color: #fff;">الإجمالي: 0 ج.م</span>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price} ج.م للوحدة</div>
        </div>
        ...
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <button class="quantity-btn remove" onclick="removeItem(${index})" title="إزالة">×</button>
                </div>
                <div class="item-total" style="color: var(--primary); font-weight: bold;">${item.price * item.quantity} ج.م</div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.innerHTML = `<span style="color: #fff; font-weight: bold; font-size: 1.2rem;">الإجمالي: ${total} ج.م</span>`;
    }
}
        
        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        }
        
        function proceedToCheckout() {
            if (cart.length === 0) {
                showToast('سلة طلباتك فارغة!');
                return;
            }
            document.getElementById('customer-form').style.display = 'block';
            document.getElementById('proceed-btn').style.display = 'none';
            document.getElementById('whatsapp-btn').style.display = 'inline-block';
        }
        
        function validateCustomerInfo() {
            const name = document.getElementById('customer-name').value.trim();
            const phone = document.getElementById('customer-phone').value.trim();
            const address = document.getElementById('customer-address').value.trim();
            
            if (!name) {
                showToast('الرجاء إدخال اسمك');
                return false;
            }
            if (!phone) {
                showToast('الرجاء إدخال رقم هاتفك');
                return false;
            }
            if (!address) {
                showToast('الرجاء إدخال عنوانك');
                return false;
            }
            if (!/^01[0-9]{9}$/.test(phone)) {
                showToast('الرجاء إدخال رقم مصري صحيح (01xxxxxxxxx)');
                return false;
            }
            return true;
        }
        
        function checkout() {
            if (cart.length === 0) {
                showToast('سلة طلباتك فارغة!');
                return;
            }
            if (!validateCustomerInfo()) return;
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const orderDetails = cart.map(item => `${item.name} ×${item.quantity} (${item.price * item.quantity} ج.م)`).join('\n');
            const customerName = document.getElementById('customer-name').value.trim();
            const customerPhone = document.getElementById('customer-phone').value.trim();
            const customerAddress = document.getElementById('customer-address').value.trim();
            const orderNotes = document.getElementById('order-notes').value.trim();
            
            const whatsappMessage = `🛒 *طلب جديد من موقع Skitu Café*

👤 *بيانات العميل:*
الاسم: ${customerName}
الهاتف: ${customerPhone}
العنوان: ${customerAddress}

📋 *تفاصيل الطلب:*
${orderDetails}

💰 *الإجمالي: ${total} ج.م*

${orderNotes ? `📝 *ملاحظات:* ${orderNotes}\n` : ''}⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-EG')}

شكرًا لاختيارك Skitu Café! ☕`;

            const whatsappUrl = `https://wa.me/${CAFE_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
            
            showToast(`تم إرسال طلبك! شكرًا لاختيارك Skitu Café 🎉`);
            cart = [];
            updateCartDisplay();
            toggleCart();
        }
        
        function increaseQuantity(index) {
            if (cart[index]) {
                cart[index].quantity += 1;
                updateCartDisplay();
            }
        }
        
        function decreaseQuantity(index) {
            if (cart[index]) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                } else {
                    removeItem(index);
                    return;
                }
                updateCartDisplay();
            }
        }
        
        function removeItem(index) {
            if (confirm('هل أنت متأكد من إزالة هذا الصنف؟')) {
                cart.splice(index, 1);
                updateCartDisplay();
                showToast('تمت الإزالة!');
            }
        }
        
        function clearCart() {
            if (cart.length === 0) {
                showToast('سلة طلباتك فارغة بالفعل!');
                return;
            }
            if (confirm('هل أنت متأكد من مسح السلة بالكامل؟')) {
                cart = [];
                updateCartDisplay();
                showToast('تم مسح السلة!');
            }
        }
        
        function showAddedMessage(name) {
            showToast(`✓ ${name} أُضيف!`);
        }

        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 2000);
        }
        
        function searchMenu() {
            const searchTerm = document.getElementById('menu-search').value.toLowerCase();
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                const itemName = item.querySelector('h3').textContent.toLowerCase();
                const itemDescription = item.querySelector('p').textContent.toLowerCase();
                item.style.display = (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) ? 'flex' : 'none';
            });
        }
        
        function clearSearch() {
            document.getElementById('menu-search').value = '';
            document.querySelectorAll('.menu-item').forEach(item => item.style.display = 'flex');
        }
        
        document.getElementById('cart-modal').addEventListener('click', function(e) {
            if (e.target === this) toggleCart();
        });

        document.getElementById('options-modal').addEventListener('click', function(e) {
            if (e.target === this) closeOptionsModal();
        });

        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', e => {
                e.preventDefault();
                showToast('تم استلام رسالتك! سنرد عليك قريبًا.');
                form.reset();
            });
        });

        // --- Animated Background Particles ---
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 60 + 20;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // --- Floating Coffee Beans in Hero ---
        function createFloatingBeans() {
            const beansContainer = document.getElementById('floating-beans');
            const beanCount = 8;
            
            for (let i = 0; i < beanCount; i++) {
                const bean = document.createElement('div');
                bean.className = 'coffee-bean';
                bean.style.left = Math.random() * 100 + '%';
                bean.style.animationDelay = Math.random() * 15 + 's';
                bean.style.animationDuration = (Math.random() * 5 + 12) + 's';
                beansContainer.appendChild(bean);
            }
        }

        // --- Scroll Animations ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        function initScrollAnimations() {
            const animatedElements = document.querySelectorAll('.about, .opening-hours, .special-offers, .popular-items, .reviews, .contact');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
                
                observer.observe(el);
                el.addEventListener('animationend', () => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            });
        }

        // --- Scroll Progress Indicator ---
        function updateScrollProgress() {
            const scrollProgress = document.getElementById('scroll-progress');
            if (scrollProgress) {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.pageYOffset / windowHeight) * 100;
                scrollProgress.style.width = scrolled + '%';
            }
        }

        // --- Smooth Scroll Animation Trigger ---
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const nav = document.querySelector('nav');
            
            updateScrollProgress();
            
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            
            if (nav) {
                if (scrolled > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        });

        // تشغيل الموقع
        document.addEventListener('DOMContentLoaded', () => {
            renderMenu();
            createParticles();
            createFloatingBeans();
            initScrollAnimations();
        });

        // === Dark Mode Toggle ===
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector('.theme-toggle i');
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  }
}

// تطبيق الوضع المحفوظ عند فتح الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.theme-toggle i').className = 'fas fa-sun';
  }
});
