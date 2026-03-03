// ================= SELECT ELEMENTS =================
const form = document.querySelector("form");
const username = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const container = document.querySelector(".card-grid");

// ================= USER MANAGER =================
const usermanager = {
  user: [],

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.adduser();
  },

  adduser: function () {
    // Basic validation
    if (!username.value || !role.value || !bio.value || !photo.value) {
      alert("All fields are required");
      return;
    }

    this.user.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderui();
  },

  renderui: function () {
    container.innerHTML = "";

    this.user.forEach((user, index) => {
      // Card
      const card = document.createElement("div");
      card.className = "user-card";

      // Avatar
      const avatar = document.createElement("div");
      avatar.className = "avatar";

      const img = document.createElement("img");
      img.src = user.photo;
      img.alt = user.username;

      avatar.appendChild(img);

      // Name
      const name = document.createElement("h3");
      name.textContent = user.username;

      // Role
      const roleEl = document.createElement("p");
      roleEl.className = "role";
      roleEl.textContent = user.role;

      // Bio
      const bioEl = document.createElement("p");
      bioEl.className = "bio";
      bioEl.textContent = user.bio;

      // Remove Button
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "Remove";

      removeBtn.addEventListener("click", () => {
        this.removeuser(index);
      });

      card.append(avatar, name, roleEl, bioEl, removeBtn);
      container.appendChild(card);
    });
  },

  removeuser: function (index) {
    this.user.splice(index, 1);
    this.renderui();
  },
};

// ================= INIT =================
usermanager.init();
