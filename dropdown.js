function call()
{
	index=company.selectedIndex
	removeitems()
	switch(index)
	  {case 1:
	    var sammodels=['-Models-','Wave','Galaxy','Ace']
	    additems(sammodels)
	    break
	   case 2:
	    var mimodels=['-Models-','MI4','MI5','MI6']
	    additems(mimodels)
	    break
	   case 3:
	    var redmodels=['-Models-','Lumia','6.1','S30']
	    additems(redmodels)
	    break

  }
}

function additems(models)
{
	for(i=0;i<models.length;i++){
		opt=document.createElement('option')
		opt.text=models[i]
		model.add(opt)
	}
}

function removeitems(){
	for(j=model.options.length-1;j>=0;j--)
	      {model.remove(j)
	  }
}

function showdetails(){
	index1=company.selectedIndex
	index2=model.selectedIndex
	img=''
	price=''
	if(index1==1){
	switch(index2)
	{
		case 1:
		img.src='wave.jpg'
		price=5000
		break;

		case 2:
		img.src='galaxy.jpg'
		price=7000
		break;

		case 3:
		img.src='ace.png'
		price=12000
		break;

	}
	display(img,price)

	}
	if(index1==2){
		switch(index2)
		{
			case 1:
			img.src='mi4.jpg'
			price=5000
			break;

			case 2:
			img.src='mi5.jpg'
			price=7000
			break;

			case 3:
			img.src='mi6.jpg'
			price=12000
			break;

		}
		display(img,price)

	}
	if(index1==3){
		switch(index2)
		{
			case 1:
			img.src='lumia.jpg'
			price=5000
			break;

			case 2:
			img.src='s30.jpg'
			price=7000
			break;

			case 3:
			img.src='6.1.jpg'
			price=12000
			break;

		}
		display(img,price)

	}
}

function display(imgs,prices){
	details.innerHTML="<br><br><img src='"+img+"' height='100px' width='80px' alt='my img'><br>Price: "+price
}
