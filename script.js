document.addEventListener("DOMContentLoaded", function () {

  // EXPENSE TRACKER 
  const titleInput = document.getElementById('title');
  const amountInput = document.getElementById('amount');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('list');
  const totalEl = document.getElementById('total');
  const message = document.getElementById('message');

  let expenses = [];

  if (addBtn) {
    addBtn.addEventListener('click', function () {
      const title = titleInput.value.trim();
      const amount = Number(amountInput.value);

      if (title === '' || amount <= 0) {
        message.textContent = 'Fadlan geli xog sax ah';
        return;
      }

      message.textContent = '';

      const expense = { title, amount };
      expenses.push(expense);

      displayExpenses();
      titleInput.value = '';
      amountInput.value = '';
    });
  }

  function displayExpenses() {
    if (!list) return;

    list.innerHTML = '';
    let total = 0;

    expenses.forEach(function (exp) {
      const li = document.createElement('li');
      li.textContent = exp.title + ' - $' + exp.amount;
      list.appendChild(li);

      total += exp.amount;
    });

    if (totalEl) totalEl.textContent = total;
  }

  // ===== CONTACT FORM =====
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }

});


document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMsg").textContent =
  "Message sent successfully!";
});