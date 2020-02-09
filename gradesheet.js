function call()
{
	var h=parseInt(hin.value)
	var e=parseInt(eng.value)
	var m=parseInt(mat.value)
	var p=parseInt(phy.value)
	var c=parseInt(chem.value)
	var total=h+e+m+p+c
	var per=total/5
	var sal=''
	var dors=''
	var remh=''
	var reme=''
	var remm=''
	var remp=''
	var remc=''
	var res=''
	if(gf.checked)
	{sal="Ms."
	dors="d/o"}
	if(mf.checked)
	{sal="Mr."
	dors="s/o"}

	switch(
				(per>60 && per<=100)? 1:
				(per>50 && per<60)? 2:
				(per>40 && per<50)? 3: 0
			  )
			  {
				  case 1:res="First class";
				  break;
				  case 2:res="Second class";
				  break;
				  case 3: res="Third class";
				  break;
				  case 0: res="Fail";
				  break;
		  }
	if(h<35)
	remh='*'
	else if(h>75)
	remh='d'
	if(e<35)
	reme='*'
	else if(e>75)
	reme='d'
	if(m<35)
	remm='*'
	else if(m>75)
	remm='d'
	if(p<35)
	remp='*'
	else if(p>75)
	remp='d'
	if(c<35)
	remc='*'
	else if(c>75)
	remc='d'


	result.innerHTML="<center><h2 style='color:grey;'>Gradesheet</h2><table border='1' width='60%'><tr><td align='center'><img src='cbse.jpg' width='100px' height='100px'></td><td align='center'><h1>Central  Board  of  Secondary  Education</h1></td></tr></table><br><br><table border='1' width='60%'><tr><td><b>"+sal+" "+n.value+" "+dors+" Shri. "+fn.value+"<br></td></tr><tr><td>"+sn.value+"</b></td></tr></table><br><br><table border='1' width='60%'><tr><th>Subject Code</th><th>Subject</th><th>Minimum</th><th>Maximum</th><th>Marks obtained</th><th>Remarks</th></tr><tr><td>HIN1001</td><td>Hindi</td><td align='center'>35</td><td align='center'>100</td><td align='center'>"+h+"</td><td align='center'>"+remh+"</td></tr><tr><td>ENG1002</td><td>English</td><td align='center'>35</td><td align='center'>100</td><td align='center'>"+e+"</td><td align='center'>"+reme+"</td></tr><tr><td>MAT1003</td><td>Maths</td><td align='center'>35</td><td align='center'>100</td><td align='center'>"+m+"</td><td align='center'>"+remm+"</td></tr><tr><td>PHY1004</td><td>Physics</td><td align='center'>35</td><td align='center'>100</td><td align='center'>"+p+"</td><td align='center'>"+remp+"</td></tr><tr><td>CHE1005</td><td>Chemistry</td><td align='center'>35</td><td align='center'>100</td><td align='center'>"+c+"</td><td align='center'>"+remc+"</td></tr></table><br><br>Marks: "+total+"/500<br>Percentage: "+per+"%<br>Result: "+res+"</center>"
}
