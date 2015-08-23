function where(collection, source) {
  var arr = [];
  for( var i = 0; i < collection.length; i ++ ) {
		if ( collection[i].last === source.last) {
			arr.push(collection[i]);
		}
	}
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });