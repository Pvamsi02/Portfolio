import React from "react";
function About() {
  return (
    <div>
      <h1 className="text-center text-light">Wanted to Know About me</h1>
      <h1 className="text-center text-light">Welcome</h1>
      <div className="about-main justify-content-center">
        <p>
          Hello guys,
          <br /> Iam Chillara V L N S Pavana Vamsi <br />
          from Vellore Institute of Technology , Chennai <br />
          Currently in the final year of Computer Science Engineering
        </p>
        <ul className="list-inline ">
          <li className="list-inline-item">
            I’m currently finding my carrer in software development field.
          </li>
          <li>Iam currently working on Devolopment Projects.</li>
          <li>Iam exploring new fields in the software development.</li>
          <li>I had already learnt basic C, C++, Java, Python</li>
          <li>I will do Compitive Coding in C++</li>
          <li>
            Iam now intrested in moving towards Android Devolopment and Web
            Development{" "}
          </li>
        </ul>
        <h4 className="text-center text-light">Education</h4>
        <table className="table table-striped about-table">
          <thead>
            <tr>
              <th scope="col">Qualification</th>
              <th scope="col">Institute</th>
              <th scope="col">Grade</th>
              <th scope="col">Year of Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">B.tech</th>
              <td>Vellore Institute of Technology,Chennai</td>
              <td>9.17 CGPA</td>
              <td>2021 - Present</td>
            </tr>
            <tr>
              <th scope="row">12th</th>
              <td>Sri Chaitanya Junior College, Tenali</td>
              <td>969 / 1000</td>
              <td>2019 - 2021</td>
            </tr>
            <tr>
              <th scope="row">10th</th>
              <td>Sri Chaitanya Techno School, Tenali</td>
              <td>10 GPA</td>
              <td>2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
