const cardData = [
    {
        heading:'this is a card1',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://plus.unsplash.com/premium_photo-1664197369184-53a8b803a93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHMlMjBhbmQlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D",
    button: 'Click here'
},
    {
        heading:'this is a card 2',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    button: 'Click here'
},
    {
        heading:'this is a card 3',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    button: 'Click here'
},
    {
        heading:'this is a card 4',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
    image_url : "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    button: 'Click here'
}
]

const postcontainer = document.querySelector('.container');
 
const postmethod = ()=>{
    cardData.map((postdata)=>{
        const postelement= document.createElement('div');
        postelement.classList.add('card');
        postelement.innerHTML=`<img src=${postdata.image_url} alt="" />
        <h2 class="heading">${postdata.heading}</h2>
        <p class="card-para">
          Lorem ips eaque architec sapiente, maxime quaerat quia? Nisi est animi
          quis enim necessitatibus delectus eos id commodi ipsam?
        </p>
        <button class="btn">${postdata.button}</button>`
        postcontainer.appendChild(postelement)
    })
}
postmethod()