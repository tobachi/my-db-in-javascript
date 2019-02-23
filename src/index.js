class table {
  constructor(name, columns) {
    this.name = name
    this.columns = columns
    this.taples = []
  }

  insert(params) {
    this.taples.push(params)
  }

  select(params) {
    show(this.columns)
    params == '*' ? this.taples.forEach(taple => show(taple)) : show('')
  }

}

function create(name, columns) {
  return new table(name, columns)
}

function show(params) {
  let str = '|'
  params.forEach(value => {str += value + '|'})
  console.log(str)
}

let person = create('person', ['id', 'name', 'age'])
console.log('create table person(id, name, age)')

person.insert(['P001', 'Tanaka', 20])
console.log('insert into person(id, name, age) values(\'P001\', \'Tanaka\', 20)')

person.insert(['P002', 'Sato', 30])
console.log('insert into person(id, name, age) values(\'P002\', \'Sato\', 30)')

person.insert(['P003', 'Suzuki', 40])
console.log('insert into person(id, name, age) values(\'P003\', \'Suzuki\', 40)')

console.log('select * from person')
person.select('*')

