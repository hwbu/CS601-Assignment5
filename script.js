async function fetchData(url="https://github.com/hwbu/CS601-Assignment5/blob/main/degrees.json"){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
    });
    document.write(response.status);
    const data = await response.json();
    show(data);
}

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>degree</th>
          <th>school</th>
          <th>program/major</th>
          <th>type</th>
          <th>year conferred</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
        <td>${r.school} </td>
        <td>${r.program/major}</td>
        <td>${r.type}</td> 
        <td>${r.year}</td>
        </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("degrees").innerHTML = tab;
}