// 🔒 3 FIXED ACCOUNTS - EXACT DETAILS + NEW FILENAMES
const accounts = [
  {
    username: "chen@gmail.com",
    password: "chen1234",
    profilePage: "chennie.html"  // ✅ NEW FILE NAME
  },
  {
    username: "joanahRF@gmail.com",
    password: "january2006",
    profilePage: "Joanah.html"   // ✅ NEW FILE NAME
  },
  {
    username: "airaMmanuel@gmail.com",
    password: "airamae2005",
    profilePage: "aira.html"     // ✅ NEW FILE NAME
  }
];

// --- LOGIN FUNCTION: CHECK & DIRECT TO ASSIGNED FILE ---
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userInput = document.getElementById('userInput').value.trim();
      const passInput = document.getElementById('loginPassword').value.trim();
      const errorMsg = document.querySelector('.error-msg');

      const validAccount = accounts.find(acc => 
        acc.username === userInput && acc.password === passInput
      );

      if (validAccount) {
        // ✅ GOES TO YOUR NEW FILE NAME
        window.location.href = validAccount.profilePage;
      } else {
        errorMsg.textContent = "Wrong email or password! Use assigned details only.";
        errorMsg.style.display = "block";
      }
    });
  }
});

// --- NAVBAR ---
function updateNav() {
  const loginLink = document.querySelector('.btn-login');
  const signupLink = document.querySelector('.btn-signup');
  const logoutBtn = document.querySelector('.btn-logout');
  if (loginLink) loginLink.style.display = 'inline-block';
  if (signupLink) signupLink.style.display = 'none';
  if (logoutBtn) logoutBtn.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', updateNav);