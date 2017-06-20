$.ajax({
  type: 'POST',
  data: { cool: 'fire'},
  url: 'http://localhost:3000/',
  success: function(data) {
    console.log('data: ', data.cool);
  },
  error: function(a, b, c) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
  }
});