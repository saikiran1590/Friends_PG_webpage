document.getElementById("crud-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // We’ll add logic to submit to Google Sheets API soon
  document.getElementById("message").innerText = "Form submitted (mock).";
});

window.addEventListener('DOMContentLoaded', () => {
  const dateElement = document.getElementById('currentDate');
  const today = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  dateElement.textContent = today.toLocaleDateString('en-US', options);
});

function showCreateForm() {
  document.getElementById('crud-form').parentElement.style.display = 'block';
  document.getElementById('edit-user-form').style.display = 'none';
}

function showEditForm() {
  document.getElementById('crud-form').parentElement.style.display = 'none';
  document.getElementById('edit-user-form').style.display = 'block';
}

function searchUser() {
  const name = document.getElementById('search-name').value.trim();

  if (!name) {
    alert("Please enter a name to search.");
    return;
  }

  // Later we'll connect this to Google Sheets
  // Simulate found user
  if (name.toLowerCase() === "ashok mandala") {
    document.getElementById('edit-fields').style.display = 'block';
    document.getElementById('edit-id').value = "101";
    document.getElementById('edit-name').value = "Ashok Mandala";
    document.getElementById('edit-email').value = "ashok@example.com";
    document.getElementById('edit-age').value = "28";
  } else {
    alert("User not found.");
    document.getElementById('edit-fields').style.display = 'none';
  }
}

function showTotalCount() {
  // Later this will be replaced with a call to fetch data from Google Sheets
  const simulatedCount = 23; // 🔁 replace this with dynamic count
  const countDiv = document.getElementById("total-count-display");
  countDiv.textContent = `Total Users: ${simulatedCount}`;
  countDiv.style.display = 'block';

  // Optional: hide after few seconds
  setTimeout(() => {
    countDiv.style.display = 'none';
  }, 4000);
}
