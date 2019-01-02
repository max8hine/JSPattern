const list = [
  {
    categoryid: 4,
    categoryname: 'Pending Approval',
    companyid: 2,
    companyname: 'Sample Client Company',
    duedate: '2017-05-25T00:00:00',
    id: 1,
    managerid: 1,
    managername: 'Max Ma',
    number: 1000,
    priority: 5,
    startdate: '2017-04-07T00:00:00',
    title: 'what!'
  },
  {
    categoryid: 4,
    categoryname: 'Pending Approval',
    companyid: 4,
    companyname: 'Max Entertainment',
    duedate: '2017-05-03T00:00:00',
    id: 2,
    managerid: 4,
    managername: 'Chevy Sharman',
    number: 1001,
    priority: 2,
    startdate: '2017-04-23T00:00:00',
    title: 'Double Click to edit the Project Name'
  },
  {
    categoryid: 2,
    categoryname: 'Current Projects',
    companyid: 4,
    companyname: 'Max Entertainment',
    duedate: '2017-04-30T00:00:00',
    id: 4,
    managerid: 4,
    managername: 'Chevy Sharman',
    number: 1002,
    priority: 4,
    startdate: '2017-04-22T00:00:00',
    title: 'Make a Moive'
  },
  {
    categoryid: 8,
    categoryname: 'Task Pool',
    companyid: 4,
    companyname: 'Max Entertainment',
    duedate: '2017-05-05T00:00:00',
    id: 5,
    managerid: 1,
    managername: 'Max Ma',
    number: 1003,
    priority: 4,
    startdate: '2017-04-24T00:00:00',
    title: 'Project 1'
  },
  {
    categoryid: 8,
    categoryname: 'Task Pool',
    companyid: 4,
    companyname: 'Max Entertainment',
    duedate: '2017-05-17T00:00:00',
    id: 6,
    managerid: 1,
    managername: 'Max Ma',
    number: 1004,
    priority: 5,
    startdate: '2017-04-24T00:00:00',
    title: 'Project 02'
  }
]
const searchText = '4'
const matchesFilter = new RegExp(searchText, 'i')
const filteredProject = list.filter(
  u =>
    !searchText ||
    matchesFilter.test(u.categoryname) ||
    matchesFilter.test(u.managername) ||
    matchesFilter.test(u.priority)
)
console.log(filteredProject)
