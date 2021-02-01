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
  mugshot: '',
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
const nameItem = document.getElementById('name');
const bioItem = document.getElementById('bio');
const interestOneItem = document.getElementById('interestOne');
const interestTwoItem = document.getElementById('interestTwo');
const githubHandleItem = document.getElementById('githubHandle');

nameItem.innerHTML = putData.name;
bioItem.innerHTML = putData.bio;
interestOneItem.innerHTML = putData.other.sport;
interestTwoItem.innerHTML = putData.other.muziek;
githubHandleItem.innerHTML = 'https://github.com/' + putData.githubHandle;
githubHandleItem.href = 'https://github.com/' + putData.githubHandle;