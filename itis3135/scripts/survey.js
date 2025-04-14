document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        alert("Please fill out all required fields!");
        return;
      }
  
      const name = document.getElementById("name").value;
      const mascot = document.getElementById("mascot").value;
      const image = document.getElementById("image").files[0];
      const caption = document.getElementById("caption").value;
      const personal = document.getElementById("personal").value;
      const professional = document.getElementById("professional").value;
      const academic = document.getElementById("academic").value;
      const webdev = document.getElementById("webdev").value;
      const platform = document.getElementById("platform").value;
      const funny = document.getElementById("funny").value;
      const other = document.getElementById("other").value;
      const courses = Array.from(document.getElementsByClassName("course-box"))
                           .map(c => c.value)
                           .filter(val => val.trim() !== "");
  
      const reader = new FileReader();
      reader.onload = () => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
          <section>
            <h2>Hi, my name is ${name} and my mascot is the ${mascot}!</h2>
            <figure>
              <img src="${reader.result}" width="300" alt="User uploaded image">
              <figcaption>${caption}</figcaption>
            </figure>
            <p><strong>Personal Background:</strong> ${personal}</p>
            <p><strong>Professional Background:</strong> ${professional}</p>
            <p><strong>Academic Background:</strong> ${academic}</p>
            <p><strong>Web Development Experience:</strong> ${webdev}</p>
            <p><strong>Primary Computer Platform:</strong> ${platform}</p>
            <p><strong>Courses Currently Taking:</strong><ul>${courses.map(c => `<li>${c}</li>`).join("")}</ul></p>
            <p><strong>Funny Thing:</strong> ${funny}</p>
            <p><strong>Anything Else:</strong> ${other}</p>
            <button onclick="window.location.reload()">Reset and Start Over</button>
          </section>
        `;
        form.style.display = "none";
      };
      reader.readAsDataURL(image);
    });
  });
  
  function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const entry = document.createElement("div");
    entry.className = "course-entry";
    entry.innerHTML = `<input type="text" name="courses" class="course-box" />`;
    coursesDiv.insertBefore(entry, coursesDiv.children[coursesDiv.children.length - 2]);
  }
  
  function removeCourse() {
    const entries = document.querySelectorAll(".course-entry");
    if (entries.length > 1) {
      entries[entries.length - 1].remove();
    }
  }
  