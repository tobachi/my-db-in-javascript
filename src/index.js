class table {
  constructor(name, columns) {
    this.name = name
    this.columns = columns
    this.taples = []
  }

  select(params) {
    return params == '*' ? this.taples : ''
  }

  insert(params) {
    this.taples.add(...params)
  }

}

function create(name, columns) {
  return new table(name, columns)
}

let person = create('person', ['id', 'name', 'age'])

person.insert(['1', 'Tanaka', '20'])
person.insert(['2', 'Sato', '30'])
person.insert(['3', 'Suzuki', '40'])

console.log(person.select('*'))

