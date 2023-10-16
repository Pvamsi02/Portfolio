import React from "react";
function Project() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="project-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Language</th>
            <th scope="col">Project Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atm Interface</td>
            <td>Java</td>
            <td>
              <a href="https://github.com/Pvamsi02/ATM_Interface">Link</a>
            </td>
          </tr>
          <tr>
            <td>Fee Report</td>
            <td>Java</td>
            <td>
              <a href="https://github.com/Pvamsi02/CodeClauseInternship_Fees_Report">Link</a>
            </td>
          </tr>
          <tr>
            <td>Currency Converter</td>
            <td>Java</td>
            <td><a href="https://github.com/Pvamsi02/LGMVIP-Java-CurrencyConverter">Link</a></td>
          </tr>
          <tr>
            <td>Number Guess</td>
            <td>Java</td>
            <td><a href="https://github.com/Pvamsi02/Number-Guess-Game">Link</a></td>
          </tr>
          <tr>
            <td>Scientific Calculator</td>
            <td>Java</td>
            <td><a href="https://github.com/Pvamsi02/LGMVIP-Java-Scientific_Calculator">Link</a></td>
          </tr>
          <tr>
            <td>Tic Tac Toe</td>
            <td>Java</td>
            <td><a href="https://github.com/Pvamsi02/LGMVIP-Java-TicTacToe-WebApp">Link</a></td>
          </tr>
          <tr>
            <td>Calculator</td>
            <td>Android Java</td>
            <td><a href="https://github.com/Pvamsi02/Calculator">Link</a></td>
          </tr>
          <tr>
            <td>Temperature Converter</td>
            <td>Android Java</td>
            <td><a href="https://github.com/Pvamsi02/Temperature_Converter">Link</a></td>
          </tr>
          <tr>
            <td>Tic Tac Toe</td>
            <td>Android Java</td>
            <td><a href="https://github.com/Pvamsi02/TicTacToe_PV">Link</a></td>
          </tr>
        </tbody>
      </table>
      </div>
      <br />
    </div>
  );
}

export default Project;
