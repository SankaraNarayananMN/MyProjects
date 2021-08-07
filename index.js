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
/*
Shadowing
shadowing occurs when a variable is declared in certain scope has the same name defined on its outer scope. And when we call the variable from the inner scope, the value mentioned in inner scope will be considered.
Illegal Shadowing: Now, while shadowing a variable, it should not cross the boundary of the scope, i.e., we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing, and it will give the error as “variable is already defined.” 
However, a variable declared with let, const and var can shadow a global scoped let, const and var variable
Dead Zone 
    Dead Zone where we’re trying to access a variable that has not yet been initialized (it has been declared and therefore exists, but has no value, not even undefined). It’s common to hear the phrase, “let/const don’t hoist” as a shorthand to remember this behaviour. But technically something else is going on.
When we use the var keyword, two things actually happen:
1.	at compile time, the variable is added to the enclosing lexical scope
2.	at runtime, when the scope is entered any variables added to the lexical environment are initialized to the undefined value, so they are available to use in the scope
The let and const keywords do step 1–so technically they do hoist–but not step 2, the assignment to undefined. Therefore, it’s more accurate to say that let/const do hoist but don’t get initialized.
The end result is the same. Just remember that when using let/const you should always move variable declarations to the top of your scope to avoid the temporal dead zone.
*/
