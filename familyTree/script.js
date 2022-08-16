'use strict'
const myFamily = {
    name:'Muthu Ganapathi',
    relationship:'myself',
    maritalStatus:false,
    gender:'male',
    parent:{
        father:{
            name:'Mani',
            relationship:'father',
            maritalStatus:true,
            gender:'male',
            wife:'nambinachiar',
            parent:{
                father:{
                    name:'Ganapathi',
                    relationship: 'grand father',
                    maritalStatus:true,
                    gender:'male',
                    wife:'esakkiammal',
                },
                mother:{
                    name:'Esakkiammal',
                    relationship:'grand mother',
                    maritalStatus:true,
                    gender:'female',
                    husband:'ganapathi',
                },
                children:['padma','mani','bagavathi']
            },
            coBorn:[
                {
                    name:'Padma',
                    relationship:'anuty',
                    maritalStatus:true,
                    gender:'female',
                    husband:{
                        name:'Karthikeyan',
                        relationship:'uncle'
                    },
                    father:'ganapathi',
                    mother:'esakkiammal',
                    childrens:['Venkatesh','Ganesh','Muthu Kumar']
                },
                {
                    name:'Bagavathi',
                    relationship:'anuty',
                    maritalStatus:true,
                    gender:'female',
                    husband:{
                        name:'Senthil Kumar',
                        relationship:'Uncle'
                    },
                    father:'ganapathi',
                    mother:'esakkiammal',
                    childrens:['Raji','Saranya']
                }
            ]
        },
        mother:{
            name:'Nambi Nachiar',
            relationship:'mother',
            maritalStatus:true,
            gender:'female',
            husband:'mani',
            parent:{
                father:{
                    name:'Uthiravasagam',
                    relationship:'grand father',
                    maritalStatus:true,
                    gender:'male',
                    wife:'aachiammal',
                },
                mother:{
                    name:'Aachiammal',
                    relationship:'grand mother',
                    maritalStatus:true,
                    gender:'female',
                    husband:'uthiravasagam',
                },
            },
            coBorn:[
                {
                    name:'Perumal',
                    relationship:'uncle',
                    maritalStatus:true,
                    gender:'male',
                    wife:{
                        name:'Dhillaiammal',
                        relationship:'Aunty'
                    },
                    childrens:['Prakash','Karthiga','Santhosh']
                }
            ]
        },
        childrens:['muthuganapthi','indhu']
    },
    coBorn:[
        {
            name:'Indhu',
            relationship:'sister',
            maritalStatus:false,
            gender:'female',
        }
    ]
}
console.log(myFamily)
//element
const gen3 = document.querySelector('.generation3')
const gen2 = document.querySelector('.generation2')
const gen1 = document.querySelector('.generation1')
const renderer = function(familyValue){
    const myContainer = document.createElement('div')
    myContainer.className ='flex-style-mother'
    const myself = document.createElement('span')
    myself.className = 'profile-style my-self'
    myself.textContent = familyValue.name
    myContainer.appendChild(myself)
    // const myselfRelationship = document.createElement('span')
    // myselfRelationship.className='relationship-style'
    // myselfRelationship.textContent = familyValue.relationship
    // myself.appendChild(myselfRelationship)
    familyValue.coBorn.forEach((people)=>{
        const coBorn = document.createElement('span')
        coBorn.className='profile-style my-co-born'
        coBorn.textContent=people.name
        myContainer.appendChild(coBorn)
        // const myCoBornRelationship = document.createElement('span')
        // myCoBornRelationship.className='relationship-style'
        // myCoBornRelationship.innerHTML =people.relationship
        // coBorn.appendChild(myCoBornRelationship)
    })
    gen3.appendChild(myContainer)
    const fatherFam = document.createElement('div')
    fatherFam.className ='flex-style'
    const father = document.createElement('span')
    father.className = 'profile-style father'
    father.textContent = familyValue.parent.father.name
    fatherFam.appendChild(father)
    const marking1 = document.createElement('span')
    marking1.className='parent-line'
    father.appendChild(marking1)
    const fatherCoBornContainer = document.createElement('div')
    fatherCoBornContainer.className='father-coborn-style'
    familyValue.parent.father.coBorn.forEach((person,i)=>{
        const coBornFamContainer = document.createElement('div')
        coBornFamContainer.className ='flex-style'
        const fatherCoBorn = document.createElement('span')
        fatherCoBorn.className=`profile-style co-born`
        fatherCoBorn.textContent = person.name
        coBornFamContainer.appendChild(fatherCoBorn)
        // const anutRelation = document.createElement('span')
        // anutRelation.className='relationship-style'
        // anutRelation.innerHTML=person.relationship
        // fatherCoBorn.appendChild(anutRelation)
        const coBornHusband = document.createElement('span')
        coBornHusband.className='profile-style'
        coBornHusband.textContent=person.husband.name
        coBornFamContainer.appendChild(coBornHusband)
        // const uncleRelation = document.createElement('span')
        // uncleRelation.className='relationship-style'
        // uncleRelation.innerHTML=person.husband.relationship
        // coBornHusband.appendChild(uncleRelation)
        const coBornChildren = document.createElement('div')
        coBornChildren.className='father-coborn-style'
        person.childrens.forEach((children,i)=>{
            const coBornChildrens = document.createElement('span')
            coBornChildrens.className =`profile-style ${children.toLowerCase()}`
            coBornChildrens.textContent = children
            coBornChildren.appendChild(coBornChildrens)
            coBornFamContainer.appendChild(coBornChildren)
            // const cousinRelation = document.createElement('span')
            // cousinRelation.className='relationship-style'
            // cousinRelation.textContent='Cousin'
            // coBornChildrens.appendChild(cousinRelation)
        })
        fatherCoBornContainer.appendChild(coBornFamContainer)
        fatherFam.appendChild(fatherCoBornContainer)
    })
    gen2.appendChild(fatherFam)
    const motherFam = document.createElement('div')
    motherFam.className='flex-style-mother'
    const mother = document.createElement('span')
    mother.className = 'profile-style mother'
    mother.textContent = familyValue.parent.mother.name
    motherFam.appendChild(mother)
    const marking2 = document.createElement('span')
    marking2.className='parent-mother'
    mother.appendChild(marking2)
    const motherCoBorncontainer = document.createElement('div')
    motherCoBorncontainer.className='father-coborn-style'
    familyValue.parent.mother.coBorn.forEach((person)=>{
        const motherCoBorncontainerSub =document.createElement('div')
        motherCoBorncontainerSub.className='flex-style-mother'
        const motherCoBorn = document.createElement('span')
        motherCoBorn.className='profile-style mother'
        motherCoBorn.textContent=person.name
        motherCoBorncontainerSub.appendChild(motherCoBorn)
        const motherCoBornWife = document.createElement('span')
        motherCoBornWife.className='profile-style'
        motherCoBornWife.textContent=person.wife.name
        motherCoBorncontainerSub.appendChild(motherCoBornWife)
        const motherCoBornChildrenCont = document.createElement('div')
        motherCoBornChildrenCont.className='father-coborn-style'
        person.childrens.forEach((children)=>{
            const motherCoBornChildren = document.createElement('span')
            motherCoBornChildren.className=`profile-style ${children}`
            motherCoBornChildren.textContent=children
            motherCoBornChildrenCont.appendChild(motherCoBornChildren)
            motherCoBorncontainerSub.appendChild(motherCoBornChildrenCont)
        })
        motherCoBorncontainer.appendChild(motherCoBorncontainerSub)
        motherFam.appendChild(motherCoBorncontainer)
    })
    gen2.appendChild(motherFam)
    const grandParentFather = document.createElement('div')
    grandParentFather.className='flex-style-mother'
    const fatherGrandFather = document.createElement('span')
    fatherGrandFather.className='profile-style'
    fatherGrandFather.textContent=familyValue.parent.father.parent.father.name 
    grandParentFather.appendChild(fatherGrandFather)
    const fatherGrandMother = document.createElement('span')
    fatherGrandMother.className='profile-style'
    fatherGrandMother.textContent=familyValue.parent.father.parent.mother.name 
    grandParentFather.appendChild(fatherGrandMother)
    gen1.appendChild(grandParentFather)
    const grandParentMother = document.createElement('div')
    grandParentMother.className='flex-style-mother'
    const motherGrandFather = document.createElement('span')
    motherGrandFather.className='profile-style'
    motherGrandFather.textContent=familyValue.parent.mother.parent.father.name
    grandParentMother.appendChild(motherGrandFather)
    const motherGrandMother = document.createElement('span')
    motherGrandMother.className='profile-style'
    motherGrandMother.textContent=familyValue.parent.mother.parent.mother.name 
    grandParentMother.appendChild(motherGrandMother)
    gen1.appendChild(grandParentMother)
}
renderer(myFamily)