const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  //console.log((students[0].name).);
  console.log(students.filter((p_obj)=> p_obj.gender=="female").map(x=>x.name));
  console.log(students.filter((p_obj)=> p_obj.name.charAt(0)=="A").map(x=>x.name));
  console.log(students.filter((p_obj)=> p_obj.gender=="male").map(x=>x.name).length);
//console.log('test');
//console.log(names.filter((val)=>{if (val.length >  6) return val.length)})
