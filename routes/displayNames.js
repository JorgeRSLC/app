module.exports = (req, res) => {
  res.render('allNamesView', { names: [
    { name: 'John Lennon' },
    { name: 'Paul McCartney' },
    { name: 'George Harrison' },
    { name: 'Ringo Star' }
  ] });
}