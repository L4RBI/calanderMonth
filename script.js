function month(startDay, maxDays, nameMonth, parent){
    //startDay is the offset meaning at what day the month starts
    //max days 28 29 30 or 31
    //nameMonth is the string name 
    //parent is the element to which you want to attach the month

    //styling
    let color = "purple";
    let width = "70px";
    let height = "80px";
    
    startDay = startDay % 7;

    parent.innerHTML += 
    `<h2 align="center" style="color: orange;">`
		+ nameMonth + `2022 </h2>`
    
    days = []
    for (let index = 0; index < startDay; index++) {
        days.push("")
    }
    for (let index = 1; index <= maxDays; index++) {
        days.push(index)
    }
    console.log(days)

    let table = document.createElement("table");
    table.bgcolor="lightgrey";
    table.style.textAlign = "center"; 
    table.style.borderCollapse = "collapse"; 
    table.style.background = "white"; 
    table.style.color = "black"; 
    table.border= "3"
    parent.append(table) 


    table.innerHTML = 
    `<thead>
    <tr>
        <!-- Here we have applied inline style
            to make it more attractive-->
        <th style="color: white; background: ` + color + `; width: ` + width + `; height: ` + height + `">
            Sun</th>
        <th style="color: white; background: ` + color + `;">
            Mon</th>
        <th style="color: white; background: ` + color + `;">
            Tue</th>
        <th style="color: white; background: ` + color + `;">
            Wed</th>
        <th style="color: white; background: ` + color + `;">
            Thu</th>
        <th style="color: white; background: ` + color + `;">
            Fri</th>
        <th style="color: white; background: ` + color + `;">
            Sat</th>
    </tr>
    </thead>`
    
    let tbody = document.createElement("tbody");
    table.append(tbody)
    let rows;
    if (startDay < 5){
        rows = 5;
    }else{
        rows = 6;
    }
    let d = 0
    for (let index = 0; index < rows; index++) {
        let tr = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            let td = document.createElement("td");
            td.style.width = width;
            td.style.height = height;
            if(days[d] == undefined){
                td.innerText = "";
            }else{
                td.innerText = days[d];
                d +=1;
            }
            tr.append(td)
        }     
        tbody.append(tr)   
    }
    // events
    $(document).on("click","td",function(){
        let temp = $(this).text()
        if(temp != ""){
            $(this).toggleClass("checked");
            //$(this).html(temp + "<br/>X");
        }
            
    })
}

month(7,31,"january",document.body)



