let note = document.querySelector('.note-content');

let date = '18.02.2023';
let teacherGender = 'Mr.';
let teacherName = 'Cooper';
let childGender = 'son';
let childName = 'Leonard Hofstadter';
let reason = "family reasons";
let parentName = 'Beverly Hofstadter';
let parentGender = 'mother';

note.innerHTML = `
<p>${date}</p>
<p>Dear ${teacherGender} ${teacherName},</p>
<p>
  Please excuse my ${childGender}, ${childName} for being absent from
  school on ${date} due to the ${reason}.
</p>
<p>Thank you for your understanding.</p>
<p>Sincerely,<br />${parentName} <br />(${parentGender})</p>`