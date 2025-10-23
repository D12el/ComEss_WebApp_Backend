async function test1(){
    const result = await fetch(`http://127.0.0.1:3222/players/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({playerId: 1, name: "Tontoey", avatarId: 2, highestScore: 0}),
    });
    console.log(result);
}

async function test2(){
    const results = await fetch(`http://127.0.0.1:3222/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: "ananannana"}),
      }).then(r => (r.json()));
      console.log(results);
}

async function test3(){
  const result = await fetch(`http://127.0.0.1:3222/gameresults/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({gameId: 1, playerId: 1, score: 100, time: Date.now()}),
  });
  console.log(result);
}

async function test4(){
  const topplayers = await fetch(`http://127.0.0.1:3222/players/leaderboard`).then((r) => r.json());
  console.log(topplayers);
}

async function test5(){
  const result = await fetch(`http://127.0.0.1:3222/players/sethigh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: "Tontoey", newHigh: 3000}),
  });
  console.log(result);
}

async function test6(){
  const result = await fetch(`http://127.0.0.1:3222/players/setavatar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: "Tontoey", avatarId: 10}),
  });
  console.log(result);
}

// test1();
test2();
// test3();
// test4();
// test5();
// test6();