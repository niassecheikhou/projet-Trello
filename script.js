const ajoutcolonne=document.getElementById('header-colonne');
const ajoutmodal=document.getElementById('header-notes');
// const containermodal=document.getElementById('container-modal');
const container = document.getElementById('container');
const modalsTotale = document.getElementById('modals-totale');

const btn=document.getElementById('btn');
const mestaches= document.getElementById('mestaches');
const mesdates=document.getElementById('mesdates');
const myfisttime=document.getElementById('myfisttime');
const mysecondetime=document.getElementById('mysecondetime');
const iconecolonne=document.getElementById('iconecolonne');
const corbeille1=document.getElementById('bxs-trash');
const containerCorbeille=document.getElementById('container-corbeille');
const corbeille=document.getElementById('corbeille')
const contenairSup=document.getElementById('contenair-sup')




var tabcouleur=[
    '#F0808065',
    '#00adad65',
    '#00FF0065',
    '#0000FF65',
    '#80800065',
    '#00800065',
    '#00adad75'
]
var couleur=[
    '#ff1a8c',
    '#b452ff',
    '#00adad',
    '#ad9300',
    '#00ff7f',
    '#8f9779'
]
var col=0

function getColonne(){
    

    const i=document.createElement('i');
        i.setAttribute('class','fa-solid fa-trash-can')
        // i.innerHTML='&times;';

        const editcolonne=document.createElement('input');
        editcolonne.setAttribute('class','put' )
        editcolonne.disabled=true;
        
        
        const mydiv=document.createElement('div');
        mydiv.setAttribute('class','parentinput');
        mydiv.appendChild(editcolonne);
        
        
        const autre=document.createElement('div')  
        autre.setAttribute('class','autre')  
        autre.style.backgroundColor=couleur[col]; 
        autre.appendChild(mydiv);
       autre.appendChild(i);

    //    autre.style.backgroundColor='red';
    const partietache=document.createElement('div');
             partietache.setAttribute('class','partietache');
    
    const colonnes=document.createElement('div');
    colonnes.setAttribute('class','colonne');
    colonnes.id=col;
    colonnes.style.backgroundColor=tabcouleur[col];
    col++
    colonnes.appendChild( autre);
    colonnes.appendChild(partietache)
    
    

    
    
    
    // colonnes.style.backgroundColor="rgba(0,0,0,0.5)"
    
    mydiv.addEventListener('dblclick', function(){
        
        editcolonne.disabled=false;
        editcolonne.focus();
    })
    
    
    i.addEventListener('click', function(){
        colonnes.parentElement.removeChild(colonnes);
        document.querySelectorAll('.put').forEach((element, i)=>{
            element.value='colonnes '+(i+1);
            
        })
        col--
    })
    // editcolonne.value='Colonne '+col;
    
    
    return colonnes
    
}


var cpt=1

 


ajoutcolonne.addEventListener('click', function(){    
    
    if(container.childElementCount < 5){
        container.appendChild(getColonne());

        // getColonne()
        document.querySelectorAll('.put').forEach((element, i)=>{
            element.value='colonnes '+(i+1);
            
        })
        
       } 
})


ajoutmodal.addEventListener('click', function(){
        if(container.children.length =1){
            modalsTotale.setAttribute('class','modals-totale show-modal');
        }else{
            alert('Ajouter d\'abord une colonne');
                
        }
})
iconecolonne.addEventListener('click', function(){
        modalsTotale.parentElement.removeChild(modalsTotale);
})
btn.addEventListener('click', function(){
//        getColonne()
       const coll=document.querySelector('.partietache')
      /* const colll=document.querySelector('.colonne');
            colll.setAttribute('id',col)
            cpt++*/
//        console.log(col.innerHTML="niass");

        const i1=document.createElement('i');
        i1.setAttribute('class','icone1');
        i1.innerHTML='&#xab';

        const i2=document.createElement('i');
        i2.setAttribute('class','icone2');
        i2.innerHTML='&#xbb';

        const sup=document.createElement('i')
                sup.setAttribute('class','bx bxs-checkbox-minus')
                

        const text1=document.createElement('p');
                text1.setAttribute('class','text1' );
                text1.innerText = mestaches.value;
        
         const text2=document.createElement('p');       
                text2.innerText = mesdates.value;
                text2.setAttribute('class','text2' );

        
        const text3=document.createElement('p');
                text3.innerText = myfisttime.value;
                text3.setAttribute('class','text3' );

        const text4=document.createElement('p')
                 text4.setAttribute('class','text4' );
                  text4.innerText = mysecondetime.value;

         const divtext1=document.createElement('div');
                divtext1.setAttribute('class','divtext1')
                divtext1.appendChild(text1)
        
         const divtext2=document.createElement('div');
                 divtext2.setAttribute('class','divtext2')
                divtext2.appendChild(text2)

  
         const divtext3=document.createElement('div');
                divtext3.setAttribute('class','divtext3')
                 divtext3.appendChild(text3)


         const divtext4=document.createElement('div');
                divtext4.setAttribute('class','divtext4')
               divtext4.appendChild(text4)

        const divtext34=document.createElement('div')
                divtext34.setAttribute('class','divtext34')
                divtext34.appendChild(divtext3)
                divtext34.appendChild(divtext4)
        
                    //div des text 
         const divtext=document.createElement('div')
                divtext.setAttribute('class','divtext')
                divtext.appendChild(divtext1)
                divtext.appendChild(divtext2)
                divtext.appendChild(divtext34)

        /*const divicone=document.createElement('div')
                divicone.setAttribute('class','divicone')
                divicone.appendChild(i2)
                divicone.appendChild(i1)*/
        
    
          const tacheicone=document.createElement('div')
                tacheicone.setAttribute('class','tacheicone')
                tacheicone.appendChild(i1)
                tacheicone.appendChild(sup)
                tacheicone.appendChild(divtext)
                tacheicone.appendChild(i2)


         coll.appendChild(tacheicone);
        


        i2.addEventListener('click', (e)=>{
        
            var suivant=e.target.parentElement.parentElement.parentElement.id;
             var idEntier=(parseInt(suivant))
             var colonneSuivant=document.getElementById(idEntier+1)
             colonneSuivant.lastChild.appendChild(tacheicone)

            // var suivantplus=+suivant+1;
            // var colsuivant1=document.getElementById(suivantplus);
            // var colsuivant2=i1.parentElement;

            // colsuivant1.appendChild(suivant2);
            
        })
        i1.addEventListener('click', (e)=>{
            var suivant=e.target.parentElement.parentElement.parentElement.id;
            var idEntier=(parseInt(suivant))
            var colonneSuivant=document.getElementById(idEntier-1)
            colonneSuivant.lastChild.appendChild(tacheicone)
           
        })
        sup.addEventListener('click', (e)=>{
    
            contenairSup.classList.add('show-message-alert');

            
            const oui=document.getElementById('h1')
            const non=document.getElementById('h2')

            oui.addEventListener('click', (e)=>{
                
                contenairSup.classList.remove('show-message-alert');
               /* var suprimer=e.target.parentElement;
                corbeille.appendChild(suprimer)
                tacheicone.parentElement.removeChild(tacheicone)*/
                corbeille.appendChild(tacheicone)


            })
            non.addEventListener('click', (e)=>{
                contenairSup.classList.remove('show-message-alert');
                
            })

            
       })
       
        
})

corbeille1.addEventListener('click', (e)=>{
    containerCorbeille.classList.toggle('show-corbeille');  
})



