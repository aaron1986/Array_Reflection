
/*------- API -------*/
 function get_image() {
    let access_key = 'FxRcuJ9xM-byHM61QuIvlNIUX-kuVsp0B2hNRenYLqY';
    let url = `https://api.unsplash.com/photos/random/?client_id=mC_WkXYQ5zbE5WZnLx1cVRpfAMwCF5LvA7OJesp1Idg`;
    
    let imageElement = document.querySelector('.image');
    
    fetch(url)
    .then(function(response){
        //console.log(response.json())
        return response.json();
    })
    
    .then(function(jsonData){
        imageElement.src = jsonData.urls.regular;
    })
    
     }
    
    /*------- ARRAY -------*/
    let selected_images = [];
    
    document.querySelectorAll('.large-image').forEach(function(img, idx) {
      img.src = "" + idx;
      img.addEventListener('click', function({target: src}){
        if(!selected_images.includes(src)) {
          selected_images.push(src);
        }
        console.log(selected_images);
       });
    
    });
    
    /*------- SESSION STORAGE -------*/
    /*const _SaveData = () => {
      // Get elements
      let img = document.querySelector('.image'),
          email = document.querySelector('#email').value;
      
      // Validate email address format
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('error-text').innerHTML = 'Invalid Email Address!';
        //console.log(`Invalid Email Address!`)
        return
      }
      
      // Set the new data and retrive any previously stored data
      let newData = {
        email: email,
        img: img.src
      },
          data = (sessionStorage.getItem("data")) ? JSON.parse(sessionStorage.getItem("data")) : []
      
      // Update data
      data = [...data, newData]
      
      // Save data
      sessionStorage.setItem("data", JSON.stringify(data))
      console.log(`Data Saved!`)

    }
*/
    /*------- OUTPUT SESSION -------*/
    const _SaveData = () => {
      // Get elements
      let img = document.querySelector('.image'),
    email = document.getElementById('email'),
    email_err = document.getElementById('email').value;
      


    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_err)) {
      document.getElementById('error-text').innerHTML = 'Invalid Email Address!';
      //console.log(`Invalid Email Address!`)
      return
    }

        //Add email to session storage and output result
        const emailValue = email.value;
        sessionStorage.setItem('email', emailValue);

        //Add image to session storage and output result
       let pic = img.src;
       sessionStorage.setItem('.image', pic);
       

        //New Page
        window.location.href = "next-page.html";

        
        
      }
