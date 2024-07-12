
let rightImga = document.querySelector(".imge");
let rightImga2 = document.querySelector(".imge2");

// console.log(rightImga);

let imageArr = ['image/pexels-sachin-c-nair-236689-954929.jpg','image/pexels-pixabay-206359.jpg','image/pexels-dreamypixel-552779.jpg',
    "image/pexels.jpg","image/pexels-michael-.jpg"
]

let index = 0

rightImga.addEventListener("click", () => {
    
    let gitImage = document.querySelector("#gitImage")
    
    index=(index+1)%imageArr.length

    gitImage.src=imageArr[index]
    
    
    // console.log('hello');
});
rightImga2.addEventListener("click", () => {

    let gitImage = document.querySelector("#gitImage")
    
    index=(index+1)%imageArr.length

    gitImage.src=imageArr[index]

    // console.log('hello');
});
