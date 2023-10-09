let show=()=>{
    let math=document.getElementById("maths").value;
    let sci=document.getElementById("science").value;
    let his=document.getElementById("history").value;
    let geo=document.getElementById("geo").value;
    let eng=document.getElementById("english").value;

    let total = parseFloat(math)+parseFloat(sci)+parseFloat(his)+parseFloat(geo)+parseFloat(eng);
    let per = (total/500)*100;
    let grade=" ";

    if(per>=90){
        grade="A"
    }
    else if(per>=80 && per<90){
        grade="B";
    }
    else if(per>=60 && per<80){
        grade="C";
    }
    else if(per>=40 && per<60){
        grade="D";
    }
    else{
        grade="Fail";
    }
    // alert(grade);

    document.getElementById("print").innerHTML = `You have scored ${total} out of 400 and your percentage is ${per}
    your grade is ${grade}`; 
    
}