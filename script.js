function calculateResult() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  const resultBox = document.getElementById("result");

  if (!q1 || !q2 || !q3 || !q4) {
    resultBox.textContent =
      "Harap jawab semua pertanyaan sebelum melihat hasil.";
    resultBox.className = "result-empty";
    return;
  }

  const score =
    Number(q1.value) + Number(q2.value) + Number(q3.value) + Number(q4.value);

  if (score <= 6) {
    resultBox.textContent =
      "Tingkat kecanduan rendah. Kebiasaan bermainmu masih cukup sehat, tetapi tetap perhatikan waktu dan pola bermain.";
    resultBox.className = "result-low";
  } else if (score <= 12) {
    resultBox.textContent =
      "Tingkat kecanduan sedang. Coba mulai mengatur waktu bermain dan menambahkan aktivitas non-game dalam rutinitas harianmu.";
    resultBox.className = "result-medium";
  } else {
    resultBox.textContent =
      "Tingkat kecanduan tinggi. Disarankan untuk segera mengurangi durasi bermain dan mencari dukungan untuk menjaga keseimbangan digital.";
    resultBox.className = "result-high";
  }

  lockQuizAnswers();
}

function lockQuizAnswers() {
  const inputs = document.querySelectorAll(".question-box input[type='radio']");
  const button = document.querySelector(".question-box button");

  inputs.forEach((input) => {
    input.disabled = true;
  });

  if (button) {
    button.disabled = true;
  }
}

function scrollToTest() {
  document.getElementById("selfcheck").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
