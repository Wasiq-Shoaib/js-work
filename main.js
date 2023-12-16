const Data = [
    {
        heading:'This is a card1',
        body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed quidem, error reprehenderit facilis dicta unde earum quod et in deserunt modi sequi, aliquam quia quo. Quae sed possimus autem!",
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
    
},
    {
        heading:'This is a card 2',
        body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed quidem, error reprehenderit facilis dicta unde earum quod et in deserunt modi sequi, aliquam quia quo. Quae sed possimus autem!",
        url: "https://images.unsplash.com/photo-1582807129843-8a00296ccb37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
    
},
    {
        heading:'This is a card 3',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
        url:"https://images.unsplash.com/photo-1549298916-f52d724204b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJzfGVufDB8fDB8fHww"
    
},
    {
        heading:'This is a card 4',
        body : "loremaka kdkkaj kdjkdjaka kdkjadakdjad uroeriee dkdlk;d lklaka ldkaldaklda kdjakdjakd",
        url:"https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
    
}
]

const postcontainer = document.querySelector('.container');
 
const postmethod = ()=>{
    Data.map((info)=>{
        const postelement= document.createElement('div');
        postelement.classList.add('card');
        postelement.innerHTML=` <img src="${info.url}" alt="" />
        <h2 class="heading">${info.heading}</h2>
        <p class="card-para">
          Lorem ips eaque architec sapiente, maxime quaerat quia? Nisi est animi
          quis enim necessitatibus delectus eos id commodi ipsam?
        </p> 
        <button class="btn">Buy Now</button>`
        postcontainer.appendChild(postelement)
    })
}
postmethod()