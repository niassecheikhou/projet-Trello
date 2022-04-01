function getModals(){
        //les fils du div header-modal

        const span0=document.createElement('span');
        span0.innerText='NOUVELLE TACHE';

        const i=document.createElement('i');
                  i.innerText='&times;';

                

       //le fils du div container-modal

        const span=document.createElement('span');
                span.innerText='Remplir les informations de la nouvelle tache'
        const div1=document.createElement('div');
                div1.setAttribute('class','div1')
                div1.appendChild(span)

        const label1=document.createElement('label');
                label1.innerText='Tache';
        const textarea=document.createElement('textarea');
                textarea.setAttribute('class','text');
                textarea.setAttribute('rows','20') ; 
                textarea.setAttribute('cols','20');
                   
        const div2=document.createElement('div');
                 div2.setAttribute('class','div2');
                 div2.appendChild(label1);
                 div2.appendChild(textarea);

         const label2=document.createElement('label');
                label2.innerText='Date';
        const input1=document.createElement('input');
                input1.setAttribute('type','date');
                input1.setAttribute('placeholder', 'jj/mm/aaaa');
         const div3=document.createElement('div');
                div3.setAttribute('class','div3');
                div3.appendChild(label2);
                div3.appendChild(input1);
        
        const label3=document.createElement('label');
                label3.innerText='Heure de Debut';
        const input2=document.createElement('input');      
                 input2.setAttribute('type','time');
        const div4=document.createElement('div');
                div4.setAttribute('class','div4');
                div4.appendChild(label3);
                div4.appendChild(input2);

         const label4=document.createElement('label');
                label4.innerText='Heure de Fin';
        const input3=document.createElement('input');      
                 input3.setAttribute('type','time');
        const div5=document.createElement('div');
                div5.setAttribute('class','div4');
                div5.appendChild(label4);
                div5.appendChild(input3);

        const bouton=document.createElement('button');
                bouton.setAttribute('type','button');
                bouton.setAttribute('id','btn');
                bouton.innerText='Ajouter';
        const div6=document.createElement('div');
                 div6.setAttribute('class','div6');
                 div6.appendChild(bouton);

               
                // creation du div container-content

          const container=document.createElement('div');
                container.setAttribute('class','container-content');
                 container.appendChild(div1);
                container.appendChild(div2);
                container.appendChild(div3);
                container.appendChild(div4);
                container.appendChild(div5);
                container.appendChild(div6);

                const containermodal=document.createElement('div');
                containermodal.appendChild(container);
                 // creation de la div header-modal

                 const headermodal=document.createElement('div');
                 headermodal.setAttribute('class','header-modal');
                 headermodal.setAttribute('id','header-modal'); 
                 headermodal.appendChild(span0);
                 headermodal.appendChild(i);


        const divh=document.createElement('div');
                divh.setAttribute('class','modal');
                divh.setAttribute('id ','modal');
                divh.setAttribute(headermodal);
                divh.appendChild(containermodal);

        


                modalsTotale.appendChild(divh);
                
 }  

    getModals()
