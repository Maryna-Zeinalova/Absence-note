function renderNote () {
  let note = document.querySelector(".note-content");
  let date = document.getElementById("date").value;;
  let teacherGender = document.getElementById("teacher-gender").value;
  let teacherName = document.getElementById("teacher-name").value;
  let childGender = document.getElementById("child-gender").value;
  let childName = document.getElementById("child-name").value;
  let reason = document.getElementById("reason").value;;
  let parentName = document.getElementById("parent-name").value;
  let parentGender = document.getElementById("parent-gender").value;
  note.innerHTML = `
<p>${date}</p>
<p>Dear ${teacherGender} ${teacherName},</p>
<p>
  Please excuse my ${childGender}, ${childName} for being absent from
  school on ${date} due to the ${reason}.
</p>
<p>Thank you for your understanding.</p>
<p>Sincerely,<br />${parentName} <br />(${parentGender})</p>`;
}
