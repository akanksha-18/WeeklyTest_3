import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';
import './App.css';

const employees = [
  {"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
  {"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
  {"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
  {"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
  {"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
  {"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26},
  {"id":7,"first_name":"Minnaminnie","last_name":"Fransseni","email":"mfransseni6@aboutads.info","gender":"Agender","age":52},
  {"id":8,"first_name":"Fernando","last_name":"Pagon","email":"fpagon7@blogs.com","gender":"Male","age":40},
  {"id":9,"first_name":"Tiphanie","last_name":"Fenny","email":"tfenny8@sakura.ne.jp","gender":"Female","age":52},
  {"id":10,"first_name":"Nerti","last_name":"Try","email":"ntry9@shareasale.com","gender":"Female","age":43},
  {"id":11,"first_name":"Abagael","last_name":"Beadell","email":"abeadella@unc.edu","gender":"Female","age":76},
  {"id":12,"first_name":"Morten","last_name":"McNamee","email":"mmcnameeb@sun.com","gender":"Male","age":38},
  {"id":13,"first_name":"Domenico","last_name":"Shearman","email":"dshearmanc@seesaa.net","gender":"Male","age":66},
  {"id":14,"first_name":"Rodolphe","last_name":"Bittlestone","email":"rbittlestoned@51.la","gender":"Male","age":33},
  {"id":15,"first_name":"Merv","last_name":"Watterson","email":"mwattersone@storify.com","gender":"Male","age":37},
  {"id":16,"first_name":"Betty","last_name":"Simm","email":"bsimmf@engadget.com","gender":"Female","age":26},
  {"id":17,"first_name":"Rafaellle","last_name":"Brighouse","email":"rbrighouseg@vinaora.com","gender":"Male","age":43},
  {"id":18,"first_name":"Sibby","last_name":"Meanwell","email":"smeanwellh@independent.co.uk","gender":"Female","age":66},
  {"id":19,"first_name":"Ricky","last_name":"Sissland","email":"rsisslandi@google.it","gender":"Male","age":76},
  {"id":20,"first_name":"Sauveur","last_name":"Hessenthaler","email":"shessenthalerj@ocn.ne.jp","gender":"Male","age":48},
  {"id":21,"first_name":"Carmela","last_name":"Bucksey","email":"cbuckseyk@acquirethisname.com","gender":"Female","age":22},
  {"id":22,"first_name":"Nydia","last_name":"Folke","email":"nfolkel@disqus.com","gender":"Female","age":68},
  {"id":23,"first_name":"Asia","last_name":"Boake","email":"aboakem@1und1.de","gender":"Female","age":39},
  {"id":24,"first_name":"Sterne","last_name":"Jacobowitz","email":"sjacobowitzn@cbc.ca","gender":"Male","age":47},
  {"id":25,"first_name":"Alwin","last_name":"Krolak","email":"akrolako@springer.com","gender":"Male","age":58},
  {"id":26,"first_name":"Linn","last_name":"Copeman","email":"lcopemanp@google.nl","gender":"Male","age":37},
  {"id":27,"first_name":"Britni","last_name":"Gumley","email":"bgumleyq@wordpress.org","gender":"Female","age":56},
  {"id":28,"first_name":"Trumann","last_name":"Di Carli","email":"tdicarlir@xinhuanet.com","gender":"Male","age":62},
  {"id":29,"first_name":"Deeanne","last_name":"Gun","email":"dguns@umich.edu","gender":"Female","age":64},
  {"id":30,"first_name":"Fielding","last_name":"Begin","email":"fbegint@jalbum.net","gender":"Male","age":77},
  {"id":31,"first_name":"Elga","last_name":"Ruegg","email":"erueggu@abc.net.au","gender":"Female","age":35},
  {"id":32,"first_name":"Cesaro","last_name":"Clerk","email":"cclerkv@cbslocal.com","gender":"Male","age":37},
  {"id":33,"first_name":"Harold","last_name":"Davioud","email":"hdavioudw@spiegel.de","gender":"Male","age":42},
  {"id":34,"first_name":"Adrianne","last_name":"Sprankling","email":"aspranklingx@sciencedaily.com","gender":"Female","age":58},
  {"id":35,"first_name":"Friedrick","last_name":"Stenners","email":"fstennersy@irs.gov","gender":"Male","age":41},
  {"id":36,"first_name":"Nan","last_name":"Volette","email":"nvolettez@fc2.com","gender":"Female","age":27},
  {"id":37,"first_name":"Darci","last_name":"Keuneke","email":"dkeuneke10@xrea.com","gender":"Female","age":80},
  {"id":38,"first_name":"Doug","last_name":"Motton","email":"dmotton11@nationalgeographic.com","gender":"Male","age":56},
  {"id":39,"first_name":"Dudley","last_name":"Gabbett","email":"dgabbett12@sohu.com","gender":"Male","age":21},
  {"id":40,"first_name":"Flossie","last_name":"Oxburgh","email":"foxburgh13@fotki.com","gender":"Female","age":28},
  {"id":41,"first_name":"Lyon","last_name":"Nutton","email":"lnutton14@oaic.gov.au","gender":"Male","age":33},
  {"id":42,"first_name":"Izaak","last_name":"Summons","email":"isummons15@nsw.gov.au","gender":"Male","age":32},
  {"id":43,"first_name":"Marcellus","last_name":"Creasy","email":"mcreasy16@toplist.cz","gender":"Male","age":39},
  {"id":44,"first_name":"Willette","last_name":"Cranmore","email":"wcranmore17@sohu.com","gender":"Female","age":52},
  {"id":45,"first_name":"Nanice","last_name":"Sher","email":"nsher18@phpbb.com","gender":"Female","age":54},
  {"id":46,"first_name":"Marv","last_name":"Devin","email":"mdevin19@theatlantic.com","gender":"Male","age":52},
  {"id":47,"first_name":"Debby","last_name":"O'Concannon","email":"doconcannon1a@unicef.org","gender":"Female","age":63},
  {"id":48,"first_name":"Ruddie","last_name":"Drynan","email":"rdrynan1b@zimbio.com","gender":"Male","age":52},
  {"id":49,"first_name":"Herminia","last_name":"Cutmore","email":"hcutmore1c@meetup.com","gender":"Female","age":48},
  {"id":50,"first_name":"Elsbeth","last_name":"Burkitt","email":"eburkitt1d@seattletimes.com","gender":"Female","age":38}
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [sortedEmployees, setSortedEmployees] = useState(employees);

  const addToTeam = (employee) => {
    if (!team.includes(employee)) {
      setTeam([...team, employee]);
    }
  };

  const removeFromTeam = (employee) => {
    setTeam(team.filter((e) => e !== employee));
  };

  const calculateAverageAge = () => {
    if (team.length === 0) return 0;
    const totalAge = team.reduce((sum, member) => sum + member.age, 0);
    return (totalAge / team.length).toFixed(2);
  };

  const sortTeamByAge = () => {
    const sorted = [...team].sort((a, b) => a.age - b.age);
    setTeam(sorted);
  };

  return (
    <div className="app-container">
      <div className="employee-list">
        <h2>Employee List</h2>
        <ul>
          {sortedEmployees.map((employee) => (
            <li key={employee.id}>
              <span>{employee.first_name} {employee.last_name} ({employee.age})</span>
              <button onClick={() => addToTeam(employee)} disabled={team.includes(employee)} style={{backgroundColor:"blue"}}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="team-list">
        <h2>Team List</h2>
        <button className="sort-button" onClick={sortTeamByAge}>Sort by Age</button>
        <ul>
          {team.map((member) => (
            <li key={member.id}>
              <span>{member.first_name} {member.last_name} ({member.age})</span>
              <button onClick={() => removeFromTeam(member)} style={{backgroundColor:"red"}}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="average-age">Average Age: {calculateAverageAge()}</div>
      </div>
    </div>
  );
};

export default App;