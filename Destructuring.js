const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white']

// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

const [color1, color2, color3] = colors

// const [,,,color4] = colors
const { 3: color4, 5: color5 } = colors

const user = {
  name: 'Anurag',
  age: 25,
  address: {
    city: 'Bangalore',
    state: 'Karnataka',
  },
}
// const name = user.name
// const age = user.age

const { name, age } = user

