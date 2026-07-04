// Savatcha soni
let cartCount = 0;

// Savatcha tugmasi
const cartBtn = document.getElementById("cartBtn");

// Barcha tugmalar
const buttons = document.querySelectorAll(".product button");

// Har bir tugmaga hodisa qo'shish
buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartBtn.textContent =  Savatcha ({cartCount});

        alert(" Mahsulot savatchaga qo'shildi!");
    });
});

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("h2").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");

cartBtn.onclick = () => {
    cartModal.style.display = "block";
};

closeCart.onclick = () => {
    cartModal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
};

const checkoutBtn = document.getElementById("checkoutBtn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const product = button.parentElement;
        const name = product.dataset.name;
        const price = Number(product.dataset.price);

        const li = document.createElement("li");
        li.innerHTML = 
            ${name} - ${price.toLocaleString()} som
            <button class="remove-btn"></button>
        ;

        cartItems.appendChild(li);

        total += price;
        totalPrice.textContent = total.toLocaleString();

        li.querySelector(".remove-btn").onclick = () => {
            li.remove();
            total -= price;
            totalPrice.textContent = total.toLocaleString();
        };

    });

});

checkoutBtn.onclick = () => {
    if (total === 0) {
        alert(" Savatcha bo'sh!");
    } else {
        alert("Buyurtmangiz qabul qilindi!");
    }
};

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

loginBtn.onclick = () => {
    const username = prompt("Foydalanuvchi nomini kiriting:");
    const password = prompt("Parolni kiriting:");

    if (username && password) {
        alert(Xush kelibsiz, ${username}!);
    } else {
        alert("Login bekor qilindi.");
    }
};

registerBtn.onclick = () => {
    const username = prompt("Yangi foydalanuvchi nomi:");
    const password = prompt("Yangi parol:");

    if (username && password) {
        alert("Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!");
    } else {
        alert("Ro'yxatdan o'tish bekor qilindi.");
    }
};

// ❤️ Like tugmalari
const likeButtons = document.querySelectorAll(".likeBtn");

likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

// 🌙 Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ⭐ Reyting
document.querySelectorAll(".rating").forEach(rating => {

    const stars = rating.querySelectorAll(".star");

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            stars.forEach((s, i) => {
                s.classList.toggle("active", i <= index);
            });

        });

    });

});

// 💬 Izoh
document.querySelectorAll(".sendComment").forEach(button => {

    button.addEventListener("click", () => {

        const text = button.previousElementSibling.value;

        if(text.trim() !== ""){
            alert("✅ Izoh yuborildi!");
            button.previousElementSibling.value = "";
        }else{
            alert("Izoh kiriting.");
        }

    });

});

registerBtn.onclick = () => {

    const username = prompt("Foydalanuvchi nomi:");
    const password = prompt("Parol:");

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("✅ Ro'yxatdan o'tdingiz!");
    }

};

registerBtn.onclick = () => {
    // eski register kodi
};

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.onclick = () => {

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    alert("🚪 Tizimdan chiqdingiz.");

};

const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    alert(
        ✅ Buyurtma qabul qilindi!\n\n +
        Ism: ${fullName}\n +
        Manzil: ${address}\n +
        Telefon: ${phone}
    );

    checkoutForm.reset();
});

const orderHistory = document.getElementById("orderHistory");
const couponBtn = document.getElementById("couponBtn");
const coupon = document.getElementById("coupon");

// Buyurtma tarixiga qo'shish
checkoutForm.addEventListener("submit", (e) => {

    const li = document.createElement("li");

    li.textContent = ${fullName.value} - ${total.toLocaleString()} so'm;

    orderHistory.appendChild(li);

});

// Kupon
couponBtn.onclick = () => {

    if(coupon.value === "SALE10"){

        total *= 0.9;

        totalPrice.textContent = total.toLocaleString();

        alert("✅ 10% chegirma qo'llandi!");

    }else{

        alert("❌ Kupon noto'g'ri!");

    }

};



