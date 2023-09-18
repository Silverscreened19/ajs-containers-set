import Team from '../app';
import Character from '../characters';

test('add new unique member', () => {
  const newMember = new Character('Jane');
  const newTeam = new Team();
  newTeam.add(newMember);

  expect(newTeam.members).toEqual(new Set([{ name: 'Jane' }]));
});

test('add existing member', () => {
  const newMember = new Character('Jane');
  const newTeam = new Team();
  newTeam.add(newMember);

  expect(() => newTeam.add(newMember)).toThrow(`${newMember.name} is already in the team`);
});

test('add bunch of members', () => {
  const newMember = new Character('Jane');
  const secondMember = new Character('John');
  const thirdMember = new Character('Gill');
  const newTeam = new Team();
  newTeam.addAll(newMember, secondMember, thirdMember);

  expect(newTeam.members).toEqual(new Set([
    { name: 'Jane' },
    { name: 'John' },
    { name: 'Gill' },
  ]));
});

test('array from set', () => {
  const newMember = new Character('Jane');
  const secondMember = new Character('John');
  const thirdMember = new Character('Gill');
  const newTeam = new Team();
  newTeam.addAll(newMember, secondMember, thirdMember);

  expect(newTeam.toArray()).toEqual([
    { name: 'Jane' },
    { name: 'John' },
    { name: 'Gill' },
  ]);
});
