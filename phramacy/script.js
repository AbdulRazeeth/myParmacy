'use strict'
//total racks container
let billingQuantity
 const racks=[
    //Racks-1 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med001',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med002',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:4,
            },
            {
                medicineName:'med003',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med004',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
            {
                medicineName:'med005',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:5,
            },
            {
                medicineName:'med006',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:4,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med007',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:6,
            },
            {
                medicineName:'med008',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:7,
            },
            {
                medicineName:'med009',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:9,
            },
        ]
    ],
    //rack-2 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med010',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
            {
                medicineName:'med011',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med012',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:4,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med013',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:9,
            },
            {
                medicineName:'med014',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med015',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med016',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:6,
            },
            {
                medicineName:'med017',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:7,
            },
            {
                medicineName:'med018',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:12,
            },
        ]
    ],
    //rack-3 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med019',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
            {
                medicineName:'med020',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med021',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med022',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
            {
                medicineName:'med023',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:8,
            },
            {
                medicineName:'med024',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:13,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med025',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med026',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:9,
            },
            {
                medicineName:'med027',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:7,
            },
        ]
    ],
    //rack-4 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med028',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:6,
            },
            {
                medicineName:'med029',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:5,
            },
            {
                medicineName:'med030',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:4,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med031',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
            {
                medicineName:'med032',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med033',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med034',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:10,
            },
            {
                medicineName:'med035',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:11,
            },
            {
                medicineName:'med036',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:7,
            },
        ]
    ],
    //rack-5 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med037',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:9,
            },
            {
                medicineName:'med038',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
            {
                medicineName:'med039',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:14,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med040',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:12,
            },
            {
                medicineName:'med041',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:11,
            },
            {
                medicineName:'med042',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:12,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med043',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:16,
            },
            {
                medicineName:'med044',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:8,
            },
            {
                medicineName:'med045',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
        ]
    ],
    //rack-6 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med046',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
            {
                medicineName:'med047',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med048',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:10,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med049',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:4,
            },
            {
                medicineName:'med050',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:5,
            },
            {
                medicineName:'med051',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med052',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:4,
            },
            {
                medicineName:'med053',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:8,
            },
            {
                medicineName:'med054',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:6,
            },
        ]
    ],
    //rack-7 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med055',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:5,
            },
            {
                medicineName:'med056',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:8,
            },
            {
                medicineName:'med057',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med058',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med059',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:16,
            },
            {
                medicineName:'med060',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:5,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med061',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
            {
                medicineName:'med062',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:1,
            },
            {
                medicineName:'med063',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
        ]
    ],
    //rack-8 container
    [
        //Shelf-1 Container
        [
            {
                medicineName:'med064',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:10,
            },
            {
                medicineName:'med065',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:16,
            },
            {
                medicineName:'med066',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:13,
            },
        ],
        //shelf-2 container
        [
            {
                medicineName:'med067',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:5,
            },
            {
                medicineName:'med068',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:9,
            },
            {
                medicineName:'med069',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:8,
            },
        ],
        //shelf-3 container
        [
            {
                medicineName:'med070',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:3,
            },
            {
                medicineName:'med071',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:2,
            },
            {
                medicineName:'med072',
                totalCapacity:100,
                currentQuantity:100,
                pricePerUnit:12,
            },
        ]
    ],
]
let selectedMedicine 
let quantityValue
function search(value){
    let search = document.getElementById('inputField').value
    let rackIndex = value.length
    for(let i=0; i<rackIndex; i++){
        let individualRack = value[i]
        for(let j=0; j<individualRack.length; j++){
            let individualshelf = individualRack[j]
            for(let k=0; k<individualshelf.length; k++){
                if(search === individualshelf[k].medicineName){
                    selectedMedicine = individualshelf[k]
                    document.getElementById('pathWay').innerHTML=`Rack-number-${i+1},shelf-number-${j+1},container-${k+1}`
                    selectedMedicine = individualshelf[k]
                    document.getElementById('med-name').innerHTML = selectedMedicine.medicineName
                    document.getElementById('total-cap').innerHTML= selectedMedicine.totalCapacity
                    document.getElementById('avai-quan').innerHTML= selectedMedicine.currentQuantity
                    document.getElementById('price-unit').innerHTML=selectedMedicine.pricePerUnit
                    console.log(individualshelf[k])
                }
            }
        }
    }
}
function display(){
    let show = document.getElementById('biller')
    show.classList.remove('hide')
}
function billing(){
    quantityValue = document.getElementById('quantityField').value
    console.log(quantityValue)
    let availability = selectedMedicine.currentQuantity - quantityValue
    selectedMedicine.currentQuantity = availability
    console.log(selectedMedicine )
    document.getElementById('avai-quan').innerHTML= selectedMedicine.currentQuantity
    let totalPrice =document.getElementById('price')
    totalPrice.innerHTML = selectedMedicine.pricePerUnit*quantityValue
}