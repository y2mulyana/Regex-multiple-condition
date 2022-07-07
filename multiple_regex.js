// This is testing target
const target = ['aa_',
'u__hello_world123',
'_abah1235',
'2564_acadg',
'jkhkjhkjFGjbkmn64654_kjhjhjhbjhb',
'Hello_wo25rLd',
'u_hello_world12_',
'u_hello_world1d2',
'u__hello_world12kjkitrewr',
'aa_2'];

// This is validation function
function userValidation(userName) {
  target.reduce((a,b) => {
    test = b.match(/(^[a-zA-Z])([a-zA-Z0-9_]{2,23})[^_]$/);
      if(test !== null){
        console.log(b + ' : True')
      } else {
        console.log(b + ' : False')
      }
  },0)
};

// This is how to use it in console
userValidation(target);
