const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api';
const squad = 2;
const team = 5;
const name = 'Ralf';

// GET REQUEST
const teams = fetch(`${url}/squads/${squad}/teams/${team}/members?name=${name}`)
  .then((response) => response.json())
  .then((data) => console.log('fetch', data));

// PUT REQUEST
const putData = {
  id: 4,
  teamId: 5,
  name: 'Ralf',
  prefix: '',
  surname: 'Zonneveld',
  mugshot:
    'https://avatars.githubusercontent.com/u/55750121?s=460&u=513e912aabf1c0f243452518e8dd740a31b5b164&v=4',
  githubHandle: 'ralfz123',
  bio:
    'Ik ben een CMD-student en ik ben 21 jaar. Bovendien ben ik door de jaren heen echt gaan houden van HTML, CSS en JavaScript schrijven. Vakken als Project Tech en Tech-Track heb ik dan ook zeker gevolgd',
  other: {
    sport: 'Fitness',
    muziek: 'Hip-Hop',
    werkplek: 'Thuis',
  },
};

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postData(`${url}/squads/1/teams/3/members/id`, putData).then((data) => {
  console.log('put', data);
});

// Replacing HTML elements with data - mockAPI does not work because over rate limit
const imageItem = document.getElementById('mugshot');
const nameItem = document.getElementById('name');
const bioItem = document.getElementById('bio');
const interestOneItem = document.getElementById('interestOne');
const interestTwoItem = document.getElementById('interestTwo');
const githubHandleItem = document.getElementById('githubHandle');

mugshot.src = putData.mugshot;
nameItem.innerHTML = putData.name;
bioItem.innerHTML = putData.bio;
interestOneItem.innerHTML = putData.other.sport;
interestTwoItem.innerHTML = putData.other.muziek;
githubHandleItem.innerHTML = 'https://github.com/' + putData.githubHandle;
githubHandleItem.href = 'https://github.com/' + putData.githubHandle;


// ------

// this code works
// const path = `https://601803ee971d850017a3f625.mockapi.io/members`

// async function main() {
//   const me = await getData(path)

//   putData(path + '/' + me[0].id, me[0])
//     .then(data => {
//       console.log('put', data);
//     });

//   // postData(path, temp)
//   //   .then(data => {
//   //     console.log('post', data);
//   //   });


//   // del(path + '/8')
//   //   .then(data => {
//   //     console.log('del', data);
//   //   });
// }

// main()


// async function getData(url) {
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => data.map(member => member.name == 'Ralf' ? {
//       id: member.id,
//       teamId: member.teamId,
//       name: member.name,
//       prefix: member.name,
//       surname: member.surname,
//       mugshot: 'https://avatars.githubusercontent.com/u/55750121?s=460&u=513e912aabf1c0f243452518e8dd740a31b5b164&v=4',
//       githubHandle: 'ralfz123',
//       other: {
//         skills: {
//           html: 4,
//           css: 4,
//           js: 2
//         },
//         bio: 'Ik ben een CMD-student en ik ben 21 jaar. Bovendien ben ik door de jaren heen echt gaan houden van HTML, CSS en JavaScript schrijven. Vakken als Project Tech en Tech-Track heb ik dan ook zeker gevolgd'
//       }
//     } : false).filter(item => typeof item === 'object'))

// }


// async function postData(url, data) {
//   console.log(data)
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// async function putData(url, data) {
//   console.log(data)
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// async function del(url, data) {
//   const response = await fetch(url, {
//     method: 'DELELTE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }