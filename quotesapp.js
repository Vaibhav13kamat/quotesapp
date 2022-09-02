function quotes_button() {
    fetch("https://quote-api-app.herokuapp.com/quote").then((data) => {
        return data.json(); //converted to object
      })
      .then((info1) => {
        console.log(info1[0]);
        let list1 = "";
        info1.map((values) => {
          list1 += `   
              <h5>"${values.quote}"</h5>
              <p><b >&nbsp~${values.author}</b></p>
              <li>Likes:&nbsp${values.likes}</li>
              <li>Dislikes:&nbsp${values.dislikes}</li>
                <br>  <br>     
          `;
        });
        document.getElementById("names").innerHTML = list1;
      });
  }

  function author_button() {
    fetch("https://quote-api-app.herokuapp.com/author").then((data2) => {
        return data2.json(); //converted to object
      })
      .then((info2) => {
        console.log(info2[0]);
        let list2 = "";
        info2.map((value) => {
          list2 += ` 
              <li>${value}</li>
           `;
        });
        document.getElementById("name").addEventListener("click", myFunction);
        document.getElementById("name").innerHTML = list2;
        
      });
  }

  function search_button() {

    let users = []
    const url = "https://quote-api-app.herokuapp.com/quote/search?author="
    const value = document.getElementById('input_text').value
    const api = url + value  

    fetch(api).then((data3) => {
          return data3.json(); //converted to object
        })
        .then((info3) => {
          users = info3.map(user => {
            
            console.log(info3[0]);
            let list2 = "";
            info3.map((values) => {
              list2 += `   
                  <h5>"${values.quote}"</h5>
                  <p><b >&nbsp~${values.author}</b></p>
                  <li>Likes:&nbsp${values.likes}</li>
                  <li>Dislikes:&nbsp${values.dislikes}</li>
                    <br>  <br>     
              `;
            });
            document.getElementById("names").innerHTML = list2;
          });
        });
    }

    function myFunction() {
      document.getElementById("names").innerHTML = "YOU CLICKED ME!";
      
    }