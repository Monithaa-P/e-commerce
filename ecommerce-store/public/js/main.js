// ─── CART HELPERS ───
function getCart() { return JSON.parse(localStorage.getItem('cart')) || []; }
function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }
function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

// ─── WISHLIST HELPERS ───
function getWishlist() { return JSON.parse(localStorage.getItem('wishlist')) || []; }
function saveWishlist(w) { localStorage.setItem('wishlist', JSON.stringify(w)); }
function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll('#wishlist-count').forEach(el => el.textContent = count);
}
function toggleWishlist(product, btn) {
  let wishlist = getWishlist();
  const index  = wishlist.findIndex(p => p._id === product._id);
  if (index > -1) {
    wishlist.splice(index, 1);
    btn.textContent  = '♡';
    btn.style.color  = '';
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.push(product);
    btn.textContent  = '❤️';
    btn.style.color  = '#ff4757';
    showToast('❤️ Saved to wishlist!');
  }
  saveWishlist(wishlist);
  updateWishlistCount();
}

// ─── CART DB SYNC ───
async function syncCartToDB() {
  const token = localStorage.getItem('token');
  if (!token) return;
  try {
    const cartItems = getCart();
    // Send in the format your backend expects: { items: [], total: 0 }
    await fetch('/api/orders/cart/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ 
        items: cartItems,
        total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      })
    });
  } catch (e) {}
}

async function restoreCartFromDB() {
  const token = localStorage.getItem('token');
  if (!token) return;
  try {
    const res = await fetch('/api/orders/cart/get', { 
      headers: { 'Authorization': 'Bearer ' + token } 
    });
    const data = await res.json();
    // Extract items array from the response object
    const cart = data.items || [];
    if (cart.length > 0) { 
      saveCart(cart); 
      updateCartCount(); 
    }
  } catch (e) {}
}

// ─── MERGE GUEST CART ON LOGIN ───
async function mergeGuestCartOnLogin() {
  const token = localStorage.getItem('token');
  const guestCart = getCart();
  
  if (!token || !guestCart || guestCart.length === 0) {
    return;
  }
  
  try {
    const getUserCartRes = await fetch('/api/orders/cart/get', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const userCartData = await getUserCartRes.json();
    const userCart = userCartData.items || [];
    
    let mergedCart = [...userCart];
    
    guestCart.forEach(guestItem => {
      const existingIndex = mergedCart.findIndex(item => item._id === guestItem._id);
      if (existingIndex > -1) {
        mergedCart[existingIndex].quantity += guestItem.quantity;
      } else {
        mergedCart.push(guestItem);
      }
    });
    
    await fetch('/api/orders/cart/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ 
        items: mergedCart,
        total: mergedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      })
    });
    
    saveCart(mergedCart);
    updateCartCount();
  } catch (error) {
    console.error('Merge failed:', error);
  }
}

async function addToCart(product) {
  const cart  = getCart();
  const index = cart.findIndex(i => i._id === product._id);
  if (index > -1) { cart[index].quantity += 1; } else { cart.push({ ...product, quantity: 1 }); }
  saveCart(cart);
  updateCartCount();
  showCartToast(product);
  await syncCartToDB();
}

// ─── FANCY CART TOAST ───
function showCartToast(product) {
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.style.cssText = `
      position:fixed; bottom:2rem; right:2rem; z-index:99999;
      background:white; border-radius:16px; padding:1rem 1.25rem;
      display:flex; align-items:center; gap:12px;
      box-shadow:0 8px 32px rgba(4,52,44,0.2);
      border-left:4px solid #1D9E75;
      transform:translateX(120%); transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
      max-width:300px; font-family:'DM Sans',sans-serif;
    `;
    document.body.appendChild(toast);
  }
  const img = product.image
    ? `<img src="${product.image}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;" onerror="this.outerHTML='<span style=font-size:32px>${product.emoji||'📦'}</span>'" />`
    : `<span style="font-size:32px;">${product.emoji || '📦'}</span>`;

  toast.innerHTML = `
    ${img}
    <div>
      <div style="font-weight:700;font-size:13px;color:#04342C;">Added to Cart! 🛒</div>
      <div style="font-size:12px;color:#555;margin-top:2px;">${product.name}</div>
      <div style="font-size:12px;color:#1D9E75;font-weight:600;">₹${product.price.toLocaleString()}</div>
    </div>
    <a href="cart.html" style="background:#1D9E75;color:white;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap;">View Cart</a>
  `;
  toast.style.transform = 'translateX(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.transform = 'translateX(120%)'; }, 3000);
}

// ─── SIMPLE TOAST ───
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── AUTH ───
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  // DON'T remove cart here - keep it for next guest session
  // localStorage.removeItem('cart');  // ← COMMENTED OUT
  sessionStorage.removeItem('cartMerged');
  window.location.href = 'index.html';
}

function updateNavAuth() {
  const token      = localStorage.getItem('token');
  const userStr    = localStorage.getItem('user');
  const loginLink  = document.getElementById('login-link');
  const logoutLink = document.getElementById('logout-link');
  const ordersLink = document.getElementById('orders-link');
  const helloUser  = document.getElementById('hello-user');

  console.log('updateNavAuth called, token:', !!token);
  console.log('cartMerged flag:', sessionStorage.getItem('cartMerged'));

  if (token && userStr) {
    const user      = JSON.parse(userStr);
    const firstName = user.name ? user.name.split(' ')[0] : 'User';
    if (loginLink)  loginLink.style.display  = 'none';
    if (logoutLink) logoutLink.style.display  = 'inline';
    if (ordersLink) ordersLink.style.display  = 'inline';
    if (helloUser) { helloUser.style.display = 'inline'; helloUser.textContent = `👋 Hi, ${firstName}!`; }
    
    // 🔥 FIX: ONLY restore cart if user just logged in AND cart is empty
    const justMerged = sessionStorage.getItem('cartMerged');
    const currentCart = getCart();
    
    if (!justMerged && currentCart.length === 0) {
      console.log('Calling restoreCartFromDB from updateNavAuth - cart is empty');
      restoreCartFromDB();
    } else {
      console.log('Skipping restoreCartFromDB - already has items or merged');
    }
  } else {
    if (loginLink)  loginLink.style.display  = 'inline';
    if (logoutLink) logoutLink.style.display  = 'none';
    if (ordersLink) ordersLink.style.display  = 'none';
    if (helloUser)  helloUser.style.display   = 'none';
    
    // Clear merge flag on logout
    sessionStorage.removeItem('cartMerged');
  }
}

// ─── LOGIN HANDLER ───
// ─── LOGIN HANDLER ───
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  if (!email || !password) return;
  
  // 🔥 SAVE CART BEFORE LOGIN
  const cartBeforeLogin = getCart();
  console.log('Saving cart before login:', cartBeforeLogin);
  if (cartBeforeLogin.length > 0) {
    localStorage.setItem('saved_cart', JSON.stringify(cartBeforeLogin));
  }
  
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // 🔥 RESTORE CART AFTER LOGIN
      const savedCart = localStorage.getItem('saved_cart');
      if (savedCart) {
        console.log('Restoring saved cart:', savedCart);
        saveCart(JSON.parse(savedCart));
        localStorage.removeItem('saved_cart');
        
        // Sync to DB
        await syncCartToDB();
      }
      
      window.location.href = 'index.html';
    } else {
      showToast(data.error || 'Login failed');
    }
  } catch (err) {
    showToast('Server error');
  }
});

// ─── REGISTER HANDLER ───
// ─── REGISTER HANDLER ───
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name')?.value;
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  
  if (!name || !email || !password) return;
  
  // 🔥 SAVE CART BEFORE REGISTRATION
  const cartBeforeRegister = getCart();
  if (cartBeforeRegister.length > 0) {
    localStorage.setItem('saved_cart', JSON.stringify(cartBeforeRegister));
  }
  
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    
    if (res.ok) {
      showToast('Registration successful! Please login.');
      // Cart is saved, will be restored after login
      window.location.href = 'login.html';
    } else {
      showToast(data.error || 'Registration failed');
    }
  } catch (err) {
    showToast('Server error');
  }
});

// ─── STARS ───
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) stars += `<span class="star ${i <= rating ? '' : 'empty'}">★</span>`;
  return stars;
}

// ─── CATEGORY FILTER ───
function filterCategory(category, btn) {
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
  });
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  updateNavAuth();
  updateCartCount();
  updateWishlistCount();
  
  // Check if user just logged in but cart wasn't merged
  const token = localStorage.getItem('token');
  const userCart = getCart();
  
  console.log('Init - Token exists:', !!token);
  console.log('Init - Current cart:', userCart);
  
  if (token && userCart && userCart.length > 0) {
    // This handles the case where page refreshes after login
    const justMerged = sessionStorage.getItem('cartMerged');
    if (!justMerged) {
      console.log('Init - Running merge for fresh login');
      mergeGuestCartOnLogin().then(() => {
        sessionStorage.setItem('cartMerged', 'true');
      });
    }
  }
});