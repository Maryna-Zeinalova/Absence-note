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

// let note = document.querySelector('.note-content');
// note.innerHTML = `
// <p id="date-element">20.02.2023</p>
// <p>Dear <span id="teacher-gender-element">Mr.</span> <span id="teacher-name-element">Cooper</span>,</p>
// <p>
//   Please excuse my <span id="child-gender-element">son</span>, <span id="child-name-element">Leonard Hofstadter</span> for being absent from
//   school on <span id="absence-date-element">20.02.2023</span> due to the <span id="reason-element">family reasons</span>.
// </p>
// <p>Thank you for your understanding.</p>
// <p>Sincerely,<br /> <span id="parent-name-element">Beverly Hofstadter</span> <br />(<span id="parent-gender-element">mother</span>)</p>`