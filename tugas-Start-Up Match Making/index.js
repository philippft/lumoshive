function splitJobCharacters(str) {
  // Your code here
  // console.log(str);
    let a = "";
    let b = []; 
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-" || str[i] === ",") {
            b[j] = a.toLowerCase();
            j++;
            a = "";
            // continue;
        } else {
            a += str[i]; 
        }
    }
    b[j] = a;
    if (b.length / 2 < 3) {
        return "Minimum 3 members in the team";
    }
    // console.log("Hasil Split Job Characters:");
    // console.log(b);
    return reverseJobCharacters(b);
}


function reverseJobCharacters(arr) {
  // Your code here
  console.log(arr);
    let b = [];

    for (let i = 0; i < arr.length; i++) {
        if (i %2 ==  1) {
            let sesudah = "";
            let sebelum = arr[i];
            // console.log(sebelum);
            for (let j = sebelum.length - 1; j >= 0; j--) {
                sesudah += sebelum[j];
            }
            // str  (sebelum)
            // rts (sesudah)
            // console.log(sesudah);
            b[i] = sesudah; // ganjil 1 3 5
        } else {
            b[i] = arr[i]; // genap 0 2 4
        }
    }
    // console.log("Hasil Reverse Job Characters:");
    // console.log(b);
    return decryptJobCharacters(b);
}

function decryptJobCharacters(arr) {
  // Your code here
  // console.log(arr);
    // let b = [];
    let suit = "";
    for (let i = 0; i < arr.length; i++) {
        if (i %2 ==  1) {
            let a = arr[i]; // sfmutvi
            let b = "";
            let c = 0;

            for (let j = 0; j < a.length; j++) {    
                c = a.charCodeAt(j); 
                b += String.fromCharCode(c - 1);
            }


            if (b === "hacker" || b === "hipster" || b === "hustler") {
                suit = "Match your Dream Start-Up Team";
            } else {
              suit = "The job composition in the team is not suitable";
            }
            
            arr[i] = b;
          }    
    }
    console.log(suit);
    // console.log("Hasil Decrypt Job Characters:");
    // console.log(arr);
    
    return makingDreamTeam(arr);
}

function makingDreamTeam(arr) {
  // Your code here

  let a = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
      if (i %2 == 1) {
          continue;
      }
      let b = [];
      for (let j = 0; j < 2; j++) {
          b[j] = arr[i + j];
      }
      a[k] = b;
      k++;
  }
  console.log("Hasil Making Dream Team:");
  return a;
}

function startUpMatchMaking(str) {
  // Your code here
  return splitJobCharacters(str);
}

console.log(startUpMatchMaking("idaz-sfmutvi,anggara-sfutqji,fika-sfldbi"));
// // Match your Dream Start-Up Team
// console.log(
//   startUpMatchMaking(
//     "eko-sfldbi,fajrin-sfmutvi,abdullah-sfutqji,anggara-sfutqji"
//   )
// );
// // Match your Dream Start-Up Team
// console.log(
//   startUpMatchMaking(
//     "abdullah-sfldbi,fajrin-sfmutvi,samir-sfldbi,eko-sfmutvi,basil-sfmutvi"
//   )
// );
// // The job composition in the team is not suitable
// console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji,eko-sfmutvi"));
// // The job composition in the team is not suitable
// console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji"));
// // Minimum 3 members in the team