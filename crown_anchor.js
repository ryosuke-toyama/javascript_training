let funds = 50; //開始条件

while(funds > 1 && funds < 100){
  function rand(m,n){
    return m + Math.floor((n - m + 1)*Math.random());
  }
  function randFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rand(0,5)];
  }

  //賭ける
  const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
  let totalBet = rand(1, funds);
  if(totalBet === 7){
    totalBet = funds;
    bets.heart = totalBet;
  }else{
    //賭け金をランダムに分ける
    let remaining = totalBet;
    do {
      let bet = rand(1, remaining);
      let face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
    }while(remaining > 0);
  }
  funds = funds - totalBet;

  //サイコロを降る
  const hand = [];
  for(let roll = 0; roll < 3; roll++){
    hand.push(randFace());
  }

  //払戻金をもらう
}