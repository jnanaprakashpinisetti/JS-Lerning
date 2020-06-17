var stunents = [

  {
    name: 'Prakash',
    id: 101,
    gender: "male",
    class: 10
  },
  {
    name: 'Kalyani',
    id: 102,
    gender: "female",
    class: 10
  },
  {
    name: 'Sudheer',
    id: 103,
    gender: "male",
    class: 10
  },
  {
    name: 'Rama Lakshmi',
    id: 101,
    gender: "female",
    class: 10
  },

];

function getFemale() {
  for (var i = 0; i <= stunents.length-1; i++) {
    if (stunents[i].gender === 'female') {

      console.log(stunents[i].name);
      // document.querySelector("#female").innerHTML = stunents[i].name
    
    

    }

    // document.getElementById('female').innerText=stunents;
  }
  document.getElementById("female").innerHTML =  stunents[i].name
}

getFemale()
