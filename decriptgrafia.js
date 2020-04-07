function answer(str) {
  let resultado = [];
  for (let i=0; i < str.length; i++){
    let num = str.charCodeAt(i);

    if(num >= 65 && num <= 74){
      num += 16;
    } else if ( num >= 75 && num <= 98 ) {
      num -= 10;
    } 
    resultado.push(String.fromCharCode(num));
  }
  return resultado.join('').toLowerCase();
}
console.log(answer("IYE GKXD SD SX YXO VSXO? NYOC SD RKFO DY PSD SX 80 MYVEWXC? VKBBI GKVV"))
//[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Y,Z]
//decrypt("IYE GKXD SD SX YXO VSXO? NYOC SD RKFO DY PSD SX 80 MYVEWXC? VKBBI GKVV")o