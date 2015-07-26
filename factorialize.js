function factorialize(num)
{
    var result = num;
	for(var i = 1; i < num; i++) 
	{
		result = i * result;
	}
  console.log(result);
}

factorialize(5);