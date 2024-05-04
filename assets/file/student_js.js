import {StudentModel} from "./StudentModel.js";

$('#nav-student').on('click',()=>{

    $('#coursePage').removeClass("open");
    $('#studentPage').removeClass("close");
    $('#studentPage').addClass("open");
    $('#coursePage').addClass("close");
    console.log("clickedStudent");

})
    $('#nav-course').on('click',()=>{
    $('#studentPage').addClass("close");
    $('#coursePage').removeClass("close");
    $('#coursePage').addClass("open");
    console.log("clickedCourse");
});
    let students=[];
    let clickedRecord;
    function loadTable(){
    $('#tableBody').empty();
    students.map((item,index)=>{
    var record= `<tr>
            <th scope="row" class="colID">${item.id}</th>
            <td class="colfname">${item.fname}</td>
            <td class="collName">${item.lname}</td>
            <td class="colAddress">${item.address}</td>
            <td class="colcName">${item.course}</td>
        </tr>`;
    $('#studenttable').append(record);
});



}

    $('#submitBtn').on('click',()=>{

    let id=$('#studentId').val();
    let fname=$('#fName').val();
    let laname=$('#lName').val();
    let address=$('#studentaddress').val();
    let cName =$('input[name="flexRadioDefault"]:checked').val();

    // create student object by class

   /* let student={
    id:id,
    fname:fname,
    lname:laname,
    address:address,
    course:cName,
    age:55,

    call: ()=>{
    console.log("saved");
}

}*/

        let student =new StudentModel(id,fname,laname,address,cName);


    students.push(student);
    loadTable();
    $('#resetBtn').click();
    console.log(students[0]);




    console.log("clickedCourse");
    console.log("id "+student.id);
    console.log("first name "+ student.fname);
    console.log("last name "+ student.lname);
    console.log("address "+ student.address);
    console.log("course"+ student.course);
    /*var record= `<tr>
        <th scope="row" class="colID">${id}</th>
        <td class="colfname">${fname}</td>
        <td class="collName">${laname}</td>
        <td class="colAddress">${address}</td>
        <td class="colcName">${cName}</td>
    </tr>`;
    $('#studenttable').append(record);
*/
});
    $('#tableBody').on('click','tr',function (){
    let index=$(this).index();
    clickedRecord=index;
    let fname=$(this).find(".colfname").text();
    let lname=$(this).find(".collName").text();
    let address=$(this).find(".colAddress").text();
    let id=$(this).find(".colID").text();
    let course=$(this).find(".colcName").text();
    console.log("clicked row "+ index);
    console.log("clicked id "+ id);
    console.log("clicked fName "+ fname);
    console.log("clicked lName "+ lname);
    console.log("clicked address "+ address);

    $('#studentId').val(id);
    $('#fName').val(fname);
    $('#lName').val(lname);
    $('#studentaddress').val(address);
    $(`input[name="flexRadioDefault"][value=${course}]`).prop('checked', true);})

    $('#resetBtn').on('click',()=>{
    $('#studentId').val("");
    $('#fName').val("");
    $('#lName').val("");
    $('#studentaddress').val("");
    $(`input[name="flexRadioDefault"]`).prop('checked', false);
});
    $('#updateBtn').on('click',()=>{

    let id=$('#studentId').val();
    let fname=$('#fName').val();
    let laname=$('#lName').val();
    let address=$('#studentaddress').val();
    let cName =$('input[name="flexRadioDefault"]:checked').val();

    students[clickedRecord].fname=fname;
    students[clickedRecord].lname=laname;
    students[clickedRecord].address=address;
    students[clickedRecord].course=cName;
    loadTable();

});
    $('#deleteBtn').on('click',()=>{
    students.splice(clickedRecord, 1);
    loadTable();
});


